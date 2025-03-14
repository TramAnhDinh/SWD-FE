// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, deleteProduct, updateProduct } from "../redux/slices/productSlice";

// const StaffPage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);
//   const [newName, setNewName] = useState("");
//   const [newPrice, setNewPrice] = useState("");

//   const handleAdd = () => {
//     if (newName && newPrice) {
//       dispatch(addProduct({ id: Math.random(), name: newName, price: Number(newPrice) }));
//       setNewName("");
//       setNewPrice("");
//     }
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   const handleUpdate = (id) => {
//     const updatedName = prompt("Nhập tên mới:", newName);
//     const updatedPrice = prompt("Nhập giá mới:", newPrice);
//     if (updatedName && updatedPrice) {
//       dispatch(updateProduct({ id, name: updatedName, price: Number(updatedPrice) }));
//     }
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h2>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Tên sản phẩm"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="number"
//           placeholder="Giá sản phẩm"
//           value={newPrice}
//           onChange={(e) => setNewPrice(e.target.value)}
//           className="border p-2 mr-2"
//         />
//         <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2">
//           Thêm sản phẩm
//         </button>
//       </div>

//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="flex justify-between items-center p-2 border-b">
//             <span>{product.name} - {product.price}₫</span>
//             <div>
//               <button onClick={() => handleUpdate(product.id)} className="bg-yellow-500 text-white px-3 py-1 mx-1">
//                 Sửa
//               </button>
//               <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1">
//                 Xóa
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StaffPage;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, updateProduct, deleteProduct } from "../redux/slices/productsSlice";

// const StaffPage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);
//   const [newName, setNewName] = useState("");
//   const [newPrice, setNewPrice] = useState("");

//   const handleAdd = () => {
//     if (!newName || !newPrice) return;
//     dispatch(addProduct({ id: Date.now(), name: newName, price: Number(newPrice) }));
//     setNewName("");
//     setNewPrice("");
//   };

//   const handleUpdate = (id) => {
//     const updatedName = prompt("Nhập tên mới:");
//     const updatedPrice = prompt("Nhập giá mới:");
//     if (updatedName && updatedPrice) {
//       dispatch(updateProduct({ id, name: updatedName, price: Number(updatedPrice) }));
//     }
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h2>
//       <div className="mb-4">
//         <input type="text" placeholder="Tên sản phẩm" value={newName} onChange={(e) => setNewName(e.target.value)} className="border p-2 mr-2" />
//         <input type="number" placeholder="Giá" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="border p-2 mr-2" />
//         <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2">Thêm sản phẩm</button>
//       </div>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="border p-2 flex justify-between items-center mb-2">
//             <span>{product.name} - {product.price} USD</span>
//             <div>
//               <button onClick={() => handleUpdate(product.id)} className="bg-blue-500 text-white px-2 py-1 mr-2">Sửa</button>
//               <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1">Xóa</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StaffPage;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, updateProduct, deleteProduct, setProducts } from "../redux/slices/productsSlice";

// const StaffPage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Gọi API lấy danh sách sản phẩm
//   useEffect(() => {
//     fetch("https://localhost:7163/api/Product")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 1) {
//           dispatch(setProducts(data.data.$values)); // Cập nhật Redux store
//         }
//       })
//       .catch((err) => console.error("Lỗi API:", err));
//   }, [dispatch]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Quản lý sản phẩm</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.sId} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
//             <span>{product.productName} - {product.price} USD</span>
//             <button
//               onClick={() => setSelectedProduct(product)}
//               style={{ backgroundColor: "gray", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}
//             >
//               Chi tiết
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Hiển thị modal chi tiết sản phẩm */}
//       {selectedProduct && (
//         <div style={{
//           position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
//           backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
//         }}>
//           <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "400px" }}>
//             <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Chi tiết sản phẩm</h3>
//             <p><strong>Tên:</strong> {selectedProduct.productName}</p>
//             <p><strong>Giá:</strong> {selectedProduct.price} USD</p>
//             <p><strong>Mô tả:</strong> {selectedProduct.description}</p>
//             <img src={selectedProduct.image} alt={selectedProduct.productName} style={{ width: "100%", marginTop: "10px" }} />
//             <button
//               onClick={() => setSelectedProduct(null)}
//               style={{ backgroundColor: "gray", color: "white", padding: "10px", border: "none", cursor: "pointer", marginTop: "10px" }}
//             >
//               Đóng
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StaffPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";

// const StaffPage = () => {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Quản lý sản phẩm</h2>
//       {Array.isArray(items) ? ( // Kiểm tra nếu items là một mảng
//         <ul>
//           {items.map((product) => (
//             <li key={product.id}>
//               {product.name} - {product.price} VND
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Không có sản phẩm nào.</p>
//       )}
//     </div>
//   );
// };

// export default StaffPage;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";

