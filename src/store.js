import { configureStore } from "@reduxjs/toolkit";
import addtocartReducer from "./Component/reducers/cart";

 const store = configureStore({
    reducer: addtocartReducer,
    });

export default store;
