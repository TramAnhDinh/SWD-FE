import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { orderId } = useParams(); // Lấy orderId từ URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/OrderDetails?orderId=${orderId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi ${res.status}: API không tồn tại`);
        return res.json();
      })
      .then((data) => {
        console.log(`🛒 Sản phẩm của đơn ${orderId}:`, data);
        setProducts(data?.$values || []);
      })
      .catch((err) => {
        console.error("❌ Lỗi khi tải sản phẩm:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [orderId]);

  return (
    <div className="order-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Quay lại</button>
      <h1>🛒 Chi tiết đơn hàng {orderId}</h1>

      {loading ? (
        <p className="loading">⏳ Đang tải...</p>
      ) : products.length > 0 ? (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.productId} className="product-item">
              <img src={product.imageUrl} alt={product.productName} className="product-img" />
              <div className="product-info">
                <p className="product-name">{product.productName}</p>
                <p className="product-price">{product.price} VND</p>
                <p className="product-quantity">Số lượng: {product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-products">🚫 Không có sản phẩm nào.</p>
      )}
    </div>
  );
};

export default OrderDetail;
