import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateQuantity } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State lưu số lượng cho từng sản phẩm
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.productId]: item.quantity }), {})
  );

  const [recipientName, setRecipientName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [shippingMethod, setShippingMethod] = useState("Giao thường");
  const [notes, setNotes] = useState("");

  // Tính phí ship
  const shippingFee = shippingMethod === "Giao nhanh" ? 10000 : 0;

  // Tính tổng tiền bao gồm cả phí ship
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + shippingFee;

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (productId, newQuantity) => {
    console.log('Current productId:', productId);
    console.log('New Quantity:', newQuantity);

    if (newQuantity < 1) return;

    setQuantities((prev) => {
      console.log('Previous quantities:', prev);
      const newQuantities = { ...prev, [productId]: newQuantity };
      console.log('New quantities:', newQuantities);
      return newQuantities;
    });

    // Cập nhật số lượng trực tiếp trong giỏ hàng
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  // Xử lý đặt hàng
  const handleCheckout = async () => {
    if (!recipientName || !deliveryAddress || !shippingMethod) {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
      return;
    }

    if (cartItems.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    const orderData = {
      customizeProductId: cartItems[0]?.customizeProductId || 1,
      orderDate: new Date().toISOString(),
      deliveryDate: new Date().toISOString(),
      recipientName,
      deliveryAddress,
      shippingMethod,
      shippingFee: shippingMethod === "Giao nhanh" ? 10000 : 0,
      notes: notes || "",
      price: cartItems.reduce((sum, item) => sum + item.price, 0),
      quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice,
    };

    try {
      const orderResponse = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!orderResponse.ok) {
        const errorText = await orderResponse.text();
        throw new Error(`Lỗi API ${orderResponse.status}: ${errorText}`);
      }

      const orderResult = await orderResponse.json();
      console.log("Đơn hàng tạo thành công:", orderResult);

      if (!orderResult.orderId) {
        throw new Error("Lỗi: API không trả về orderId hợp lệ!");
      }

      await createOrderStage(orderResult.orderId);

      alert("🎉 Đặt hàng thành công!");
      dispatch(clearCart());
      navigate("/checkout-confirmation");
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      alert(`Lỗi khi gửi đơn hàng: ${error.message}`);
    }
  };

  const createOrderStage = async (orderId) => {
    const stageData = {
      orderStageId: 0,
      orderId: orderId,
      orderStageName: "Chờ xử lý",
      updatedDate: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/order-stages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stageData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Lỗi API ${response.status}: ${errorText}`);
      }

      console.log("Order Stage tạo thành công:", await response.text());
    } catch (error) {
      console.error("Lỗi khi tạo Order Stage:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống.</p>
          <button onClick={() => navigate("/")} className="bg-blue-600 text-white py-2 px-6 rounded-lg">
            🛍 Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul>
              {cartItems.map((item) => (
                <li key={item.productId} className="flex justify-between items-center py-4 border-b">
                  <div className="flex items-center gap-4">
                    {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />}
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} VND</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.productId, quantities[item.productId] - 1)}
                          className="bg-gray-300 px-2 py-1 rounded"
                        >
                          ➖
                        </button>
                        <input
                          type="number"
                          value={quantities[item.productId]}
                          onChange={(e) => handleQuantityChange(item.productId, Number(e.target.value))}
                          className="w-12 text-center mx-2 border rounded"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.productId, quantities[item.productId] + 1)}
                          className="bg-gray-300 px-2 py-1 rounded"
                        >
                          ➕
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-500" onClick={() => dispatch(removeFromCart(item.productId))}>
                    ❌ Xóa
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <input type="text" placeholder="Tên người nhận" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} className="border p-2 rounded" />
            <input type="text" placeholder="Địa chỉ giao hàng" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} className="border p-2 rounded" />
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Giao thường">Giao thường</option>
              <option value="Giao nhanh">Giao nhanh (+10,000 VND)</option>
            </select>
            <input
              placeholder="Số điện thoại"
              value={notes}
              onChange={(e) => {
                const input = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(input)) {
                  setNotes(input);
                }
              }}
              className="border p-2 rounded"
            />

            <div className="flex justify-between items-center">
              <p className="text-gray-600">Phí ship: {shippingFee.toLocaleString()} VND</p>
              <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
            </div>
            <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-6 rounded-lg">Đặt Hàng</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
