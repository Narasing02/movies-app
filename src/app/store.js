import {configureStore} from '@reduxjs/toolkit'
import allmoviesApiReducer from '../Services/allMoviesApi'
import bollywoodMoviesApiReducer from '../Services/bollywoodMoviesApi'
import wishListSliceReducer from '../Services/wishListSlice'
export const store =configureStore({
    reducer:{
        allmoviesApi:allmoviesApiReducer,
        fetchBollywoodApi:bollywoodMoviesApiReducer,
        wishlist:wishListSliceReducer

    }
})