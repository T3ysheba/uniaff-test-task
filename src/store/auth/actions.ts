import { createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstance from 'libraries/axios'

import type { TLoginFormData } from './types'

export const login = createAsyncThunk('auth/login', async (body: TLoginFormData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post('/auth/login', body)

    return data.data
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})
