import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './features/filter/filterSlice';
import basketReducer from "./features/basket/basketSlice";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./features/theme/themeSlice";
import userReducer from './features/user/userSlice'
export const store = configureStore({
    reducer:{
        filter: filterReducer,
        basket: basketReducer,
        counter: counterReducer,
        theme:themeReducer,
        user: userReducer,
    },
})