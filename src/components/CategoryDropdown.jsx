import React from 'react';

const CategoryDropdown = ({ setCategory }) => {
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'tshirt', name: 'Áo thun' },
    { id: 'hoodie', name: 'Áo hoodie' },
    { id: 'shirt', name: 'Áo sơ mi' },
    { id: 'jeans', name: 'Quần jeans' },
  ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="mb-4">
      <select
        className="p-2 border rounded w-full"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
