import React from 'react'
import { UserAuth } from '../context/AuthContext'
import SavedShows from '../components/SavedShows'


const Account = () => {
  const { user } = UserAuth()
  return (<>
    <div className='w-full text-white '>
      {/* <div className='text-3xl text-white'>Account</div> */}

      <img className=' absolute w-full h-[400px]  object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/2b0fca4f-c15c-4622-9efc-572c4a408c30/IN-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
      <div className='w-full h-[600px] mx-auto fixed left-0 top-0 bg-black/60 '></div>
      <div className='absolute top-[300px] w-full mx-auto text-center px-4 py-3 my-10 text-3xl  font-sans bg-red-600 rounded z-10' >
        {
          user?.email ? <h1> Hello {user?.email}</h1> : <h1>No Such User</h1>
        }</div>
      <div className='top-[75%] absolute'>
        <SavedShows />
      </div>
    </div>

  </>
  )
}

export default Account