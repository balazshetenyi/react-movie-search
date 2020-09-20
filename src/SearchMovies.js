import React, {useState} from 'react';
import MovieCard from './MovieCard';
const apiKey = process.env.REACT_APP_API_KEY

function MovieSearch() {

    // States
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)
            
        } catch (error) {
            console.log(error)
        }
        console.log(movies)
    }

    return (
        <>
            <form className='form' onSubmit={searchMovies}>
                <label htmlFor='query'>Movie Name</label>
                <input 
                    type='text' 
                    name='query' 
                    placeholder='search movies..'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='button' type='submit'>Search</button>
            </form>

            <div className='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    )
}

export default MovieSearch