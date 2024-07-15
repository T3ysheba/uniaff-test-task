import { createSlice } from '@reduxjs/toolkit'

import { login } from './actions'

import { IAuthInitialState } from './types'

export const initialState: IAuthInitialState = {
  login: {
    data: null,
    error: null,
    loading: false,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.login.loading = true
      state.login.error = null
    })

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.login.loading = false
      state.login.error = null
      state.login.data = payload
    })

    builder.addCase(login.rejected, (state, action) => {
      state.login.loading = false
      state.login.error = action.payload as null
    })
  },
})

export const { name, actions } = authSlice

const authReducer = authSlice.reducer

export default authReducer
