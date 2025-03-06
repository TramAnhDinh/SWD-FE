import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
