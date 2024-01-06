import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MovieComp from "../MovieComp";
const CardsComp = ({ allMovies, getAllMovies }) => {
  // const [allMovies, setAllMovies] = useState({});
  const [teluguMovies, setTeluguMovies] = useState({});
  const [southMovies, setSouthMovies] = useState({});
  const [latestMovies, setLatestMovies] = useState({});

  const [spin, setSpin] = useState(false);



  const TeluguMovies = async () => {
    const options = {
      method: "GET",
      url: "https://moviesverse1.p.rapidapi.com/movies/category/telugu-movies/1",
      headers: {
        "X-RapidAPI-Key": "12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setTeluguMovies(response.data);
      setSpin(true);
    } catch (error) {
      console.error(error);
    }
  };

  const SouthMovies = async () => {
    const options = {
      method: "GET",
      url: "https://moviesverse1.p.rapidapi.com/movies/category/south-movies/1",
      headers: {
        "X-RapidAPI-Key": "12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setSouthMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const LatestMovies = async () => {
    const options = {
      method: "GET",
      url: "https://moviesverse1.p.rapidapi.com/movies/category/latest-movies/1",
      headers: {
        "X-RapidAPI-Key": "12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setLatestMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllMovies();
    TeluguMovies();
    SouthMovies();
    LatestMovies();
  }, []);



  return (
    <div className="cards-container">
      <MovieComp/>
      <h1>All Movies</h1>

      {spin ? (
        <div className="all-movies">
          {allMovies.movies?.map((each) => {
            return (
              <Link to={`/movie/${each.id}`}  state={each} className="text-decoration-none">
                <div key={each.id}>
                  <img src={each.img} alt={each.id} />
                  <p className="text-uppercase">{each.id}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <>
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      )}

      <h1>Telugu Movies</h1>
      {spin ? (
        <div className="all-movies">
          
          {teluguMovies.movies?.map((each) => {
            return (
              <div key={each.id}>
                 <Link to={`/movie/${each.id}`}  state={each} className="text-decoration-none">
                <img src={each.img} alt={each.id} />
                <p>{each.id}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      )}
      <h1>South Movies</h1>
      {spin ? (
        <div className="all-movies">
           
          {/* {console.log(southMovies)} */}
          {southMovies.movies?.map((each) => {
            return (
              <Link to={`/movie/${each.id}`}  state={each} className="text-decoration-none">
              <div key={each.id}>
                <img src={each.img} alt={each.id} />
                <p>{each.id}</p>
              </div>
              </Link>
            );
          })}
     
        </div>
      ) : (
        <>
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      )}
      <h1>Latest Movies</h1>
      {spin ? (
        <div className="all-movies">
        
          {latestMovies.movies?.map((each) => {
            return (
              <div key={each.id}>
                 <Link to={`/movie/${each.id}`}  state={each} className="text-decoration-none">
                <img src={each.img} alt={each.id} />
                <p>{each.id}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </>
      )}
    </div>
  );
};

export default CardsComp;
