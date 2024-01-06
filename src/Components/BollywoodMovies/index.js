import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBollywoodApi } from "../../Services/bollywoodMoviesApi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";
const BollywoodMovies = () => {
  const bollywoodData = useSelector((state) => state);
  const [wishList, setWishList] = useState(false);
  const [spin, setSpin] = useState(false);

  const dispatch = useDispatch();
  // console.log(bollywoodData)
  const removeWishList = (id) => {
    setWishList(false);
  };

  const addWishList = (id) => {
    setWishList(true);
  };

  useEffect(() => {
    dispatch(fetchBollywoodApi());
    setTimeout(() => {
      setSpin(true);
    }, 3000);
  }, []);

  return (
    <div className="telugu-movies-main-container">
      <h1 className="text-center pb-3 text-light">Hollywood Movies</h1>

      <span className="loader"></span>
      {spin ? (
        <div className="telugu-movies-container">
          {bollywoodData.fetchBollywoodApi.data?.movies.map((each) => {
            return (
              <Link
                to={`/movie/:${each.id}`}
                state={each}
                className="text-decoration-none"
              >
                <div key={each.id} className="telugu-movie-card">
                  <img src={each.img} alt={each.id} />

                  {/* <p>{each.id}</p> */}

                  <div className="telugu-movie-card-mini">
                    <span>
                      {" "}
                      {wishList ? (
                        <FaHeart onClick={() => removeWishList(each.id)} />
                      ) : (
                        <FaRegHeart onClick={() => addWishList(each.id)} />
                      )}
                    </span>
                    <p>{each.id}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <span className="loader11"></span>
      )}
    </div>
  );
};

export default BollywoodMovies;
