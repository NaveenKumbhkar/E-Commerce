import { createSlice } from "@reduxjs/toolkit"

export const CardSlice = createSlice({
    name:"card",
    initialState :[],
    reducers : {
        add : (state,actions) => {
            state.push(actions.payload);
        },
        remove : (state,actions) => {
            return state.filter((item) => item.id !== actions.payload);
        }
    }
})

export const { add , remove } = CardSlice.actions;
export default CardSlice.reducer;

