import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getcategories } from '../../../Components/api/auth'

const userAuthFromLocalStorage = () => {
    const isAuth = localStorage.getItem('isAuth')

    if (isAuth && JSON.parse(isAuth) === true) {
      return true
    }
    return false
  }

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  isloading: false,
  Error: "",
  products: [],
}

export const authSlice = createSlice({
  name: 'auth',
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
      console.log("******** ERROR AT REDUCER",state.Error);
      state.Error = action.payload;
    },
    setLoading: (state, action) => {
      state.isloading = !state.isloading;
    } 
  },
})


// category slice ************************************

  export const CatSlice = createSlice({
    name: 'catagory',
    initialState: {
      categories: [],
    },
    reducers: {
     fetchcatagory: (state, action) => {
      console.log("fetch catagory ACTION PAYLOAD at reducer", action.payload);
      return {...state, categories: action.payload};
    },
  }
  });

  export const ProductSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
    },
    reducers: {
      fetchproduct: (state, action) => {
        return {...state, products: action.payload};
      }, 
    },
  })

// Action creators are generated for each case reducer function
export const { authenticateUser, unauthenticateUser,  setLoading,  setError } = authSlice.actions
export const { fetchcatagory } = CatSlice.actions
export const { fetchproduct } = ProductSlice.actions

const authreducer = authSlice.reducer
const catagoryreducer = CatSlice.reducer
const productreducer = ProductSlice.reducer


export { authreducer, catagoryreducer, productreducer,  }