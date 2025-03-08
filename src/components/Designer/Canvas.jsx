import React from 'react';

const Canvas = ({ design }) => {
  return (
    <div
      className="w-2/3 h-96 border relative"
      style={{ backgroundColor: design.color }}
    >
      {design.texts.map((text, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: text.y,
            left: text.x,
            color: '#000',
          }}
        >
          {text.content}
        </div>
      ))}
      {design.images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="design"
          style={{
            position: 'absolute',
            top: image.y,
            left: image.x,
            width: '100px',
          }}
        />
      ))}
    </div>
  );
};

export default Canvas;
