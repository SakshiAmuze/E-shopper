import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoryDataTransfer:(state,action)=>{
        state.value = action.payload;
    }
  },
})


export const {  categoryDataTransfer } = categorySlice.actions;

export default categorySlice.reducer;