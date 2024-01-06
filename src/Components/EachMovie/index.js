import React, { useEffect, useState } from "react";
import "./index.css";
import { RiStarSFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { MdMovieCreation } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {add,remove} from "../../Services/wishListSlice"
import axios from "axios";
const EachMovie = () => {
  const [movieDetails1, setMovieDetails1] = useState([]);
  const [spin,setSpin]=useState(false);
  const [added,setAdded]=useState(false);
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  // const addMovie = useSelector(state=>state);
  const dispatch =useDispatch();


  const movieDetails = async () => {
    const options = {
      method: "GET",
      url: `https://moviesverse1.p.rapidapi.com/movie/singleMovie/${data.id}`,
      // "https://moviesverse.chat/loki-s02-e06-dual-hindi-org-hd/"
      headers: {
        "X-RapidAPI-Key": "12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setMovieDetails1([response.data]);
      setSpin(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movieDetails();
  }, []);

  const addMovieIntoWishList=(movie)=>{
    dispatch(add(movie))
    setAdded(true);
  }
  const removeMovie=(movie)=>{
    dispatch(remove(movie,1));
    setAdded(false);

  }

  return (
 
 
    <div className="each-img-container bg-dark">
         {spin ?
    <div className="each-img-container bg-dark">

      {movieDetails1.map((each,index) => {
        return (
          <div className="movie-description-container">
            <h1 className="text-light p-3 text-uppercase">{data.id}</h1>
            <p className="text-light p-3 fs-5">{each.storyLine}</p>

            {/* <p>{each.storyLine}</p> */}

            {/* <img src={each.screenShots} alt="" /> */}
            <div className="p-2">
              <RiStarSFill className="text-light fs-2" />
              <RiStarSFill className="text-light fs-2" />
              <RiStarSFill className="text-light fs-2" />
              <span className="text-white p-3 fs-6">3.4K</span>
            </div>
            <div>
              <div className="icons-container">
                <div>
                  {
                    added?<MdBookmarkAdded className="text-light fs-2   addMovie" onClick={()=>removeMovie(index)} />:<IoAdd className="text-light fs-2   addMovie"  onClick={()=>addMovieIntoWishList(each)}/>

                  }
                  
                </div>
                <div>
                  {" "}
                  <MdMovieCreation className="text-light fs-2 addMovie" />
                </div>
                <div>
                  {" "}
                  <FaThumbsUp className="text-light fs-2 addMovie" />
                </div>
                <div>
                  {" "}
                  <FaThumbsDown className="text-light fs-2 addMovie" />
                </div>
                <div>
                  {" "}
                  <FaShareNodes className="text-light fs-2 addMovie" />
                </div>
                {/* <p>{data.text}</p> */}
                <button className="btn btn-primary">
                  <a href={data.link} className="text-decoration-none text-light">Download</a>
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="movie-img">
        <img src={data.img} alt={data.id} />
      </div>
     </div>:<span className="loader"></span>  }
    </div>
  

  );
};

export default EachMovie;
