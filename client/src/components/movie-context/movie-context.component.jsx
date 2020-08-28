import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/movies")
        
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
