import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchAuthen(state, action) {
      state.isAuthenticated = action.payload.state
    }
  }
})

const { actions, reducer } = authSlice

export const { switchAuthen } = actions

export default reducer
