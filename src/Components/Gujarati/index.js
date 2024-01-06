import React, { useEffect, useState } from "react";
import { fetchMoviesApi } from "../../Services/allMoviesApi";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart ,FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Gujarati = () => {
    const apiData = useSelector((state) => state);
    //   console.log(apiData.allmoviesApi.data?.movies);
    const[spin,setSpin]=useState(false);
    const [wishList,setWishList]=useState(false)
      const dispatch = useDispatch();
    
    
      useEffect(() => {
        dispatch(fetchMoviesApi("gujarati-movies"));
        setTimeout(()=>{
          setSpin(true)
    
        },3000)
      }, []);
    
      const removeWishList=(id)=>{
    
        setWishList(false)
      }
    
      const addWishList=(id)=>{
        setWishList(true)
      }
    
      return (
        <div className="telugu-movies-main-container">
          <h1 className="text-center pb-3 text-warning">Gujarati Movies</h1>
          {
            spin ?
            <div className="telugu-movies-container">
            {apiData.allmoviesApi.data?.movies.map((each) => {
              return (
                <Link to={`/movie/:${each.id}`} className="text-decoration-none" state={each}>
                <div key={each.id} className="telugu-movie-card">
                  <img src={each.img} alt={each.id} />
    
                  {/* <p>{each.id}</p> */}
    
                  <div className="telugu-movie-card-mini">
                    <span> {wishList? <FaHeart onClick={()=>removeWishList(each.id)} />
     : <FaRegHeart onClick={()=>addWishList(each.id)} />
    
                       
                        }
    </span>
                    <p>{each.id}</p>
                  </div>
                </div>
                </Link>
              );
            })}
          </div> : <span className="loader11"></span>

          }
    
         
        </div>
      );
}

export default Gujarati