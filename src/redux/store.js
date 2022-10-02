import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/category'; 
const store = configureStore({
    reducer: {
        category : categoryReducer
    },
})

export default store