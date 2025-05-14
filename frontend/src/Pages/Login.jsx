// import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../Context/AppContext'

// const Login = () => {

//     const [state, setState] = useState('Sign Up')
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const navigate = useNavigate()
//     const { token, setToken } = useContext(AppContext)

//     // Dummy function to handle form submission
//     const onSubmitHandler = (event) => {
//         event.preventDefault()

//         // Simulate token storage on successful login/signup
//         if (state === 'Sign Up') {
//             console.log('Sign Up:', { name, email, password })
//             setToken('dummyToken123')
//         } else {
//             console.log('Login:', { email, password })
//             setToken('dummyToken123')
//         }

//         // Simulate navigation after login/signup
//         navigate('/')
//     }

//     useEffect(() => {
//         if (token) {
//             navigate('/')
//         }
//     }, [token, navigate])

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-black text-white">

//             <form onSubmit={onSubmitHandler} className='w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg'>

//                 <p className='text-3xl font-bold mb-4 text-center'>
//                     {state === 'Sign Up' ? 'Create Account' : 'Login'}
//                 </p>

//                 <p className='text-center text-gray-400 mb-6'>
//                     Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
//                 </p>

//                 {/* Full Name for Sign Up */}
//                 {state === 'Sign Up' && (
//                     <div className='mb-4'>
//                         <label className='block text-gray-300 mb-1'>Full Name</label>
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
//                             type="text"
//                             required
//                         />
//                     </div>
//                 )}

//                 {/* Email */}
//                 <div className='mb-4'>
//                     <label className='block text-gray-300 mb-1'>Email</label>
//                     <input
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
//                         type="email"
//                         required
//                     />
//                 </div>

//                 {/* Password */}
//                 <div className='mb-6'>
//                     <label className='block text-gray-300 mb-1'>Password</label>
//                     <input
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         className='w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
//                         type="password"
//                         required
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all'>
//                     {state === 'Sign Up' ? 'Create Account' : 'Login'}
//                 </button>

//                 {/* Toggle Between Login & Sign Up */}
//                 <div className='text-center mt-4'>
//                     {state === 'Sign Up' ? (
//                         <p>Already have an account?{' '}
//                             <span onClick={() => setState('Login')} className='text-blue-400 underline cursor-pointer'>
//                                 Login here
//                             </span>
//                         </p>
//                     ) : (
//                         <p>Don't have an account?{' '}
//                             <span onClick={() => setState('Sign Up')} className='text-blue-400 underline cursor-pointer'>
//                                 Sign up here
//                             </span>
//                         </p>
//                     )}
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login





// import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../Context/AuthContext'
// import axios from 'axios'

// const Login = () => {
//   const [state, setState] = useState('Sign Up')
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [phone, setPhone] = useState('')
//   const [gender, setGender] = useState('')
//   const [dob, setDob] = useState('')
//   const [address, setAddress] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState('')

//   const navigate = useNavigate()
//   const { login, user, token } = useContext(AuthContext) || {}

//   const onSubmitHandler = async (event) => {
//     event.preventDefault()
//     setIsLoading(true)
//     setError('')

//     try {
//       if (state === 'Sign Up') {
//         const data = {
//           name,
//           email,
//           password,
//           role: 'customer',
//           phone,
//           gender,
//           dob,
//           address: { full: address }
//         }

//         await axios.post('http://localhost:8000/api/admin/userregister', data)

