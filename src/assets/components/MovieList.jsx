import React, { useEffect, useState } from 'react'
import './movieList.css'
import MovieCard from './MovieCard'
import FIlterMovies from './FIlterMovies'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [allMoviesFiltered, setAllMoviesFiltered] = useState([])
    const [givingRating,setRating] = useState(0)
    const [loading, setLoading] = useState(true)    
    useEffect(() => {
        fetchmovies()
    }, [])

    const fetchmovies = async () => {
        const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await res.json();
        setMovies(data.results);
        setAllMoviesFiltered(data.results);
        setLoading(false)
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
                   <FIlterMovies givingRating={givingRating} onRatingButtonClick={handleFilter} ratings={[6,7,8]}/>
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
                {loading? (<p className='noMovies'>Loading...</p>) : (  movies.length > 0 ? (movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))):(<p className='noMovies'>No movies found above this rating!</p>) ) }
              
            </div>
        </section>
        
        
    )
}

export default MovieList