import React from 'react'
import './movieList.css'
import MovieCard from './MovieCard'
const MovieList = () => {
  return (
    <section className='movie_list'>
    <header className='movieheader'>
        <h2 className='center_el movieh2head'>Popular</h2>
        <div className='center_el movie_listadd'>
            <ul className="center_el movie_filter">
                <li className="movie_filter_item">8+</li>
                <li className="movie_filter_item">7+</li>
                <li className="movie_filter_item">8+</li>
            </ul>
            <select name="" id="" className="movie_sorting">
                <option value="">Sort By</option>
                <option value="">Date</option>
                <option value="">Rating</option>
            </select>
            <select name="" id="" className="movie_sorting">
                <option value="">Ascending</option>
                <option value="">Desending</option>
            </select>
        </div>
    </header>
    <div className='movie_shows'>
        <MovieCard/>
    </div>
    </section>
  )
}

export default MovieList
