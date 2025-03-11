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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "../redux/slices/productsSlice";

const StaffPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleAdd = () => {
    if (!newName || !newPrice) return;
    dispatch(addProduct({ id: Date.now(), name: newName, price: Number(newPrice) }));
    setNewName("");
    setNewPrice("");
  };

  const handleUpdate = (id) => {
    const updatedName = prompt("Nhập tên mới:");
    const updatedPrice = prompt("Nhập giá mới:");
    if (updatedName && updatedPrice) {
      dispatch(updateProduct({ id, name: updatedName, price: Number(updatedPrice) }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h2>
      <div className="mb-4">
        <input type="text" placeholder="Tên sản phẩm" value={newName} onChange={(e) => setNewName(e.target.value)} className="border p-2 mr-2" />
        <input type="number" placeholder="Giá" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="border p-2 mr-2" />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2">Thêm sản phẩm</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 flex justify-between items-center mb-2">
            <span>{product.name} - {product.price} USD</span>
            <div>
              <button onClick={() => handleUpdate(product.id)} className="bg-blue-500 text-white px-2 py-1 mr-2">Sửa</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1">Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffPage;