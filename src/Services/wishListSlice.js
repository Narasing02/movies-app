import {createSlice} from '@reduxjs/toolkit'

const initialState=[]

const wishListSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)

        },
        remove(state,action){
            state.splice(action.payload,1)

        }

    }
})

export const {add,remove}=wishListSlice.actions;
export default wishListSlice.reducer;