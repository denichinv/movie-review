import React, { useEffect, useState } from 'react'
import './movieList.css'
import MovieCard from './MovieCard'
const MovieList = () => {
   
    

    useEffect(()=> {const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGVjYjg5NmNkNzFiNTc3YjJmNGY0YTIwM2ZlOGM1NCIsIm5iZiI6MTczNzU2NzY2Ny4zMTksInN1YiI6IjY3OTEyZGIzMzQ3OWM0OGNjYjI4ZDE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9L1374h9LdOCTyH7cCyhIlki8feOrOnOOVV5cHnKQ1w'
        }
      };
      
      fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(data => {setMovies(data.results)
        })
        .catch(err => console.error(err));
        
      },[])

     
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
