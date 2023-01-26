import { createSlice } from '@reduxjs/toolkit'

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

// Action creators are generated for each case reducer function
export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer