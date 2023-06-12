import React from 'react'
import Movie from './Movie'
const Movies = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie, id) => (
                    <Movie  key={id} movie={movie} />
                ))
            }
        </>
    )
}

export default Movies