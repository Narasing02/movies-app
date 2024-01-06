import React ,{useState} from 'react'
import{Routes,Route, useParams} from 'react-router-dom'
import './App.css';
import CardsComp from './Components/CardsComp';
import ColorSchemesExample from './Components/Navbar';
import SideComp from './Components/SideComp';
import './App.css'
import EachMovie from './Components/EachMovie';
import axios from 'axios';
import SearchComp from './Components/SearchComp';
import NotFound from './Components/NotFound';
import TeluguMovies from './Components/Telugu';
import BollywoodMovies from './Components/BollywoodMovies';
import TamilMovies from './Components/TamilMovies';
import LatestMovies from './Components/LatestMovies';
import Bollywood2Movies from './Components/Bollywood2Movies';
import Marathi from './Components/Marathi';
import Gujarati from './Components/Gujarati';
import WishList from './Components/WishList';

function App() {
  const [allMovies, setAllMovies] = useState({});
  let { movieId } = useParams();
  // console.log(movieId);
  const getAllMovies = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesverse1.p.rapidapi.com/movies/1',
      headers: {
        'X-RapidAPI-Key': '12a387374bmshccea6d86321e791p1ccdf9jsnd31fb93fcd2a',
        'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setAllMovies(response.data); // Remove the array brackets here
    } catch (error) {
      console.error(error);
    }
  };

  // getAllMovies();

  return (
    <div className="App">
      <ColorSchemesExample/>
      <div className='min-comp'>
      <SideComp/>
      
      
        <Routes>
          <Route  path="/movies-app" element={<CardsComp allMovies={allMovies} getAllMovies={getAllMovies}/>}/>
          <Route path="/search" element={<SearchComp/>} />
          <Route  path={`/movie/:${movieId}`} element={<EachMovie />}/>
          <Route  path={`search/movie/:${movieId}`} element={<EachMovie />}/>
          <Route path="/telugu" element={<TeluguMovies/>} />
          <Route path="/hollywood" element={<BollywoodMovies/>} />
          <Route  path={`/hollywood/movie/:${movieId}`} element={<EachMovie />}/>
          <Route path="/bollywood" element={<Bollywood2Movies/>} />
          <Route path="/tamil" element={<TamilMovies/>} />
          <Route path="/marathi" element={<Marathi/>} />
          <Route path="/gujarati" element={<Gujarati/>} />
          <Route path="/latest" element={<LatestMovies/>} />
          <Route path="/wish-list" element={<WishList/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
     
      

      </div>
      
         </div>
  );
}

export default App;
