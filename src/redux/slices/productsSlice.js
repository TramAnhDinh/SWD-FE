import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'T-Shirt', price: 400, image: '/assets/t-shirt.jpg', description: 'Cool T-Shirt' },
    { id: 2, name: 'Hoodie', price: 300, image: '/assets/hoodie.jpg', description: 'Warm Hoodie' },
    { id: 3, name: 'Jacket', price: 500, image: '/assets/jacket.jpg', description: 'Color Jacket' },
    { id: 4, name: 'Cap', price: 100, image: '/assets/cap.jpg', description: 'Warm Cap' },
    { id: 5, name: 'Jeans', price: 150, image: '/assets/jean.jpg', description: 'Style Jean' },
],
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = productsSlice.actions;
export default productsSlice.reducer;