//         const loginRes = await axios.post('http://localhost:8000/api/admin/userlogin', { email, password })
//         login && login(loginRes.data.token, loginRes.data.user)
//       } else {
//         const res = await axios.post('http://localhost:8000/api/admin/userlogin', { email, password })
//         login && login(res.data.token, res.data.user)
//       }
//     } catch (err) {
//       console.error("Login error details:", err.response?.data)
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message)
//       } else {
//         setError('Invalid credentials or server error')
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (user && token) {
//       if (user.role === 'customer') {
//         navigate('/my-profile')
//       } else if (user.role === 'beautician') {
//         navigate('/beautician-dashboard')
//       } else if (user.role === 'admin') {
//         navigate('/admin-dashboard')
//       }
//     }
//   }, [user, token, navigate])

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-black text-white">
//       <form onSubmit={onSubmitHandler} className='w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg'>
//         <p className='text-3xl font-bold mb-4 text-center'>
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </p>
//         <p className='text-center text-gray-400 mb-6'>
//           Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
//         </p>

//         {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

//         {state === 'Sign Up' && (
//           <>
//             <div className='mb-4'>
//               <label className='block text-gray-300 mb-1'>Full Name</label>
//               <input onChange={(e) => setName(e.target.value)} value={name} type='text' required className='input' />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-gray-300 mb-1'>Phone</label>
//               <input onChange={(e) => setPhone(e.target.value)} value={phone} type='text' className='input' />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-gray-300 mb-1'>Gender</label>
//               <input onChange={(e) => setGender(e.target.value)} value={gender} type='text' className='input' />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-gray-300 mb-1'>Date of Birth</label>
//               <input onChange={(e) => setDob(e.target.value)} value={dob} type='date' className='input' />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-gray-300 mb-1'>Address</label>
//               <textarea onChange={(e) => setAddress(e.target.value)} value={address} className='input' />
//             </div>
//           </>
//         )}

//         <div className='mb-4'>
//           <label className='block text-gray-300 mb-1'>Email</label>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required className='input text-black' />
//         </div>
//         <div className='mb-6'>
//           <label className='block text-gray-300 mb-1'>Password</label>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required className='input text-black' />
//         </div>
//         <button disabled={isLoading} className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all'>
//           {isLoading ? 'Processing...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </button>

//         <div className='text-center mt-4'>
//           {state === 'Sign Up' ? (
//             <p>Already have an account? <span onClick={() => setState('Login')} className='text-blue-400 underline cursor-pointer'>Login here</span></p>
//           ) : (
//             <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-blue-400 underline cursor-pointer'>Sign up here</span></p>
//           )}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login








import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('customer')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { login, user, token } = useContext(AuthContext) || {}

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (state === 'Sign Up') {
        const data = {
          name,
          email,
          password,
          role
        }

        await axios.post('http://localhost:8000/api/admin/userregister', data)

        const loginRes = await axios.post('http://localhost:8000/api/admin/userlogin', { email, password })
        login && login(loginRes.data.token, loginRes.data.user)
      } else {
        const res = await axios.post('http://localhost:8000/api/admin/userlogin', { email, password })
        login && login(res.data.token, res.data.user)
      }
    } catch (err) {
      console.error("Login error details:", err.response?.data)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Invalid credentials or server error')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (user && token) {
      if (user.role === 'customer') {
        navigate('/my-profile')
      } else if (user.role === 'beautician') {
        navigate('/beautician-dashboard')
      } else if (user.role === 'admin') {
        navigate('/admin-dashboard')
      }
    }
  }, [user, token, navigate])

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form onSubmit={onSubmitHandler} className='w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg'>
        <p className='text-3xl font-bold mb-4 text-center'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className='text-center text-gray-400 mb-6'>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

        {state === 'Sign Up' && (
          <div className='mb-4'>
            <label className='block text-gray-300 mb-1'>Username</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' required className='input w-full p-2 rounded text-black' />
          </div>
        )}

        <div className='mb-4'>
          <label className='block text-gray-300 mb-1'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required className='input w-full p-2 rounded text-black' />
        </div>
        
        <div className='mb-6'>
          <label className='block text-gray-300 mb-1'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required className='input w-full p-2 rounded text-black' />
        </div>

        {state === 'Sign Up' && (
          <div className='mb-6'>
            <label className='block text-gray-300 mb-1 text-sm'>Select Role</label>
            <select 
              onChange={(e) => setRole(e.target.value)} 
              value={role} 
              className='input w-full p-1 rounded text-black text-sm'
              required
            >
              <option value="customer">Customer</option>
              <option value="beautician">Beautician</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}
        
        <button disabled={isLoading} className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all'>
          {isLoading ? 'Processing...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='text-center mt-4'>
          {state === 'Sign Up' ? (
            <p>Already have an account? <span onClick={() => setState('Login')} className='text-blue-400 underline cursor-pointer'>Login here</span></p>
          ) : (
            <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-blue-400 underline cursor-pointer'>Sign up here</span></p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login