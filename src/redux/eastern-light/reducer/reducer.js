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
      // const data = await getcategories();
      //   state.isloading = true; 
      //   state.categories = data.data.category;
      //   state.isloading = false;
      //   console.log("fetch catagory", data.data.category);
      //   return data.data.category;
      // }, 
      return {...state, categories: action.payload};
    },
  }
  });

  export const ProductSlice = createSlice({
    name: 'catagory',
    initialState,
    reducers: {
      fetchproduct: (state) => {
          state.categories =  "";
          state.isloading = false;
      }, 
    },
  })

// Action creators are generated for each case reducer function
export const { authenticateUser, unauthenticateUser } = authSlice.actions
export const { fetchcatagory } = CatSlice.actions

const authreducer = authSlice.reducer
const catagoryreducer = CatSlice.reducer
const productreducer = ProductSlice.reducer

export { authreducer, catagoryreducer, productreducer }