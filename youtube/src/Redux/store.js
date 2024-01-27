import { configureStore } from "@reduxjs/toolkit"
import MenuSlice from "./MenuSlice"
import LiveSlice from "./LiveSlice";

const store=configureStore({
    reducer:{
        menu:MenuSlice,
        live:LiveSlice,
    }
})
export default store;