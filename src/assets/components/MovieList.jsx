import React, { useEffect, useState } from 'react'
import './movieList.css'
import MovieCard from './MovieCard'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetchmovies()
    }, [])

    const fetchmovies = async () => {
        const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
    }
    
  
    return (
        <section className='movie_list'>
            <header className='movieheader'>
                <h2 className='center_el movieh2head'>Popular</h2>
                <div className='center_el movie_listadd'>
                    <ul className="center_el movie_filter">
                        <li className="movie_filter_item">8+</li>
                        <li className="movie_filter_item">7+</li>
                        <li className="movie_filter_item">6+</li>
                    </ul>
                    <select name="" id="" className="movie_sorting">
                        <option value="">Sort By</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>
            <div className='movie_shows'>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
    )
}

export default MovieList