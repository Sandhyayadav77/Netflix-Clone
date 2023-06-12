import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import Requests from '../Requests';

const Home = () => {
    return (
        <>
        <Main/>
        <Rows  rowId='1' title= 'Upcoming' fetchURL= {Requests.requestUpcoming}/>
        <Rows rowId='2'  title= 'Popular' fetchURL= {Requests.requestPopular}/>
        <Rows rowId='3'  title= 'Trending' fetchURL= {Requests.requestTrending}/>
        <Rows rowId='4'  title= 'Top Rated' fetchURL= {Requests.requestTopRated}/>
        <Rows rowId='5'  title= 'Horror' fetchURL= {Requests.requestHorror}/>
    
        </>
    )
}

export default Home