// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart?.items ?? []);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   cartItems.forEach((item, index) => {
//     console.log(`🛒 Sản phẩm [${index + 10}]`, item);
// });


//   const [recipientName, setRecipientName] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [shippingMethod, setShippingMethod] = useState("Giao nhanh");
//   const [notes, setNotes] = useState("");

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleCheckout = async () => {
//     if (!recipientName || !deliveryAddress || !shippingMethod) {
//       alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert("Giỏ hàng trống!");
//       return;
//     }
//     const invalidItems = cartItems.filter((item) => !item.productId || item.productId <= 0);
//   if (invalidItems.length > 0) {
//     alert("Có sản phẩm không hợp lệ trong giỏ hàng. Vui lòng kiểm tra lại!");
//     console.error("🚨 Sản phẩm không hợp lệ:", invalidItems);
//     return;
//   }

//   const orderData = {
//     customizeProductId: cartItems.length > 0 && cartItems[0].customizeProductId ? cartItems[0].customizeProductId : 1,
//     orderDate: new Date().toISOString(),
//     deliveryDate: new Date().toISOString(),
//     recipientName: recipientName, // Thay bằng giá trị thực
//     deliveryAddress: deliveryAddress, // Thay bằng giá trị thực
//     shippingMethod: shippingMethod, // Thay bằng giá trị thực
//     shippingFee: 0,
//     notes: notes || "", // Nếu không có thì để chuỗi rỗng
//     price: cartItems.reduce((sum, item) => sum + item.price, 0), // Tổng giá
//     quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0), // Tổng số lượng
//     totalPrice: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), // Tổng tiền
//   };
  
//   console.log("📦 Dữ liệu gửi lên API:", JSON.stringify(orderData, null, 2));
  

//     // Kiểm tra dữ liệu trước khi gửi API
// console.log("Dữ liệu gửi lên API:", JSON.stringify(orderData, null, 2));

// try {
//   console.log("📦 Dữ liệu gửi lên API:", JSON.stringify(orderData, null, 2));

//   const orderResponse = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(orderData),
//   });

//   if (!orderResponse.ok) {
//     const errorText = await orderResponse.text();
//     throw new Error(`Lỗi API ${orderResponse.status}: ${errorText}`);
//   }

//   const orderResult = await orderResponse.json();
//   console.log("Đơn hàng tạo thành công:", orderResult);

//   if (!orderResult.orderId) {
//     throw new Error("Lỗi: API không trả về orderId hợp lệ!");
//   }

//   await createOrderStage(orderResult.orderId);

//   alert("🎉 Đặt hàng thành công!");
//   dispatch(clearCart());
//   navigate("/checkout-confirmation");
// } catch (error) {
//   console.error("Lỗi thanh toán:", error);
//   alert(`Lỗi khi gửi đơn hàng: ${error.message}`);
// }
//   };

//   const createOrderStage = async (orderId) => {
//     const stageData = {
//       orderStageId: 0,
//       orderId: orderId,
//       orderStageName: "Place Order",
//       updatedDate: new Date().toISOString(),
//     };

//     try {
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/order-stages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(stageData),
//       });

//       const responseText = await response.text();
//       if (!response.ok) {
//         throw new Error(`Lỗi API ${response.status}: ${responseText}`);
//       }

//       console.log("Order Stage tạo thành công:", responseText);
//     } catch (error) {
//       console.error("Lỗi khi tạo Order Stage:", error);
//     }
//   };
//   console.log("Cart Items Debug:", cartItems);

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>
//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống.</p>
//           <button onClick={() => navigate("/")} className="bg-blue-600 text-white py-2 px-6 rounded-lg">
//             🛍 Tiếp tục mua sắm
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.productId} className="flex justify-between items-center py-4 border-b">
//                   <div className="flex items-center gap-4">
//                     {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />}
//                     <div>
//                       <p className="text-lg font-semibold">{item.name} × {item.quantity}</p>
//                       <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} VND</p>
//                     </div>
//                   </div>
//                   <button className="text-red-500" onClick={() => dispatch(removeFromCart(item.productId))}>
//                     ❌ Xóa
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6 text-right">
//               <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4 mt-6">
//             <input type="text" placeholder="Tên người nhận" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} className="border p-2 rounded" />
//             <input type="text" placeholder="Địa chỉ giao hàng" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} className="border p-2 rounded" />
//             <textarea placeholder="Ghi chú" value={notes} onChange={(e) => setNotes(e.target.value)} className="border p-2 rounded"></textarea>
//             <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-6 rounded-lg">Đặt Hàng</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart } from "../redux/slices/cartSlice";
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
  const [shippingMethod, setShippingMethod] = useState("Giao nhanh");
  const [notes, setNotes] = useState("");

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  // Cập nhật số lượng trong giỏ hàng
  const updateQuantity = (item) => {
    const newQuantity = quantities[item.productId];
    if (newQuantity !== item.quantity) {
      dispatch(addToCart({ ...item, quantity: newQuantity - item.quantity }));
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

    const orderData = {
      customizeProductId: cartItems[0]?.customizeProductId || 1,
      orderDate: new Date().toISOString(),
      deliveryDate: new Date().toISOString(),
      recipientName,
      deliveryAddress,
      shippingMethod,
      shippingFee: 0,
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
      orderStageName: "Place Order",
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
                        <button onClick={() => updateQuantity(item)} className="ml-2 text-blue-500">
                          ✔ Cập nhật
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
            <textarea placeholder="Ghi chú" value={notes} onChange={(e) => setNotes(e.target.value)} className="border p-2 rounded"></textarea>
            <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-6 rounded-lg">Đặt Hàng</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
