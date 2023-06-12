import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signIn } = UserAuth()
    const navigate = useNavigate()
    const [ error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            console.log("login ", user?.email)
            navigate('/')
        }
        catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>

                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/2b0fca4f-c15c-4622-9efc-572c4a408c 30/IN-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='w-full fixed px-4 py-24 z-50  '>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            {
                                error? <p className='my-2 py-2 w-full rounded px-2 bg-red-500'> {error.replace('Firebase:', '')}</p>:null
                            }
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-5' >
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 outline-none bg-gray-500 rounded' type="email" placeholder='Email' autoComplete='email' />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 outline-none bg-gray-500 rounded' type="password" placeholder='Password' autoComplete='current-password' />

                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p className='hover:underline'>Need Help?</p>
                                </div>
                                <p className='my-4'><span className='text-gray-600  '>New to Netflix? </span> <Link to='/signup ' className='hover:underline'>Sign up now. </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login