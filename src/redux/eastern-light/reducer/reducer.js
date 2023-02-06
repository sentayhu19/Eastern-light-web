import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getcategories } from "../../../Components/api/auth";

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("isDelta");

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }
  return false;
};

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  isloading: false,
  Error: "",
  products: [],
  protectedData: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true;
      state.isloading = false;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
      state.isloading = false;
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
    setLoading: (state, action) => {
      console.log("SET LOADING AT REDUCER TO", state.isloading);
      state.isloading = action.payload;
    },
    setProtectedData: (state, action) => {
      state.protectedData = action.payload;
    },
  },
});

// category slice ************************************

export const CatSlice = createSlice({
  name: "catagory",
  initialState: {
    categories: [],
  },
  reducers: {
    fetchcatagory: (state, action) => {
      console.log("fetch catagory ACTION PAYLOAD at reducer", action.payload);
      return { ...state, categories: action.payload };
    },
  },
});

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    fetchproduct: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  authenticateUser,
  unauthenticateUser,
  setLoading,
  setError,
  setProtectedData,
} = authSlice.actions;
export const { fetchcatagory } = CatSlice.actions;
export const { fetchproduct } = ProductSlice.actions;

const authreducer = authSlice.reducer;
const catagoryreducer = CatSlice.reducer;
const productreducer = ProductSlice.reducer;

export { authreducer, catagoryreducer, productreducer };
