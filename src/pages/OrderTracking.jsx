// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import "./OrderTracking.css"; // Import CSS riêng

// const OrderTracking = () => {
//   const { role } = useSelector((state) => state.user);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (role === "staff") {
//       fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("📦 API Response:", data);
//           if (data?.$values) {
//             setOrders(data.$values); // Lấy danh sách đơn hàng từ API
//           } else {
//             setError("Dữ liệu không hợp lệ!");
//           }
//         })
//         .catch((err) => {
//           console.error("❌ Lỗi khi tải dữ liệu:", err);
//           setError("Không thể tải dữ liệu đơn hàng!");
//         })
//         .finally(() => setLoading(false));
//     }
//   }, [role]);

//   if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;
//   if (loading) return <p className="loading">⏳ Đang tải...</p>;
//   if (error) return <p className="error">❌ {error}</p>;

//   return (
//     <div className="order-tracking-container">
//       <h1>📦 Danh Sách Đơn Hàng</h1>
//       {orders.length > 0 ? (
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Người Nhận</th>
//               <th>Địa Chỉ</th>
//               <th>Phương Thức Giao</th>
//               <th>Giá</th>
//               <th>Số Lượng</th>
//               <th>Tổng Tiền</th>
//               <th>Ghi Chú</th>
//               <th className="border border-gray-300 px-4 py-2">Chi Tiết</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.orderId}</td>
//                 <td>{order.recipientName}</td>
//                 <td>{order.deliveryAddress}</td>
//                 <td>{order.shippingMethod}</td>
//                 <td>{order.price} VND</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.totalPrice} VND</td>
//                 <td>{order.notes || "Không có"}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button className="bg-blue-500 text-white px-3 py-1 rounded">Chi tiết</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="no-orders">🚫 Không có đơn hàng nào.</p>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;


// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import "./OrderTracking.css"; // Import CSS riêng

// const OrderTracking = () => {
//   const { role } = useSelector((state) => state.user);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [orderProducts, setOrderProducts] = useState([]); // Lưu danh sách sản phẩm

//   useEffect(() => {
//     if (role === "staff") {
//       fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("📦 API Response:", data);
//           if (data?.$values) {
//             setOrders(data.$values); // Lấy danh sách đơn hàng từ API
//           } else {
//             setError("Dữ liệu không hợp lệ!");
//           }
//         })
//         .catch((err) => {
//           console.error("❌ Lỗi khi tải dữ liệu:", err);
//           setError("Không thể tải dữ liệu đơn hàng!");
//         })
//         .finally(() => setLoading(false));
//     }
//   }, [role]);

//   // Lấy danh sách sản phẩm theo orderId
//   // const handleShowDetails = (order) => {
//   //   setSelectedOrder(order);

//   //   fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/Orders/${order.orderId}/products`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(`🛒 Sản phẩm của đơn ${order.orderId}:`, data);
//   //       setOrderProducts(data?.$values || []);
//   //     })
//   //     .catch((err) => {
//   //       console.error("❌ Lỗi khi tải sản phẩm:", err);
//   //       setOrderProducts([]);
//   //     });
//   // };
//   const handleShowDetails = (order) => {
//     setSelectedOrder(order);
//     setOrderProducts(order.product || []); // Reset danh sách sản phẩm cũ
  
