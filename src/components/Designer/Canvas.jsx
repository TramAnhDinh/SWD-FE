import React from 'react';

const Canvas = ({ design }) => {
  return (
    <div
      className="w-2/3 h-96 border relative"
      style={{ backgroundColor: design.color }}
    >
      {design.images.map((image, index) => (
        <div key={index} className="absolute" style={{ top: image.y, left: image.x }}>
          <img
            src={image.src}
            alt="design"
            style={{
              width: '100px',
              position: 'absolute',
              zIndex: 0, // Hình ảnh nằm dưới
            }}
          />
          {design.texts.map((text, textIndex) => (
            <div
              key={textIndex}
              style={{
                position: 'relative',
                top: text.y - image.y, // Đặt chữ theo vị trí so với ảnh
                left: text.x - image.x,
                color: '#000',
                fontWeight: 'bold',
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Tạo nền mờ nếu cần
                zIndex: 1, // Chữ nằm trên ảnh
              }}
            >
              {text.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
