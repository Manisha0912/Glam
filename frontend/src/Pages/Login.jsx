import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Login = () => {

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { token, setToken } = useContext(AppContext)

    // Dummy function to handle form submission
    const onSubmitHandler = (event) => {
        event.preventDefault()

        // Simulate token storage on successful login/signup
        if (state === 'Sign Up') {
            console.log('Sign Up:', { name, email, password })
            setToken('dummyToken123')
        } else {
            console.log('Login:', { email, password })
            setToken('dummyToken123')
        }

        // Simulate navigation after login/signup
        navigate('/')
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">

            <form onSubmit={onSubmitHandler} className='w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg'>

                <p className='text-3xl font-bold mb-4 text-center'>
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </p>

                <p className='text-center text-gray-400 mb-6'>
                    Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
                </p>

                {/* Full Name for Sign Up */}
                {state === 'Sign Up' && (
                    <div className='mb-4'>
                        <label className='block text-gray-300 mb-1'>Full Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            required
                        />
                    </div>
                )}

                {/* Email */}
                <div className='mb-4'>
                    <label className='block text-gray-300 mb-1'>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="email"
                        required
                    />
                </div>

                {/* Password */}
                <div className='mb-6'>
                    <label className='block text-gray-300 mb-1'>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="password"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all'>
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                {/* Toggle Between Login & Sign Up */}
                <div className='text-center mt-4'>
                    {state === 'Sign Up' ? (
                        <p>Already have an account?{' '}
                            <span onClick={() => setState('Login')} className='text-blue-400 underline cursor-pointer'>
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p>Don't have an account?{' '}
                            <span onClick={() => setState('Sign Up')} className='text-blue-400 underline cursor-pointer'>
                                Sign up here
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Login
