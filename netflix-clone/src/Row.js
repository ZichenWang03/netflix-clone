import React , {useState, useEffect} from 'react'
import axios from './axios'
import "./Row.css"

const base__url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    // get tmdb info when row loads
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
    console.table(movies)


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* {row_posters} */}
                {movies.map(movie =>(
                  <img
                  key={movie.id}
                  className="row__poster" 
                  src={`${base__url}${movie.poster_path}`} alt={movie.name}></img>  
                ))}
            </div>
        </div>
    )
}

export default Row