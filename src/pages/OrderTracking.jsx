// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const OrderTracking = () => {
//   const { role } = useSelector((state) => state.user);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (role === "staff") {
//       fetch("https://phamdangtuc-001-site1.ntempurl.com/api/order-stages")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("📦 Danh sách đơn hàng:", data);
//           if (data.status === 200 && data.data) {
//             // ✅ Lấy tất cả `$values` từ các object trong `data.data`
//             const orderList = Object.values(data.data).flatMap(item => item.$values || []);
//             setOrders(orderList);
//           } else {
//             setError("Dữ liệu không hợp lệ!");
//           }
//         })
//         .catch((err) => {
//           console.error("❌ Lỗi khi lấy đơn hàng:", err);
//           setError("Không thể tải dữ liệu đơn hàng!");
//         })
//         .finally(() => setLoading(false));
//     }
//   }, [role]);

//   if (role !== "staff") return <h1>⚠ Bạn không có quyền truy cập</h1>;
//   if (loading) return <p>⏳ Đang tải...</p>;
//   if (error) return <p>❌ {error}</p>;

//   return (
//     <div>
//       <h1>📦 Danh sách đơn hàng</h1>
//       {orders.length > 0 ? (
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index}>
//               🆔 {order.orderId} - Giai đoạn: {order.orderStageName} - Cập nhật: {order.updatedDate}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>🚫 Không có đơn hàng nào.</p>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import "./OrderTracking.css"; // Thêm file CSS riêng

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
//           if (data.status === 200 && data.data) {
//             const orderList = data.data?.[0]?.$values || []; // Lấy dữ liệu đúng từ API
//             setOrders(orderList);
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
//               <th>Giai Đoạn</th>
//               <th>Ngày Cập Nhật</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.orderId}</td>
//                 <td>{order.orderStageName}</td>
//                 <td>{new Date(order.updatedDate).toLocaleString()}</td>
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./OrderTracking.css"; // Import CSS riêng

const OrderTracking = () => {
  const { role } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (role === "staff") {
      fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders")
        .then((res) => res.json())
        .then((data) => {
          console.log("📦 API Response:", data);
          if (data?.$values) {
            setOrders(data.$values);
          } else {
            setError("Dữ liệu không hợp lệ!");
          }
        })
        .catch((err) => {
          console.error("Lỗi khi tải dữ liệu:", err);
          setError("Không thể tải dữ liệu đơn hàng!");
        })
        .finally(() => setLoading(false));
    }
  }, [role]);

  if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;
  if (loading) return <p className="loading">⏳ Đang tải...</p>;
  if (error) return <p className="error">error{error}</p>;

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
              <th>Sản Phẩm</th> {/* Thêm cột hiển thị sản phẩm */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.recipientName}</td>
                <td>{order.deliveryAddress}</td>
                <td>{order.shippingMethod}</td>
                <td>{order.price} VND</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice} VND</td>
                <td>{order.notes || "Không có"}</td>
                <td>
                  <ul>
                    {order.products?.map((product, idx) => (
                      <li key={idx}>
                        {product.name} - {product.quantity} x {product.price} đ
                      </li>
                    )) || "Không có sản phẩm"}
                  </ul>
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
