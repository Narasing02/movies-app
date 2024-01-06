import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../../Services/wishListSlice'
import { MdAutoDelete } from "react-icons/md";
import { TbMoodEmptyFilled } from "react-icons/tb";
import './index.css'
const WishList = () => {
    const selectedMovies =useSelector(state=>state.wishlist);
    // console.log(selectedMovies)
    const dispatch=useDispatch()
  return (
    <div className='wishList-main-container'>
        
        <h2 className='text-center text-warning py-2'>WishList <span className='text-danger'>{selectedMovies.length}</span></h2>
        <div className='WishList-movie-main-container'>
        {
            selectedMovies.length>0 ? 
            
           <> {selectedMovies.map((each,index)=>{
                return(<div key={index} className='wishList-movie-container'>
                    
                   
                    <img src="https://cdn.pixabay.com/photo/2012/12/14/11/13/fractal-69931_1280.jpg" alt="" className="screenshot-size"/>
                    <p>{each.extraInfo[0].para}</p>
                    <button className='btn btn-danger' onClick={()=>{dispatch(remove(index,1))}}>Remove</button>

                </div>)
            })}</>
           :<TbMoodEmptyFilled  className='trash-icon'/>
        }
         </div> 
       
    </div>
  )
}

export default WishList