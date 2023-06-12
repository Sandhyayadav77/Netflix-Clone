import React, { useState } from 'react'
import { FaHeart, FaRegHeart, faHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase';
import { updateDoc, doc, arrayUnion } from 'firebase/firestore'

const Movie = ({ movie }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieReference = doc(db, 'users', `${user?.email}`)

    const savedMovies = async () => {
        if (user) {
            setLike(true)
            setSaved(true)
            await updateDoc(movieReference, {
                savedShows: arrayUnion(
                    {
                        id: movie.id,
                        title: movie.title,
                        image_path: movie.backdrop_path
                    }
                )
            })
        } else {
            alert("Please login to save a movie")
        }
    }

    return (
        <>

            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                <div className='absolute top-0 left-0 h-full w-full  text-white opacity-0 hover:opacity-100 hover:bg-black/80'>
                    <p className='text-[8px] md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normalspace-normal'>{movie.title}</p>
                    <p onClick={savedMovies}>

                        {like ? <FaHeart className='absolute top-4 left-4' /> : <FaRegHeart className='absolute top-4 left-4' />}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Movie