// const StaffPage = () => {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   console.log("Redux State products:", items); // Debugging

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Quản lý sản phẩm</h2>
//       {Array.isArray(items) && items.length > 0 ? (
//         <ul>
//           {items.map((product) => (
//             <li key={product.id}>
//               {product.name} - {product.price} VND
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Không có sản phẩm nào.</p>
//       )}
//     </div>
//   );
// };

// export default StaffPage;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";

// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const { items, status, error } = useSelector((state) => state.products);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     // Kiểm tra nếu items tồn tại và có thuộc tính data.$values
//     const products = items?.data?.$values || [];

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Quản lý sản phẩm</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.productId}</td>
//                             <td>{product.productName}</td>
//                             <td>{product.price} VND</td>
//                             <td>{product.stockInStorage}</td>
//                             <td>
//                                 <img
//                                     src={product.image.replace("D:\\react-swd\\", "http://localhost:5000/")}
//                                     alt={product.productName}
//                                     width="100"
//                                 />
//                             </td>
//                             <td>{product.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffPage;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";
// import "./StaffPage.css"; // Import file CSS

// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const { items, status, error } = useSelector((state) => state.products);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     // Kiểm tra nếu items tồn tại và có thuộc tính data.$values
//     const products = items?.data?.$values || [];

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error}</p>;

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.productId}</td>
//                             <td>{product.productName}</td>
//                             <td>{product.price} VND</td>
//                             <td>{product.stockInStorage}</td>
//                             <td>
//                         <img
//                                 src={`http://localhost:7163/uploads/${product.image.split("\\").pop()}`} 
//                                 alt={product.productName}
//                                 className="product-image"
//                             />
//                         </td>
//                             {/* <td>
//                                 <img
//                                     src={product.image.replace("D:\\react-swd\\", "http://localhost:7163/")}
//                                     alt={product.productName}
//                                     className="product-image"
//                                 />
//                             </td> */}
//                             <td>{product.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";


// const StaffPage = () => {
//     const dispatch = useDispatch();
//     const { items, status, error } = useSelector((state) => state.products);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     const products = items?.data?.$values || [];

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error}</p>;

//     const handleDelete = (id) => {
//         if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
//             dispatch(deleteProduct(id));
//         }
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
            
//             {/* Nút thêm sản phẩm */}
//             <button className="add-btn" onClick={() => alert("Chức năng thêm sản phẩm!")}>
//                 + Thêm sản phẩm
//             </button>

//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         <th>Hành động</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.productId}>
//                             <td>{product.productId}</td>
//                             <td>{product.productName}</td>
//                             <td>{product.price} VND</td>
//                             <td>{product.stockInStorage}</td>
//                             <td>
//                                 <img
//                                     src={`http://localhost:7163/uploads/${product.image.split("\\").pop()}`} 
//                                     alt={product.productName}
//                                     className="product-image"
//                                 />
//                             </td>
//                             <td>{product.description}</td>
//                             <td>
//                                 <button 
//                                     className="edit-btn" 
//                                     onClick={() => alert(`Sửa sản phẩm ID: ${product.productId}`)}
//                                 >
//                                     ✏️ Sửa
//                                 </button>
//                                 <button 
//                                     className="delete-btn" 
//                                     onClick={() => handleDelete(product.productId)}
//                                 >
//                                     ❌ Xóa
//                                 </button>
//                                 <button 
//                                     className="view-btn" 
//                                     onClick={() => alert(`Xem chi tiết sản phẩm ID: ${product.productId}`)}
//                                 >
//                                     🔍 Chi tiết
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
// import "./StaffPage.css";

// const StaffPage = () => {
//     const user = useSelector((state) => state.user); 
//     const dispatch = useDispatch();
//     const { items, status, error } = useSelector((state) => state.products);
//     const userRole = useSelector((state) => state.auth.user.role); // Lấy role từ Redux

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     const products = items?.data?.$values || [];

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error}</p>;

//     const handleDelete = (productId) => {
//         if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//             dispatch(deleteProduct(productId));
//         }
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole !== "staff" && <th>Hành động</th>} {/* Staff không có quyền */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.productId}</td>
//                             <td>{product.productName}</td>
//                             <td>{product.price} VND</td>
//                             <td>{product.stockInStorage}</td>
//                             <td>
//                                 <img
//                                     src={`http://localhost:7163/uploads/${product.image.split("\\").pop()}`}
//                                     alt={product.productName}
//                                     className="product-image"
//                                 />
//                             </td>
//                             <td>{product.description}</td>
//                             {userRole !== "staff" && (
//                                 <td>
//                                     <button onClick={() => handleDelete(product.productId)} className="delete-btn">
//                                         Xóa
//                                     </button>
//                                 </td>
//                             )}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffPage;

// import React, { useEffect } from "react";
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

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log("Redux State products:", items);
//     console.log("API trả về:", items?.data || {});

//     // Kiểm tra nếu API trả về đúng định dạng
//     const products = items?.data?.$values || [];

