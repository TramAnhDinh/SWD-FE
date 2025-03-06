import React from 'react';
import TextTool from './TextTool';
import ImageTool from './ImageTool';

const Controls = ({ design, setDesign }) => {
  const handleColorChange = (e) => {
    setDesign({ ...design, color: e.target.value });
  };

  return (
    <div className="w-1/4 p-4 border rounded">
      <h3 className="mb-2">Cài đặt</h3>
      <label>Màu áo:</label>
      <input
        type="color"
        value={design.color}
        onChange={handleColorChange}
        className="w-full mb-4"
      />
      <TextTool design={design} setDesign={setDesign} />
      <ImageTool design={design} setDesign={setDesign} />
    </div>
  );
};

export default Controls;
