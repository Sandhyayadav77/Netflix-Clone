import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from "react-icons/ai";
import { db } from '../firebase'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'


const SavedShows = () => {
    const [movie, setMovie] = useState([])

    const { user } = UserAuth();
    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft -= 500
    }
    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft += 500
    }

    useEffect(() => {
        const movieRef = doc(db, 'users', `${user?.email}`)
        onSnapshot(movieRef, doc => {
            setMovie(doc.data()?.savedShows)
            console.log("movie", movie)
        });
    }, [user?.email])

    const movieReference = doc(db, 'users', `${user?.email}`)
    const deleteMovie = async (movieId) => {
        try {
            const result = movie.filter((movieItem) => movieItem.id !== movieId );
           await updateDoc(movieReference, {
                savedShows: result
            })
            } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h1 className='text-white p-4 md:text-xl font-bold '>My Shows</h1>
            <div className='relative flex items-center '>
                <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full  opacity-50 z-10 absolute left-0 hover:opacity-100' />
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {
                        movie.map((item, id) => (
                            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative'>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.image_path}`} alt={item.title} />
                                <div className='absolute top-0 left-0 h-full w-full  text-white opacity-0 hover:opacity-100 hover:bg-black/80'>
                                    <p className='text-[8px] md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normalspace-normal'>{item.title}</p>
                                </div>
                                <p onClick={() => deleteMovie(item.id)} className='absolute  right-0 top-0 p-4'>
                                    <AiOutlineClose />
                                </p>                            </div>
                        ))
                    }
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white rounded-full opacity-50 z-10 absolute right-0 hover:opacity-100' />
            </div>
        </>)
}

export default SavedShows