//     // Nếu đang tải dữ liệu từ API
//     if (status === "loading") return <p>Loading...</p>;
    
//     // Nếu API bị lỗi
//     if (status === "failed") return <p>Error: {error || "Không thể lấy dữ liệu sản phẩm"}</p>;

//     const handleDelete = (productId) => {
//         if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//             dispatch(deleteProduct(productId));
//         }
//     };

//     return (
//         <div className="staff-container">
//             <h2>Quản lý sản phẩm</h2>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Tên sản phẩm</th>
//                         <th>Giá</th>
//                         <th>Tồn kho</th>
//                         <th>Hình ảnh</th>
//                         <th>Mô tả</th>
//                         {userRole !== "staff" && <th>Hành động</th>} {/* Staff không có quyền */}
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
//         </div>
//     );
// };

// export default StaffPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
import "./StaffPage.css";

const StaffPage = () => {
    const dispatch = useDispatch();

    // Lấy dữ liệu user từ Redux, đảm bảo không bị undefined
    const user = useSelector((state) => state.user?.user || {});  
    const auth = useSelector((state) => state.auth || {});  
    const userRole = auth?.user?.role || "guest"; // Nếu không có role thì mặc định là guest

    // Lấy danh sách sản phẩm từ Redux
    const { items, status, error } = useSelector((state) => state.products);

    // State để hiển thị modal sửa/thêm
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        productName: "",
        price: "",
        stockInStorage: "",
        image: "",
        description: ""
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log("Redux State products:", items);
    console.log("API trả về:", items?.data || {});

    // Kiểm tra nếu API trả về đúng định dạng
    // const products = items?.data?.$values || [];
    const products = Array.isArray(items?.data?.$values) ? items.data.$values : [];


    // Nếu đang tải dữ liệu từ API
    if (status === "loading") return <p>Loading...</p>;
    
    // Nếu API bị lỗi
    if (status === "failed") return <p>Error: {error || "Không thể lấy dữ liệu sản phẩm"}</p>;

    const handleDelete = (productId) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
            dispatch(deleteProduct(productId));
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setEditingProduct(null);
        setModalOpen(true);
    };

    const handleSave = () => {
        if (editingProduct) {
            // Gọi API cập nhật sản phẩm ở đây
            console.log("Cập nhật sản phẩm:", editingProduct);
        } else {
            // Gọi API thêm sản phẩm mới ở đây
            console.log("Thêm sản phẩm:", newProduct);
        }
        setModalOpen(false);
    };

    return (
        <div className="staff-container">
            <h2>Quản lý sản phẩm</h2>

            {/* Nút thêm sản phẩm */}
            {userRole !== "staff" && (
                <button className="add-btn" onClick={handleAdd}>Thêm sản phẩm</button>
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
                                        src={`http://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
                                        alt={product.productName}
                                        className="product-image"
                                    />
                                </td>
                                <td>{product.description}</td>
                                {userRole !== "staff" && (
                                    <td>
                                        <button onClick={() => handleEdit(product)} className="edit-btn">
                                            Sửa
                                        </button>
                                        <button onClick={() => handleDelete(product.productId)} className="delete-btn">
                                            Xóa
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Không có sản phẩm nào</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal sửa/thêm sản phẩm */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
                        <label>
                            Tên sản phẩm:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.productName : newProduct.productName}
                                onChange={(e) => {
                                    if (editingProduct) {
                                        setEditingProduct({ ...editingProduct, productName: e.target.value });
                                    } else {
                                        setNewProduct({ ...newProduct, productName: e.target.value });
                                    }
                                }}
                            />
                        </label>
                        <label>
                            Giá:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) => {
                                    if (editingProduct) {
                                        setEditingProduct({ ...editingProduct, price: e.target.value });
                                    } else {
                                        setNewProduct({ ...newProduct, price: e.target.value });
                                    }
                                }}
                            />
                        </label>
                        <label>
                            Tồn kho:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
                                onChange={(e) => {
                                    if (editingProduct) {
                                        setEditingProduct({ ...editingProduct, stockInStorage: e.target.value });
                                    } else {
                                        setNewProduct({ ...newProduct, stockInStorage: e.target.value });
                                    }
                                }}
                            />
                        </label>
                        <label>
                            Ảnh:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={(e) => {
                                    if (editingProduct) {
                                        setEditingProduct({ ...editingProduct, image: e.target.value });
                                    } else {
                                        setNewProduct({ ...newProduct, image: e.target.value });
                                    }
                                }}
                            />
                        </label>
                        <label>
                            Mô tả:
                            <textarea
                                value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={(e) => {
                                    if (editingProduct) {
                                        setEditingProduct({ ...editingProduct, description: e.target.value });
                                    } else {
                                        setNewProduct({ ...newProduct, description: e.target.value });
                                    }
                                }}
                            />
                        </label>
                        <button className="save-btn" onClick={handleSave}>Lưu</button>
                        <button className="close-btn" onClick={() => setModalOpen(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffPage;
