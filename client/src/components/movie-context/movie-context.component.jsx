import React, {useState, useEffect, createContext} from 'react'
import Scream from '../../images/Scream.jpg'
import Shining from '../../images/Shining.jpg'
import Hostel from '../../images/Hostel.jpg'
import Halloween from '../../images/Halloween.jpg'
import axios from 'axios'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        // {
        //     title: "Scream",
        //     image: Scream,
        //     rating: 0
        // },
        // {
        //     title: "The Shining",
        //     image: Shining,
        //     rating: 0
        // },
        // {
        //     title: "Hostel",
        //     image: Hostel,
        //     rating: 0
        // },
        // {
        //     title: "Halloween",
        //     image: Halloween,
        //     rating: 0
        // }
    ])

    useEffect(() => {
        axios.get("http://localhost:4000/movies")
        
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    })

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
