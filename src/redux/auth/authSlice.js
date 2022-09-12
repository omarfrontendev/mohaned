import { createSlice } from '@reduxjs/toolkit'

// user From localStorage

const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: loggedIn ? loggedIn : null
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true
      localStorage.setItem('loggedIn', true) 
    },
    logout: (state) => {
      state.loggedIn = false
      localStorage.removeItem('loggedIn00')
    }
  }
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer