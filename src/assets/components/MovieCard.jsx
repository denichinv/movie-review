import React from 'react'
import './movieCard.css'
const MovieCard = () => {
  return (
    <a href="" className='movie_show'>
      <img src="https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/03/Stopmotion-poster.jpg?ssl=1g" className='movie_img' alt='moviedetails' />
    <div className="movie_details">
      <h3 className='movie_details_h3'>Kraven The Hunter</h3>
      <p className='moviedesc'>Details of Movies</p>
      <p className='movierating'>8.0{""} <img src='https://static.vecteezy.com/system/resources/thumbnails/019/617/676/small_2x/gold-star-symbol-png.png' className='emoji_class' alt='rating Icon'></img> </p>
      <div className='center_el moviedate'>
        <p>10-10-2024</p>
      </div>
    </div>
    </a>
  )
}

export default MovieCard
