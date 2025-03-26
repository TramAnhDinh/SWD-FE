import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateQuantity } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

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
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [showStatus, setShowStatus] = useState(false);
  const [orderStage, setOrderStage] = useState("Chờ xử lý");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Tính phí ship
  const shippingFee = shippingMethod === "Giao nhanh" ? 10000 : 0;

  // Tính tổng tiền bao gồm cả phí ship
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + shippingFee;

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setQuantities((prev) => ({
      ...prev,
      [productId]: newQuantity,
    }));

    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  // Xử lý thanh toán VNPAY
  const handleVNPayPayment = async (orderId) => {
    try {
      // Gọi API để lấy URL thanh toán VNPAY
      const response = await fetch(`https://phamdangtuc-001-site1.ntempurl.com/CreatePaymentUrl?orderId=${orderId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text();
      console.log("VNPAY Response:", data);
      
      if (data) {
        window.location.href = data;
      } else {
        throw new Error("Không nhận được URL thanh toán hợp lệ");
      }
    } catch (error) {
      console.error("Lỗi khi tạo URL thanh toán:", error);
      alert("Không thể tạo link thanh toán. Vui lòng thử lại!");
    }
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

    setIsLoading(true);
    setOrderStatus("processing");
    setShowStatus(true);

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
      status: "Chờ xử lý",
      paymentMethod: paymentMethod
    };

    try {
      // 1. Tạo đơn hàng
      const orderResponse = await axiosInstance.post("/Orders", orderData);
      const orderId = orderResponse.data.id || orderResponse.data.orderId;

      // 2. Tạo order stage cho trạng thái đơn hàng
      const stageData = {
        orderId: orderId,
        orderStageName: "Chờ xử lý",
        updatedDate: new Date().toISOString()
      };
      
      await axiosInstance.post("/order-stages", stageData);

      // 3. Xử lý theo phương thức thanh toán
      if (paymentMethod === "online") {
        // Thanh toán VNPAY
        await handleVNPayPayment(orderId);
      } else {
        // Thanh toán COD
        const paymentStageData = {
          orderId: orderId,
          orderStageName: "Chưa thanh toán",
          updatedDate: new Date().toISOString()
        };
        
        await axiosInstance.post("/order-stages", paymentStageData);
        
        dispatch(clearCart());
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
          navigate("/member", { 
            state: { 
              orderId: orderId,
              orderDetails: {
                recipientName,
                deliveryAddress,
                shippingMethod,
                totalPrice,
                orderDate: new Date().toLocaleString(),
                status: "Chờ xử lý",
                paymentMethod: "cod",
                paymentStatus: "Chưa thanh toán"
              }
            }
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Error details:", error);
      setOrderStatus("error");
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  // Thêm hàm xử lý hiển thị modal xác nhận
  const handleShowConfirm = () => {
    if (!recipientName || !deliveryAddress || !shippingMethod) {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
      return;
    }

    if (cartItems.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    setShowConfirmModal(true);
  };

  // Component modal xác nhận đơn hàng
  const ConfirmOrderModal = () => {
    if (!showConfirmModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h3 className="text-2xl font-bold mb-4">Xác nhận đơn hàng</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Thông tin giao hàng:</h4>
              <p>Người nhận: {recipientName}</p>
              <p>Địa chỉ: {deliveryAddress}</p>
              <p>Phương thức giao hàng: {shippingMethod}</p>
              <p>Số điện thoại: {notes}</p>
            </div>

            <div>
              <h4 className="font-semibold">Chi tiết đơn hàng:</h4>
              {cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between py-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString()} VND</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Phí ship:</span>
                <span>{shippingFee.toLocaleString()} VND</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Tổng cộng:</span>
                <span>{totalPrice.toLocaleString()} VND</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => setShowConfirmModal(false)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Hủy
            </button>
            <button
              onClick={() => {
                setShowConfirmModal(false);
                handleCheckout();
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Xác nhận đặt hàng
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Component hiển thị trạng thái đơn hàng
  const OrderStatusDisplay = () => {
    if (!showStatus) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
          {orderStatus === "processing" && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-lg font-semibold text-gray-700">Đang xử lý đơn hàng...</p>
              <p className="text-gray-600 mt-2">Vui lòng chờ trong giây lát</p>
            </div>
          )}

          {orderStatus === "success" && (
            <div className="text-center">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <p className="text-lg font-semibold text-gray-700">Đặt hàng thành công!</p>
              <p className="text-gray-600 mt-2">Cảm ơn bạn đã đặt hàng</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Mã đơn hàng: {orderStage}</p>
                <p className="text-sm text-gray-600">Trạng thái: Chờ xử lý</p>
              </div>
            </div>
          )}

          {orderStatus === "error" && (
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">✕</div>
              <p className="text-lg font-semibold text-gray-700">Đặt hàng thất bại</p>
              <p className="text-gray-600 mt-2">Vui lòng thử lại sau</p>
              <button
                onClick={() => setShowStatus(false)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Đóng
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <OrderStatusDisplay />
      <ConfirmOrderModal />
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

          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Thông tin giao hàng</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tên người nhận"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Địa chỉ giao hàng"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Giao thường">Giao thường</option>
              <option value="Giao nhanh">Giao nhanh (+10,000 VND)</option>
            </select>
            <input
              placeholder="Số điện thoại"
              value={notes}
              onChange={(e) => {
                const input = e.target.value;
                if (/^\d*$/.test(input)) {
                  setNotes(input);
                }
              }}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phương thức thanh toán
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span>Thanh toán online</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Phí ship:</p>
              <p className="font-semibold">{shippingFee.toLocaleString()} VND</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-bold">Tổng cộng:</p>
              <p className="text-2xl font-bold text-blue-600">{totalPrice.toLocaleString()} VND</p>
            </div>
            <button
              onClick={handleShowConfirm}
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isLoading 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Đang xử lý..." : "Đặt Hàng"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;