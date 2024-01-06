import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import {Link} from 'react-router-dom'
const SearchComp = () => {

    const [search,setSearch]=useState('');
    const [searchedMovie,setSearchedMovie]=useState({})
  const SearchedMovie = async (search) => {
    const options = {
      method: "GET",
      url: "https://moviesverse1.p.rapidapi.com/movies/movieBySearch/1",
      params: { search:`${search}` },
      headers: {
        "X-RapidAPI-Key": "12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSearchedMovie(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const HandleSearch=(e)=>{
    setSearch(e.target.value)
  }
  const HandleSubmit=(e)=>{
    e.preventDefault();
    SearchedMovie(search);
  }

  return (
    <div className="search-comp-container">
      <div className="searchContainer">
        <form onSubmit={HandleSubmit}>
          <input type="search" placeholder="search" className=""  onChange={HandleSearch}/>
          <button type="submit" className="search-btn">
            search
          </button>
        </form>
        
      </div>
      <div className="search-movies-container">
        {searchedMovie.movies?.map((each)=>{
            return(
                <Link to={`movie/${each.id}`}  state={each} className="text-decoration-none">  <div className="card bg-dark text-light" style={{width: 14 +'rem'}} key={each.id}>
            <img className="card-img-top" src={each.img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{each.id}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div> </Link>)
                
              
        })}
      </div>
      {console.log( searchedMovie.movies)}
    </div>
  );
};

export default SearchComp;
