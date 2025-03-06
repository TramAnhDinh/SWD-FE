// import React, { useState, useRef } from 'react';
// import { SketchPicker } from 'react-color';
// import { Stage, Layer, Text, Image } from 'react-konva';
// import useImage from 'use-image';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/slices/cartSlice';

// const DesignerPage = () => {
//   const [shirtColor, setShirtColor] = useState('#FFFFFF');
//   const [text, setText] = useState('Your Text');
//   const [textColor, setTextColor] = useState('#000000');
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const stageRef = useRef();
//   const dispatch = useDispatch();

//   // Load ảnh từ input
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => setUploadedImage(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const [image] = useImage(uploadedImage);

//   // Tải thiết kế xuống
//   const handleDownload = () => {
//     const uri = stageRef.current.toDataURL();
//     const link = document.createElement('a');
//     link.download = 'design.png';
//     link.href = uri;
//     link.click();
//   };

//   // Lưu thiết kế vào giỏ hàng
//   const saveDesignToCart = () => {
//     dispatch(addToCart({
//       id: Date.now(),
//       name: 'Custom Shirt',
//       price: 30,
//       image: stageRef.current.toDataURL(),
//     }));
//     alert('Đã thêm thiết kế vào giỏ hàng!');
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6">Thiết kế áo của bạn</h2>
//       <div className="grid grid-cols-2 gap-8">
//         <div>
//           <Stage width={400} height={500} ref={stageRef}>
//             <Layer>
//               <rect width={400} height={500} fill={shirtColor} />
//               <Text
//                 text={text}
//                 fontSize={24}
//                 fill={textColor}
//                 draggable
//                 x={50}
//                 y={200}
//               />
//               {uploadedImage && (
//                 <Image image={image} draggable x={50} y={50} />
//               )}
//             </Layer>
//           </Stage>
//         </div>
//         <div className="space-y-4">
//           <div>
//             <label className="block mb-2 font-semibold">Chọn màu áo:</label>
//             <SketchPicker
//               color={shirtColor}
//               onChangeComplete={(color) => setShirtColor(color.hex)}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Nhập chữ:</label>
//             <input
//               type="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Chọn màu chữ:</label>
//             <SketchPicker
//               color={textColor}
//               onChangeComplete={(color) => setTextColor(color.hex)}
//             />
//           </div>
//           <div>
//             <label className="block mb-2 font-semibold">Thêm ảnh:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="block w-full"
//             />
//           </div>
//           <div className="flex gap-4">
//             <button
//               onClick={handleDownload}
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//             >
//               Tải xuống thiết kế
//             </button>
//             <button
//               onClick={saveDesignToCart}
//               className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//             >
//               Lưu vào giỏ
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignerPage;


import React, { useState, useRef } from 'react';
import { SketchPicker } from 'react-color';
import { Stage, Layer, Text, Image, Rect } from 'react-konva';
import useImage from 'use-image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const DesignerPage = () => {
  const [shirtColor, setShirtColor] = useState('#FFFFFF');
  const [text, setText] = useState('Your Text');
  const [textColor, setTextColor] = useState('#000000');
  const [uploadedImage, setUploadedImage] = useState(null);
  const stageRef = useRef();
  const dispatch = useDispatch();

  // Load ảnh từ input
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 5 * 1024 * 1024) {  // Giới hạn dung lượng < 5MB
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert('Vui lòng tải ảnh dưới 5MB!');
    }
  };

  const [image] = useImage(uploadedImage);

  // Tải thiết kế xuống
  const handleDownload = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'design.png';
    link.href = uri;
    link.click();
  };

  // Lưu thiết kế vào giỏ hàng
  const saveDesignToCart = () => {
    dispatch(addToCart({
      id: Date.now(),
      name: 'Custom Shirt',
      price: 30,
      image: stageRef.current.toDataURL(),
    }));
    alert('Đã thêm thiết kế vào giỏ hàng!');
  };

  // Xóa ảnh đã tải lên
  const removeUploadedImage = () => setUploadedImage(null);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Thiết kế áo của bạn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-gray-100 p-4 rounded">
          <Stage width={400} height={500} ref={stageRef}>
            <Layer>
              <Rect width={400} height={500} fill={shirtColor} />
              <Text
                text={text}
                fontSize={24}
                fill={textColor}
                draggable
                x={50}
                y={200}
              />
              {uploadedImage && (
                <Image image={image} draggable x={50} y={50} />
              )}
            </Layer>
          </Stage>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold">Chọn màu áo:</label>
            <SketchPicker
              color={shirtColor}
              onChangeComplete={(color) => setShirtColor(color.hex)}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Nhập chữ:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Chọn màu chữ:</label>
            <SketchPicker
              color={textColor}
              onChangeComplete={(color) => setTextColor(color.hex)}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Thêm ảnh:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full mb-2"
            />
            {uploadedImage && (
              <button
                onClick={removeUploadedImage}
                className="text-red-500 underline text-sm"
              >
                Xóa ảnh
              </button>
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Tải xuống thiết kế
            </button>
            <button
              onClick={saveDesignToCart}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Lưu vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;
