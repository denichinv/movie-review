import React, { useEffect, useState } from 'react'
import './movieList.css'
import MovieCard from './MovieCard'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [allMoviesFiltered, setAllMoviesFiltered] = useState([])
    const [givingRating,setRating] = useState(0)
    
    useEffect(() => {
        fetchmovies()
    }, [])

    const fetchmovies = async () => {
        const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await res.json();
        setMovies(data.results);
        setAllMoviesFiltered(data.results);
    }
    
    const handleFilter = (rating) => {

if (givingRating == rating) {

    setRating(0)
    setMovies(allMoviesFiltered)
}else{
    setRating(rating)
    const filteredMovies = allMoviesFiltered.filter((movie) => movie.vote_average >= rating)
    setMovies(filteredMovies)
}

    }
  
    return (
        <section className='movie_list'>
            <header className='movieheader'>
                <h2 className='center_el movieh2head'>Popular</h2>
                <div className='center_el movie_listadd'>
                    <ul className="center_el movie_filter">
                        <li className={givingRating === 6 ? "movie_filter_item active" : "movie_filter_item"} onClick={() => handleFilter(6)}>6+</li>
                        <li className={givingRating === 7 ? "movie_filter_item active" : "movie_filter_item"} onClick={() => handleFilter(7)}>7+</li>
                        <li className={givingRating === 8 ? "movie_filter_item active" : "movie_filter_item"} onClick={() => handleFilter(8)}>8+</li>
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
                {movies.length > 0 ? (movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))):(<p className='noMovies'>No movies found above this rating!</p>) }
            </div>
        </section>
    )
}

export default MovieList