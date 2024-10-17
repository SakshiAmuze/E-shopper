import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addValueInCart:(state,action)=>{
        // console.log(addValueInCart);
        console.log(action.payload);
        var record = action.payload;
        var newValue = [...state.value,...record];
        console.log(newValue);
        state.value = newValue;

    },
    addValueOnButtonClick:(state,action)=>{

        console.log(action.payload);
        var newvalue1 = [...state.value,action.payload];
        state.value = newvalue1;
    },
    removeProductFromCart:(state,action)=>{
      var record = action.payload;
      state.value=[];
      var newValue = [...state.value,...record];
      state.value = newValue;
  },
}
})


export const {  addValueInCart,addValueOnButtonClick,removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;