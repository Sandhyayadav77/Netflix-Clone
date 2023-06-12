import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Rows = ({ title, fetchURL , rowId}) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((response) => setMovies(response.data.results))
    }, [fetchURL])
    // console.log(movies)
    const slideLeft=()=>{
        const slider = document.getElementById('slider'+rowId)
        slider.scrollLeft -=500
    }
    const slideRight=()=>{
        const slider = document.getElementById('slider'+rowId)
        slider.scrollLeft +=500
    }
    return (
        <>
            <h1 className='text-white p-4 md:text-xl font-bold '>{title}</h1>
            <div className='relative flex items-center '>
                <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full  opacity-50 z-10 absolute left-0 hover:opacity-100'/>
                <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                    <Movies movies={movies} />

                </div>
                <MdChevronRight onClick={slideRight} className='bg-white rounded-full opacity-50 z-10 absolute right-0 hover:opacity-100'/>
            </div>

        </>
    )
}
export default Rows