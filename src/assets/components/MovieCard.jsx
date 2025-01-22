import React from 'react'
import './movieCard.css'
const MovieCard = () => {
  return (
    <a href="" className='movie_show'>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b05de1177157939.64d19b7d3081e.jpg" className='movie_img' alt='moviedetails' />
    <div className="movie_details">
      <h3 className='movie_details_h3'>Kraven The Hunter</h3>
      <div className='moviedate'>
        <p>10-10-2024</p>
        <p>8.0{""} <img src='https://static.vecteezy.com/system/resources/thumbnails/019/617/676/small_2x/gold-star-symbol-png.png' className='emoji_class' alt='rating Icon'></img> </p>
      </div>
    </div>
    </a>
  )
}

export default MovieCard
