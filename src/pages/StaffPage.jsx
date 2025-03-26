import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
import "./staffPage.css";

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
                                    {/* <img
                                        src={product.image?.startsWith("http") ? product.image : `https://localhost:7163/uploads/${product.image?.split("\\").pop()}`}
                                        alt={product.productName}
                                        className="product-image"
                                    /> */}
                                    <img
                                        src={product.image && product.image.startsWith("http") 
                                        ? product.image 
                                         : `https://phamdangtuc-001-site1.ntempurl.com/uploads/${product.image ? product.image.split("\\").pop() : "fallback-image.jpg"}`}
                                        alt={product.productName}
                                        className="w-full h-60 object-cover rounded-md mb-2 hover:opacity-80 transition-opacity"
                                         onError={(e) => e.target.src = "/fallback-image.jpg"} 
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