import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "https://localhost:7163/api/Category";

/* 🔄 Lấy danh sách danh mục */
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Không thể lấy danh mục");
    return response.json();
});

/* ➕ Thêm danh mục */
export const addCategory = createAsyncThunk("categories/addCategory", async (newCategory, { rejectWithValue }) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCategory),
        });

        if (!response.ok) throw new Error("Không thể thêm danh mục");
        return response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

/* ✏️ Cập nhật danh mục */
export const updateCategory = createAsyncThunk("categories/updateCategory", async ({ id, updatedCategory }, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCategory),
        });

        if (!response.ok) throw new Error("Không thể cập nhật danh mục");
        return response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

/* ❌ Xóa danh mục */
export const deleteCategory = createAsyncThunk("categories/deleteCategory", async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });

        if (!response.ok) throw new Error("Không thể xóa danh mục");
        return id;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

/* 🔧 Slice quản lý danh mục */
const categoriesSlice = createSlice({
    name: "categories",
    initialState: { items: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "succeeded";
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                const index = state.items.findIndex((cat) => cat.categoryId === action.payload.categoryId);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.items = state.items.filter((cat) => cat.categoryId !== action.payload);
            });
    },
});

export default categoriesSlice.reducer;
