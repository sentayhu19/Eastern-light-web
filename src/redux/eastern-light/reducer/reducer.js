import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state) => {
        state.isAuth = true;
    },
    unauthenticateUser: (state) => {
        state.isAuth = false;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer