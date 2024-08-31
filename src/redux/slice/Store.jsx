import { configureStore } from "@reduxjs/toolkit"
import CardSlice from "./CardSlice"

export const Store = configureStore({
    reducer : {
        card : CardSlice
    }
});