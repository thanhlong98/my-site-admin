import { configureStore } from '@reduxjs/toolkit'

import auhReducer from '../features/Auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: auhReducer
  },
  devTools: typeof window !== 'undefined'
})

export type RootState = ReturnType<typeof store.getState>
