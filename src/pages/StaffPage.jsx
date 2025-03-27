import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct, addProduct } from "../redux/slices/productsSlice";
import { ToastContainer, toast } from 'react-toastify';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const StaffPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);
    const userRole = useSelector((state) => state.auth?.user?.role || "guest");
    const [categories, setCategories] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
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

    const products = Array.isArray(items) ? items : [];
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.productName?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || product.categoryId === Number(selectedCategory);
        return matchesSearch && matchesCategory;
    });

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
        }
    };

    const openEditModal = (product) => {
        toast.info(`Chỉnh sửa sản phẩm: ${product.productName}`, { autoClose: 2000 });
        setEditingProduct({ ...product });
        setModalOpen(true);
    };

    const openAddModal = () => {
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
    };

    const handleSave = async () => {
        if (editingProduct) {
            await dispatch(updateProduct(editingProduct));
            toast.success("Cập nhật sản phẩm thành công!", { autoClose: 2000 });
        } else {
            await dispatch(addProduct(newProduct));
            toast.success("Thêm sản phẩm mới thành công!", { autoClose: 2000 });
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
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <ToastContainer position="top-right" autoClose={3000}/>
            <DeleteConfirmDialog />
            
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900">📦 Quản Lý Sản Phẩm</h1>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <div className="relative flex-1 max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm sản phẩm..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">Tất cả danh mục</option>
                                    {categories.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {userRole !== "staff" && (
                                <button
                                    onClick={openAddModal}
                                    className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                                >
                                    <FaPlus />
                                    Thêm sản phẩm
                                </button>
                            )}
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tồn kho</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                                        {userRole !== "staff" && (
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <tr key={product.productId} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.productId}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <img
                                                        src={product.image && product.image.startsWith("http") 
                                                            ? product.image 
                                                            : `https://phamdangtuc-001-site1.ntempurl.com/uploads/${product.image ? product.image.split("\\").pop() : "fallback-image.jpg"}`}
                                                        alt={product.productName}
                                                        className="w-20 h-20 object-cover rounded-lg"
                                                        onError={(e) => e.target.src = "/fallback-image.jpg"}
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.productName}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price.toLocaleString('vi-vn')} VND</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stockInStorage}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{product.description}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {categories.find(cat => cat.categoryId === product.categoryId)?.categoryName || 'Chưa phân loại'}
                                                </td>
                                                {userRole !== "staff" && (
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => openEditModal(product)}
                                                                className="text-blue-600 hover:text-blue-900"
                                                            >
                                                                <FaEdit className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(product.productId)}
                                                                className="text-red-600 hover:text-red-900"
                                                            >
                                                                <FaTrash className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                                                Không có sản phẩm nào
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6">
                        <h3 className="text-xl font-bold mb-4">{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tên sản phẩm
                                </label>
                                <input
                                    type="text"
                                    value={editingProduct ? editingProduct.productName : newProduct.productName}
                                    onChange={(e) => handleInputChange(e.target.value, 'productName')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Giá
                                    </label>
                                    <input
                                        type="number"
                                        value={editingProduct ? editingProduct.price : newProduct.price}
                                        onChange={(e) => handleInputChange(e.target.value, 'price')}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tồn kho
                                    </label>
                                    <input
                                        type="number"
                                        value={editingProduct ? editingProduct.stockInStorage : newProduct.stockInStorage}
                                        onChange={(e) => handleInputChange(e.target.value, 'stockInStorage')}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ảnh
                                </label>
                                <input
                                    type="text"
                                    value={editingProduct ? editingProduct.image : newProduct.image}
                                    onChange={(e) => handleInputChange(e.target.value, 'image')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mô tả
                                </label>
                                <textarea
                                    value={editingProduct ? editingProduct.description : newProduct.description}
                                    onChange={(e) => handleInputChange(e.target.value, 'description')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows="3"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Danh mục
                                </label>
                                <select
                                    value={editingProduct ? editingProduct.categoryId : newProduct.categoryId}
                                    onChange={(e) => handleInputChange(Number(e.target.value), 'categoryId')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            >
                                Đóng
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffPage;