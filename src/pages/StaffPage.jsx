import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
import "./staffPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StaffPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);
    const userRole = useSelector((state) => state.auth?.user?.role || "guest");
    const [categories, setCategories] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const products = Array.isArray(items) ? items : [];
    const filteredProducts = products.filter(product =>
        product.productName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            toast.success("Xóa sản phẩm thành công!", { autoClose: 3000 });
            setShowConfirmDialog(false);
            setSelectedProductId(null);
            console.log("isModalOpen sau khi mở Edit Modal:", isModalOpen);
        }
    };

    const openEditModal = (product) => {
        console.log("Mở modal chỉnh sửa", product);
        toast.info(`Chỉnh sửa sản phẩm: ${product.productName}`, { autoClose: 2000 });
        setEditingProduct({ ...product });
        setModalOpen(true);
    };

    const openAddModal = () => {
        console.log("Mở modal thêm sản phẩm");
        toast.success("Mở modal thêm sản phẩm!", { autoClose: 2000 });
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
        console.log("isModalOpen sau khi mở Add Modal:", isModalOpen);
    };

    const handleSave = async () => {
        console.log("Lưu sản phẩm:", editingProduct || newProduct);
        if (editingProduct) {
            await dispatch(updateProduct(editingProduct));
            toast.success("Cập nhật sản phẩm thành công!", { autoClose: 2000 });
        } else {
            await dispatch(addProduct(newProduct));
            toast.success("Thêm sản phẩm mới thành công!", { autoClose: 2000 });
        }
        // toast.error("Có lỗi xảy ra khi lưu sản phẩm!", { autoClose: 3000 });
        setModalOpen(false);
        dispatch(fetchProducts());
    };

    const handleInputChange = (value, field) => {
        console.log(`Thay đổi: ${field} =`, value, "Trạng thái hiện tại:", editingProduct || newProduct);
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
             <ToastContainer position="top-right" autoClose={3000}/> {/* Thêm dòng này để hiển thị thông báo */}
            <DeleteConfirmDialog />
            <h2>Quản lý sản phẩm</h2>
            {/* Ô tìm kiếm */}
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {userRole !== "staff" && (
                <button className="add-btn" onClick={openAddModal}>Thêm sản phẩm</button>
                
            )}
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tồn kho</th>                       
                        <th>Mô tả</th>
                        <th>Danh mục</th>
                        {userRole !== "staff" && <th>Hành động</th>}
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>
                                    <img
                                        src={product.image && product.image.startsWith("http") 
                                        ? product.image 
                                         : `https://phamdangtuc-001-site1.ntempurl.com/uploads/${product.image ? product.image.split("\\").pop() : "fallback-image.jpg"}`}
                                        alt={product.productName}
                                        className="w-32 h-32 object-cover rounded-md mb-2 hover:opacity-80 transition-opacity"
                                         onError={(e) => e.target.src = "/fallback-image.jpg"} 
                                    />
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.price.toLocaleString('vi-vn')} VND</td>
                                <td>{product.stockInStorage}</td>                        
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
                        <div class="modal-body">
                        <label >
                            Tên sản phẩm:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.productName : newProduct.productName}
                                onChange={(e) => handleInputChange(e.target.value, 'productName')}
                            />
                        </label>
                        </div>
                        <div class="row">
                        <div class="form-group half">
                        <label>
                            Giá:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) => handleInputChange(e.target.value, 'price')}
                            />
                        </label>
                        </div>
                        <div class="form-group half">
                        <label>
                            Tồn kho:
                            <input
                                type="number"
                                value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
                                onChange={(e) => handleInputChange(e.target.value, 'stockInStorage')}
                            />
                        </label>
                        </div>
                        </div>

                        <div class="form-group">
                        <label>
                            Ảnh:
                            <input
                                type="text"
                                value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={(e) => handleInputChange(e.target.value, 'image')}
                            />
                        </label>
                        </div>

                        <div class="form-group">
                        <label>
                            Mô tả:
                            <textarea
                                value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={(e) => handleInputChange(e.target.value, 'description')}
                            />
                        </label>
                        </div>

                        <div class="form-group">
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
                        </div>

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