import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
const SideComp = () => {
  return (
    <div className="side-container">
        <div>
             <Link to="/search" className='side-container-para '>Search Movie</Link>
             <Link to="/telugu" className='side-container-para '>Telugu Movies</Link>
             <Link to="/tamil" className='side-container-para '>Tamil Movies</Link>
             <Link to="/hollywood" className='side-container-para '>Hollywood Movies</Link>
             <Link to="/bollywood" className='side-container-para '>Bollywood Movies</Link>
             <Link to="/latest" className='side-container-para '> Latest Movies</Link>
             <Link to="/marathi" className='side-container-para '>Marathi Movies </Link>
             <Link to="/gujarati" className='side-container-para '>Gujarati Movies</Link>
             <Link to="/wish-list" className='side-container-para '>Wish List</Link>
            
        </div>
    </div>
  )
}

export default SideComp