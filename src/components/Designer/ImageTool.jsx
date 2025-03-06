import React from 'react';

const ImageTool = ({ design, setDesign }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDesign({
        ...design,
        images: [...design.images, { src: reader.result, x: 50, y: 50 }],
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <h4 className="mb-2">Thêm ảnh</h4>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageTool;
