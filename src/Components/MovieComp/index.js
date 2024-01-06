import React from "react";
import "./index.css";
import video from "../../Assets/185503 (720p).mp4";
const MovieComp = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-edit">
        <source src={video} type="video/mp4" />
      </video>
      <div className="description-container"></div>
      <div className="description-container1">
        <h1 className="text-center text-light p-2">Cinema Hub</h1>
        <p className="text-light p-2">
          Movies TV Shows Filters Release year Genres Price Rating Age rating
          118269 titles sorted by Popularity Find out where to watch movies and
          tv series legally online with JustWatch, the streaming search engine.
          Movies TV Shows Filters Release year Genres Price Rating Age rating
          118269 titles sorted by Popularity Find out where to watch movies and
          tv series legally online with JustWatch, the streaming search engine.
          Movies TV Shows Filters Release year Genres Price Rating Age rating
          118269 titles sorted by Popularity Find out where to watch movies and
          tv series legally online with JustWatch, the streaming search engine.
        </p>
        
      </div>
    </div>
  );
};
// className='video-edit'
export default MovieComp;
