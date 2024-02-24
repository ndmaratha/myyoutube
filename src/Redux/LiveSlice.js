import { createSlice } from "@reduxjs/toolkit";

const LiveSlice=createSlice({
    name:"live",
    initialState:{
    
        cmt:[]
    },
    reducers:{
        addComent:(state,action)=>{
            if(state.cmt.length>=12){
                state.cmt.splice(12,1);
            }
            state.cmt.splice(0,0,action.payload);
        },
    }
})
export const{addComent}=LiveSlice.actions;
export default LiveSlice.reducer;