import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
      // state.items = fetchProducts();
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
