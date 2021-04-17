import { configureStore } from '@reduxjs/toolkit'

import auhReducer from './slices/authSlice'

export * from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: auhReducer
  },
  devTools: typeof window !== 'undefined'
})

export type RootState = ReturnType<typeof store.getState>
