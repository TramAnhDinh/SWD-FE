import React, { useState } from 'react';

const TextTool = ({ design, setDesign }) => {
  const [text, setText] = useState('');

  const addText = () => {
    setDesign({
      ...design,
      texts: [...design.texts, { content: text, x: 50, y: 50 }],
    });
    setText('');
  };

  return (
    <div className="mb-4">
      <h4 className="mb-2">Thêm chữ</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-1 mb-2 w-full"
      />
      <button className="bg-blue-500 text-white p-1" onClick={addText}>
        Thêm
      </button>
    </div>
  );
};

export default TextTool;
