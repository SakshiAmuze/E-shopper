import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './Reducers/categorySlice';
import cartReducer from './Reducers/cartSlice';
import storageReducer from './Reducers/storageSlice';


 const store = configureStore({
  reducer: {
    category : categoryReducer,
    cart:cartReducer,
    storage:storageReducer
  },
})

export default store;