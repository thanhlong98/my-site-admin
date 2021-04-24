import { checkIsAuthen, removeAuthToken } from './../../utils/auth'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: checkIsAuthen(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchAuthen(state, action) {
      state.isAuthenticated = action.payload.state
      if (!action.payload.state) {
        console.log(removeAuthToken())
      }
    },
  },
})

const { actions, reducer } = authSlice

export const { switchAuthen } = actions

export default reducer
