import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getSpecificProduct } from '../../services/products';

const initialState = {
  isLoading: false,
  products: [],
  currentProduct: null,
};

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const data = await getAllProducts();
    return data;
  }
);

export const getProductDetails = createAsyncThunk(
  'products/getSingleProduct',
  async (id) => {
    const data = await getSpecificProduct(id);
    return data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {
    resetCurrentProduct: (state) => {
      state.currentProduct = null;
    },

    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },

  extraReducers: (cases) => {
    cases
      .addCase(loadProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = [...action.payload];
      })
      .addCase(getProductDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProduct = action.payload;
      });
  },
});

export const { resetCurrentProduct, toggleLoading } = productSlice.actions;
export default productSlice.reducer;