//     fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/OrderDetails?orderId=${order.orderId}`)
    
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Lỗi ${res.status}: API không tồn tại`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(`🛒 Sản phẩm của đơn ${order.orderId}:`, data);
//         setOrderProducts(data?.$values || []);
//       })
//       .catch((err) => {
//         console.error("❌ Lỗi khi tải sản phẩm:", err);
//         setOrderProducts([]); // Nếu lỗi thì không hiển thị sản phẩm
//       });
//   };
  

//   if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;
//   if (loading) return <p className="loading">⏳ Đang tải...</p>;
//   if (error) return <p className="error">❌ {error}</p>;

//   return (
//     <div className="order-tracking-container">
//       <h1>📦 Danh Sách Đơn Hàng</h1>
//       {orders.length > 0 ? (
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Người Nhận</th>
//               <th>Địa Chỉ</th>
//               <th>Phương Thức Giao</th>
//               <th>Giá</th>
//               <th>Số Lượng</th>
//               <th>Tổng Tiền</th>
//               <th>Ghi Chú</th>
//               <th>Chi Tiết</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.orderId}</td>
//                 <td>{order.recipientName}</td>
//                 <td>{order.deliveryAddress}</td>
//                 <td>{order.shippingMethod}</td>
//                 <td>{order.price} VND</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.totalPrice} VND</td>
//                 <td>{order.notes || "Không có"}</td>
//                 <td>
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded"
//                     onClick={() => handleShowDetails(order)}
//                   >
//                     Chi tiết
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="no-orders">🚫 Không có đơn hàng nào.</p>
//       )}

//       {/* Modal hiển thị chi tiết đơn hàng */}
//       {selectedOrder && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>🛍 Chi Tiết Đơn Hàng</h2>
//             <p><strong>ID:</strong> {selectedOrder.orderId}</p>
//             <p><strong>Người Nhận:</strong> {selectedOrder.recipientName}</p>
//             <p><strong>Địa Chỉ:</strong> {selectedOrder.deliveryAddress}</p>
//             <p><strong>Phương Thức Giao:</strong> {selectedOrder.shippingMethod}</p>
//             <p><strong>Tổng Tiền:</strong> {selectedOrder.totalPrice} VND</p>

//             <h3>📌 Sản Phẩm Trong Đơn:</h3>
//             {orderProducts.length === 0 ? (
//               <p className="text-gray-500">Không có sản phẩm nào trong đơn hàng này.</p>
//             ) : (
//               <ul>
//                 {orderProducts.map((product) => (
//                   <li key={product.productId}>
//                     {product.name} - {product.price} VND (x{product.quantity})
//                   </li>
//                 ))}
//               </ul>
//             )}

//             <button className="close-btn" onClick={() => setSelectedOrder(null)}>Đóng</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import "./OrderTracking.css";

// const OrderTracking = () => {
//   const { role } = useSelector((state) => state.user);
//   const [orders, setOrders] = useState([]);
//   const [orderProducts, setOrderProducts] = useState([]); // 🛒 Danh sách sản phẩm trong đơn hàng
//   const [selectedOrderId, setSelectedOrderId] = useState(null); // Lưu orderId đang xem

//   useEffect(() => {
//     if (role === "staff") {
//       fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders")
//         .then((res) => res.json())
//         .then((data) => {
//           if (data?.$values) {
//             setOrders(data.$values);
//           } else {
//             console.error("Dữ liệu không hợp lệ!");
//           }
//         })
//         .catch((err) => console.error("❌ Lỗi khi tải dữ liệu:", err));
//     }
//   }, [role]);

//   const handleShowDetails = (orderId) => {
//     setSelectedOrderId(orderId); // Lưu đơn hàng đang xem

//     fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/Product`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`Lỗi ${res.status}: API không tồn tại`);
//         return res.json();
//       })
//       .then((data) => {
//         console.log(`🛒 Sản phẩm của đơn ${orderId}:`, data);
//         setOrderProducts(data?.$values || []);
//       })
//       .catch((err) => {
//         console.error("❌ Lỗi khi tải sản phẩm:", err);
//         setOrderProducts([]); // Nếu lỗi thì không hiển thị sản phẩm
//       });
//   };

//   if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;

//   return (
//     <div className="order-tracking-container">
//       <h1>📦 Danh Sách Đơn Hàng</h1>
//       {orders.length > 0 ? (
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Người Nhận</th>
//               <th>Địa Chỉ</th>
//               <th>Phương Thức Giao</th>
//               <th>Giá</th>
//               <th>Số Lượng</th>
//               <th>Tổng Tiền</th>
//               <th>Ghi Chú</th>
//               <th>Chi Tiết</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.orderId}>
//                 <td>{order.orderId}</td>
//                 <td>{order.recipientName}</td>
//                 <td>{order.deliveryAddress}</td>
//                 <td>{order.shippingMethod}</td>
//                 <td>{order.price} VND</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.totalPrice} VND</td>
//                 <td>{order.notes || "Không có"}</td>
//                 <td>
//                   <button 
//                     className="bg-blue-500 text-white px-3 py-1 rounded"
//                     onClick={() => handleShowDetails(order.orderId)}
//                   >
//                     Chi tiết
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="no-orders">🚫 Không có đơn hàng nào.</p>
//       )}

//       {/* 🛒 Hiển thị giỏ hàng khi bấm "Chi tiết" */}
//       {selectedOrderId && (
//         <div className="cart-container">
//           <h2>🛒 Sản phẩm của đơn {selectedOrderId}</h2>
//           {orderProducts.length > 0 ? (
//             <ul className="cart-list">
//               {orderProducts.map((product) => (
//                 <li key={product.productId} className="cart-item">
//                   <img src={product.imageUrl} alt={product.productName} className="cart-img" />
//                   <div className="cart-info">
//                     <p className="cart-name">{product.productName}</p>
//                     <p className="cart-price">{product.price} VND</p>
//                     <p className="cart-quantity">Số lượng: {product.quantity}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Không có sản phẩm nào trong đơn này.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import điều hướng
import "./OrderTracking.css";

const OrderTracking = () => {
  const { role } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Dùng để chuyển trang

  useEffect(() => {
    if (role === "staff") {
      fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders")
        .then((res) => res.json())
        .then((data) => {
          if (data?.$values) {
            setOrders(data.$values);
          } else {
            console.error("Dữ liệu không hợp lệ!");
          }
        })
        .catch((err) => console.error("❌ Lỗi khi tải dữ liệu:", err));
    }
  }, [role]);

  if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;

  return (
    <div className="order-tracking-container">
      <h1>📦 Danh Sách Đơn Hàng</h1>
      {orders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Người Nhận</th>
              <th>Địa Chỉ</th>
              <th>Phương Thức Giao</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Tiền</th>
              <th>Ghi Chú</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.recipientName}</td>
                <td>{order.deliveryAddress}</td>
                <td>{order.shippingMethod}</td>
                <td>{order.price} VND</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice} VND</td>
                <td>{order.notes || "Không có"}</td>
                <td>
                  <button 
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => navigate(`/order-detail/${order.orderId}`)}
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-orders">🚫 Không có đơn hàng nào.</p>
      )}
    </div>
  );
};

export default OrderTracking;
