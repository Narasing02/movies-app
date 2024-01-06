import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



const initialState={
    isLoading:false,
    data:null
}

export const fetchMoviesApi =createAsyncThunk('fetchMoviesApi',async(props)=>{

const options = {
  method: 'GET',
  url: `https://moviesverse1.p.rapidapi.com/movies/category/${props}/1`,
  headers: {
    'X-RapidAPI-Key': '12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a',
    'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
    return response.data
    
} catch (error) {
	console.error(error);
}

})





const moviesSlice =createSlice({
    name:'allmoviesApi',
    initialState,
   
 
    extraReducers:(builder)=>{

        builder.addCase(fetchMoviesApi.pending, (state,action)=>{
            state.isLoading=true;
            state.data=null;
        })

        builder.addCase(fetchMoviesApi.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        })
        builder.addCase(fetchMoviesApi.rejected, (state,action)=>{
            state.isLoading=false;
            state.data=null
        })

    }


})

export default moviesSlice.reducer;