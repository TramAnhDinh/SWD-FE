import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
import "./staffPage.css";

const StaffPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);
    const userRole = useSelector((state) => state.auth?.user?.role || "guest");
    const [categories, setCategories] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

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
        setSelectedProductId(id);
        setShowConfirmDialog(true);
    };

    const handleConfirmDelete = async () => {
        if (selectedProductId) {
            await dispatch(deleteProduct(selectedProductId));
            dispatch(fetchProducts());
            setShowConfirmDialog(false);
            setSelectedProductId(null);
        }
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

    const handleSave = async () => {
        if (editingProduct) {
            await dispatch(updateProduct(editingProduct));
        } else {
            await dispatch(addProduct(newProduct));
        }
        setModalOpen(false);
        dispatch(fetchProducts());
    };

    const handleInputChange = (value, field) => {
        if (editingProduct) {
            setEditingProduct({ ...editingProduct, [field]: value });
        } else {
            setNewProduct({ ...newProduct, [field]: value });
        }
    };

    // Component xác nhận xóa
    const DeleteConfirmDialog = () => {
        if (!showConfirmDialog) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
                    <h3 className="text-xl font-bold mb-4">Xác nhận xóa</h3>
                    <p className="text-gray-600 mb-6">Bạn có chắc chắn muốn xóa sản phẩm này?</p>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setShowConfirmDialog(false)}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handleConfirmDelete}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="staff-container">
            <DeleteConfirmDialog />
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
                                onChange={(e) => handleInputChange(e.target.value, 'productName')}
                            />
                        </label>
                        <label>
                            Giá:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) => handleInputChange(e.target.value, 'price')}
                            />
                        </label>
                        <label>
                            Tồn kho:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
                                onChange={(e) => handleInputChange(e.target.value, 'stockInStorage')}
                            />
                        </label>
                        <label>
                            Ảnh:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={(e) => handleInputChange(e.target.value, 'image')}
                            />
                        </label>
                        <label>
                            Mô tả:
                            <textarea
                                value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={(e) => handleInputChange(e.target.value, 'description')}
                            />
                        </label>
                        <label>
                            Danh mục:
                            <select
                                value={editingProduct ? editingProduct.categoryId : newProduct.categoryId}
                                onChange={(e) => handleInputChange(Number(e.target.value), 'categoryId')}
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