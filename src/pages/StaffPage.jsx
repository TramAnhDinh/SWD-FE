
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";

// const StaffPage = () => {
//     const dispatch = useDispatch();

//     // Lấy dữ liệu user từ Redux, đảm bảo không bị undefined
//     const user = useSelector((state) => state.user?.user || {});  
//     const auth = useSelector((state) => state.auth || {});  
//     const userRole = auth?.user?.role || "guest"; // Nếu không có role thì mặc định là guest

//     // Lấy danh sách sản phẩm từ Redux
//     const { items, status, error } = useSelector((state) => state.products);

//     // State để hiển thị modal sửa/thêm
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [newProduct, setNewProduct] = useState({
//         productName: "",
//         price: "",
//         stockInStorage: "",
//         image: "",
//         description: ""
//     });

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     // Kiểm tra nếu API trả về đúng định dạng
//     // const products = items?.data?.$values || [];
//     const products = Array.isArray(items?.data?.$values) ? items.data.$values : [];


//     // Nếu đang tải dữ liệu từ API
//     if (status === "loading") return <p>Loading...</p>;

//     // Nếu API bị lỗi
//     if (status === "failed") return <p>Error: {error || "Không thể lấy dữ liệu sản phẩm"}</p>;

//     const handleDelete = (productId) => {
//         if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//             dispatch(deleteProduct(productId));
//         }
//     };

//     const handleEdit = (product) => {
//         setEditingProduct(product);
//         setModalOpen(true);
//     };

//     const handleAdd = () => {
//         setEditingProduct(null);
//         setModalOpen(true);
//     };

//     const handleSave = () => {
//         if (editingProduct) {
//             // Gọi API cập nhật sản phẩm ở đây
//             console.log("Cập nhật sản phẩm:", editingProduct);
//         } else {
//             // Gọi API thêm sản phẩm mới ở đây
//             console.log("Thêm sản phẩm:", newProduct);
//         }
//         setModalOpen(false);
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>

//             {/* Nút thêm sản phẩm */}
//             {userRole !== "staff" && (
//                 <button className="add-btn" onClick={handleAdd}>Thêm sản phẩm</button>
//             )}

//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole !== "staff" && <th>Hành động</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <tr key={product.productId}>
//                                 <td>{product.productId}</td>
//                                 <td>{product.productName}</td>
//                                 <td>{product.price} VND</td>
//                                 <td>{product.stockInStorage}</td>
//                                 <td>
//                                     <img
//                                         src={`http://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
//                                         alt={product.productName}
//                                         className="product-image"
//                                     />
//                                 </td>
//                                 <td>{product.description}</td>
//                                 {userRole !== "staff" && (
//                                     <td>
//                                         <button onClick={() => handleEdit(product)} className="edit-btn">
//                                             Sửa
//                                         </button>
//                                         <button onClick={() => handleDelete(product.productId)} className="delete-btn">
//                                             Xóa
//                                         </button>
//                                     </td>
//                                 )}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="7">Không có sản phẩm nào</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             {/* Modal sửa/thêm sản phẩm */}
//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
//                         <label>
//                             Tên sản phẩm:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.productName : newProduct.productName}
//                                 onChange={(e) => {
//                                     if (editingProduct) {
//                                         setEditingProduct({ ...editingProduct, productName: e.target.value });
//                                     } else {
//                                         setNewProduct({ ...newProduct, productName: e.target.value });
//                                     }
//                                 }}
//                             />
//                         </label>
//                         <label>
//                             Giá:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.price : newProduct.price}
//                                 onChange={(e) => {
//                                     if (editingProduct) {
//                                         setEditingProduct({ ...editingProduct, price: e.target.value });
//                                     } else {
//                                         setNewProduct({ ...newProduct, price: e.target.value });
//                                     }
//                                 }}
//                             />
//                         </label>
//                         <label>
//                             Tồn kho:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
//                                 onChange={(e) => {
//                                     if (editingProduct) {
//                                         setEditingProduct({ ...editingProduct, stockInStorage: e.target.value });
//                                     } else {
//                                         setNewProduct({ ...newProduct, stockInStorage: e.target.value });
//                                     }
//                                 }}
//                             />
//                         </label>
//                         <label>
//                             Ảnh:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.image : newProduct.image}
//                                 onChange={(e) => {
//                                     if (editingProduct) {
//                                         setEditingProduct({ ...editingProduct, image: e.target.value });
//                                     } else {
//                                         setNewProduct({ ...newProduct, image: e.target.value });
//                                     }
//                                 }}
//                             />
//                         </label>
//                         <label>
//                             Mô tả:
//                             <textarea
//                                 value={editingProduct ? editingProduct.description : newProduct.description}
//                                 onChange={(e) => {
//                                     if (editingProduct) {
//                                         setEditingProduct({ ...editingProduct, description: e.target.value });
//                                     } else {
//                                         setNewProduct({ ...newProduct, description: e.target.value });
//                                     }
//                                 }}
//                             />
//                         </label>
//                         <button className="save-btn" onClick={handleSave}>Lưu</button>
//                         <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";

// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const userRole = useSelector((state) => state.auth?.user?.role || "guest");
//     const { items, status, error } = useSelector((state) => state.products);

//     const [isModalOpen, setModalOpen] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [productData, setProductData] = useState({
//         productName: "",
//         price: "",
//         stockInStorage: "",
//         image: "",
//         description: ""
//     });

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const products = Array.isArray(items?.data?.$values) ? items.data.$values : [];

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error || "Không thể lấy dữ liệu sản phẩm"}</p>;

//     const handleDelete = (productId) => {
//         if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//             dispatch(deleteProduct(productId)).then(() => {
//                 dispatch(fetchProducts());
//             });
//         }
//     };

//     const handleEdit = (product) => {
//         setEditingProduct(product);
//         setProductData(product);
//         setModalOpen(true);
//     };

//     const handleAdd = () => {
//         setEditingProduct(null);
//         setProductData({ productName: "", price: "", stockInStorage: "", image: "", description: "" });
//         setModalOpen(true);
//     };

//     const handleSave = () => {
//         if (editingProduct) {
//             dispatch(updateProduct(productData)).then(() => {
//                 dispatch(fetchProducts());
//             });
//         } else {
//             dispatch(addProduct(productData)).then(() => {
//                 dispatch(fetchProducts());
//             });
//         }
//         setModalOpen(false);
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             {userRole !== "staff" && (
//                 <button className="add-btn" onClick={handleAdd}>Thêm sản phẩm</button>
//             )}
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole !== "staff" && <th>Hành động</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <tr key={product.productId}>
//                                 <td>{product.productId}</td>
//                                 <td>{product.productName}</td>
//                                 <td>{product.price} VND</td>
//                                 <td>{product.stockInStorage}</td>
//                                 <td>
//                                     <img src={`http://localhost:7163/uploads/${product.image?.split("\\").pop()}`} alt={product.productName} className="product-image" />
//                                 </td>
//                                 <td>{product.description}</td>
//                                 {userRole !== "staff" && (
//                                     <td>
//                                         <button onClick={() => handleEdit(product)} className="edit-btn">Sửa</button>
//                                         <button onClick={() => handleDelete(product.productId)} className="delete-btn">Xóa</button>
//                                     </td>
//                                 )}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="7">Không có sản phẩm nào</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
//                         <label>Tên sản phẩm:
//                             <input type="text" value={productData.productName} onChange={(e) => setProductData({ ...productData, productName: e.target.value })} />
//                         </label>
//                         <label>Giá:
//                             <input type="number" value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
//                         </label>
//                         <label>Tồn kho:
//                             <input type="number" value={productData.stockInStorage} onChange={(e) => setProductData({ ...productData, stockInStorage: e.target.value })} />
//                         </label>
//                         <label>Ảnh:
//                             <input type="text" value={productData.image} onChange={(e) => setProductData({ ...productData, image: e.target.value })} />
//                         </label>
//                         <label>Mô tả:
//                             <textarea value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
//                         </label>
//                         <button className="save-btn" onClick={handleSave}>Lưu</button>
//                         <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";

// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const { items, status, error } = useSelector((state) => state.products);
//     const userRole = useSelector((state) => state.auth?.user?.role || "guest");

//     // Đảm bảo items là một mảng
//     const products = Array.isArray(items) ? items : [];

//     const [isModalOpen, setModalOpen] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [newProduct, setNewProduct] = useState({
//         productName: "",
//         price: "",
//         stockInStorage: "",
//         image: "",
//         description: ""
//     });

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const handleDelete = (productId) => {
//         if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//             dispatch(deleteProduct(productId));
//         }
//     };

//     const handleEdit = (product) => {
//         setEditingProduct(product);
//         setModalOpen(true);
//     };

//     const handleAdd = () => {
//         setEditingProduct(null);
//         setModalOpen(true);
//     };

//     const handleSave = () => {
//         if (editingProduct) {
//             dispatch(updateProduct(editingProduct));
//         } else {
//             dispatch(addProduct(newProduct));
//         }
//         setModalOpen(false);
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             {userRole !== "staff" && (
//                 <button className="add-btn" onClick={handleAdd}>Thêm sản phẩm</button>
//             )}
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole !== "staff" && <th>Hành động</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <tr key={product.productId}>
//                                 <td>{product.productId}</td>
//                                 <td>{product.productName}</td>
//                                 <td>{product.price} VND</td>
//                                 <td>{product.stockInStorage}</td>
//                                 <td>
//                                     <img
//                                         src={`http://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
//                                         alt={product.productName}
//                                         className="product-image"
//                                     />
//                                 </td>
//                                 <td>{product.description}</td>
//                                 {userRole !== "staff" && (
//                                     <td>
//                                         <button onClick={() => handleEdit(product)} className="edit-btn">Sửa</button>
//                                         <button onClick={() => handleDelete(product.productId)} className="delete-btn">Xóa</button>
//                                     </td>
//                                 )}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="7">Không có sản phẩm nào</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
//                         <label>
//                             Tên sản phẩm:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.productName : newProduct.productName}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, productName: e.target.value }) : setNewProduct({ ...newProduct, productName: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Giá:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.price : newProduct.price}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Tồn kho:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, stockInStorage: e.target.value }) : setNewProduct({ ...newProduct, stockInStorage: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Ảnh:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.image : newProduct.image}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, image: e.target.value }) : setNewProduct({ ...newProduct, image: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Mô tả:
//                             <textarea
//                                 value={editingProduct ? editingProduct.description : newProduct.description}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, description: e.target.value }) : setNewProduct({ ...newProduct, description: e.target.value })}
//                             />
//                         </label>
//                         <button className="save-btn" onClick={handleSave}>Lưu</button>
//                         <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";

// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const { items } = useSelector((state) => state.products);
//     const userRole = useSelector((state) => state.auth?.user?.role || "guest");

//     // Đảm bảo items là một mảng
//     const products = Array.isArray(items) ? items : [];
//     console.log("hhhhh",products)

//     const [isModalOpen, setModalOpen] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [newProduct, setNewProduct] = useState({
//         productName: "",
//         price: "",
//         stockInStorage: "",
//         image: "",
//         description: ""
//     });

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const handleDelete = async (id) => {
//         dispatch(deleteProduct(id));
//     };


//     const handleEdit = (product) => {
//         if (!product) {
//             console.error("Lỗi: Không có sản phẩm nào để chỉnh sửa.");
//             return;
//         }

//         // Đảm bảo product có đầy đủ thuộc tính cần thiết
//         const formattedProduct = {
//             productId: product.productId || "",
//             categoryId: product.categoryId || 1, // Giá trị mặc định nếu thiếu
//             productName: product.productName || "",
//             price: parseFloat(product.price) || 0, // Đảm bảo giá trị số
//             stockInStorage: product.stockInStorage || 0,
//             image: product.image || "",
//             description: product.description || "",
//             isDeleted: product.isDeleted ?? false,
//         };

//         setEditingProduct(formattedProduct);
//         setModalOpen(true);
//         // setEditingProduct(product);
//         // setModalOpen(true);
//     };

//     const handleAdd = () => {
//         dispatch(addProduct(newProduct));
//         setEditingProduct(null);
//         setModalOpen(true);
//     };


//     const handleSave = () => {
//         if (editingProduct && editingProduct.productId) {
//             dispatch(updateProduct(editingProduct));
//         } else {
//             dispatch(addProduct(newProduct));
//         }
//         setModalOpen(false);
//         // if (editingProduct) {
//         //     dispatch(updateProduct(editingProduct));
//         // } else {
//         //     dispatch(addProduct(newProduct));
//         // }
//         // setModalOpen(false);
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             {userRole !== "staff" && (
//                 <button className="add-btn" onClick={handleAdd}>Thêm sản phẩm</button>
//             )}
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole === "staff" && <th>Hành động</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <tr key={product.productId}>
//                                 <td>{product.productId}</td>
//                                 <td>{product.productName}</td>
//                                 <td>{product.price} VND</td>
//                                 <td>{product.stockInStorage}</td>
//                                 <td>
//                                     <img
//                                         src={`https://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
//                                         alt={product.productName}
//                                         className="product-image"
//                                     />

//                                 </td>
//                                 <td>{product.description}</td>
//                                 {userRole !== "staff" && (
//                                     <td>
//                                         <button onClick={() => handleEdit(product)} className="edit-btn">Sửa</button>
//                                         <button onClick={() => handleDelete(product.productId)} className="delete-btn">Xóa</button>
//                                     </td>
//                                 )}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="7">Không có sản phẩm nào</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             {isModalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
//                         <label>
//                             Tên sản phẩm:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.productName : newProduct.productName}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, productName: e.target.value }) : setNewProduct({ ...newProduct, productName: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Giá:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.price : newProduct.price}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Tồn kho:
//                             <input
//                                 type="number"
//                                 value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, stockInStorage: e.target.value }) : setNewProduct({ ...newProduct, stockInStorage: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Ảnh:
//                             <input
//                                 type="text"
//                                 value={editingProduct ? editingProduct.image : newProduct.image}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, image: e.target.value }) : setNewProduct({ ...newProduct, image: e.target.value })}
//                             />
//                         </label>
//                         <label>
//                             Mô tả:
//                             <textarea
//                                 value={editingProduct ? editingProduct.description : newProduct.description}
//                                 onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, description: e.target.value }) : setNewProduct({ ...newProduct, description: e.target.value })}
//                             />
//                         </label>
//                         <button className="save-btn" onClick={handleEdit}>Lưu</button>
//                         <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StaffPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
import "./StaffPage.css";

const StaffPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);
    const userRole = useSelector((state) => state.auth?.user?.role || "guest");
    const [categories, setCategories] = useState([]);

    const products = Array.isArray(items) ? items : [];

    const [isModalOpen, setModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        productName: "",
        price: "",
        stockInStorage: "",
        image: "",
        description: "",
        categoryId: 1
    });

    // Fetch categories từ API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://phamdangtuc-001-site1.ntempurl.com/api/Category');
                const data = await response.json();
                if (data.status === 1 && data.data.$values) {
                    setCategories(data.data.$values);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = async (id) => {
        await dispatch(deleteProduct(id));
        dispatch(fetchProducts());
    };

    const openEditModal = (product) => {
        setEditingProduct({ ...product });
        setModalOpen(true);
    };

    const openAddModal = () => {
        setEditingProduct(null);
        setNewProduct({
            productName: "",
            price: "",
            stockInStorage: "",
            image: "",
            description: "",
            categoryId: categories[0]?.categoryId || 1
        });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (editingProduct) {
            dispatch(updateProduct(editingProduct));
        } else {
            dispatch(addProduct(newProduct));
        }
        setModalOpen(false);
    };

    return (
        <div className="staff-container">
            <h2>Quản lý sản phẩm</h2>
            {userRole !== "staff" && (
                <button className="add-btn" onClick={openAddModal}>Thêm sản phẩm</button>
            )}
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tồn kho</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Danh mục</th>
                        {userRole !== "staff" && <th>Hành động</th>}
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.price} VND</td>
                                <td>{product.stockInStorage}</td>
                                <td>
                                    <img
                                        src={product.image?.startsWith("http") ? product.image : `https://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
                                        alt={product.productName}
                                        className="product-image"
                                    />
                                </td>
                                <td>{product.description}</td>
                                <td>
                                    {categories.find(cat => cat.categoryId === product.categoryId)?.categoryName || 'Chưa phân loại'}
                                </td>
                                {userRole !== "staff" && (
                                    <td>
                                        <button onClick={() => openEditModal(product)} className="edit-btn">Sửa</button>
                                        <button onClick={() => handleDelete(product.productId)} className="delete-btn">Xóa</button>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Không có sản phẩm nào</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
                        <label>
                            Tên sản phẩm:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.productName : newProduct.productName}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, productName: e.target.value })
                                        : setNewProduct({ ...newProduct, productName: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Giá:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, price: e.target.value })
                                        : setNewProduct({ ...newProduct, price: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Tồn kho:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, stockInStorage: e.target.value })
                                        : setNewProduct({ ...newProduct, stockInStorage: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Ảnh:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, image: e.target.value })
                                        : setNewProduct({ ...newProduct, image: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Mô tả:
                            <textarea
                                value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, description: e.target.value })
                                        : setNewProduct({ ...newProduct, description: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Danh mục:
                            <select
                                value={editingProduct ? editingProduct.categoryId : newProduct.categoryId}
                                onChange={(e) =>
                                    editingProduct
                                        ? setEditingProduct({ ...editingProduct, categoryId: Number(e.target.value) })
                                        : setNewProduct({ ...newProduct, categoryId: Number(e.target.value) })
                                }
                            >
                                {categories.map((category) => (
                                    <option key={category.categoryId} value={category.categoryId}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="button-container">
                            <button className="save-btn" onClick={handleSave}>Lưu</button>
                            <div className="close-btn-container">
                                <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffPage;