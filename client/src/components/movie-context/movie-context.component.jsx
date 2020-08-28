import React, {useState, createContext} from 'react'
import Scream from '../../images/Scream.jpg'
import Shining from '../../images/Shining.jpg'
import Hostel from '../../images/Hostel.jpg'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            title: "Scream",
            image: Scream,
            rating: 0
        },
        {
            title: "The Shining",
            image: Shining,
            rating: 0
        },
        {
            title: "Hostel",
            image: Hostel,
            rating: 0
        }
    ])

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
