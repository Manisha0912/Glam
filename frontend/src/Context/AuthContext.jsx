// src/Context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  

//   const navigate = useNavigate()

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    const savedToken = localStorage.getItem('token')
    if (savedUser && savedToken) {
      setUser(savedUser)
      setToken(savedToken)
    }
  
  }, [])

  const login = (token, user) => {
    setUser(user)
    setToken(token)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    // navigate('/login')
  }
const backendUrl=import.meta.env.VITE_BACKEND_URL
const [beauticians,setBeauticians]=useState([])

const value={
  beauticians
}

const getBeauticiansData=async ()=>{
  try{
const {data}=await axios.get(backendUrl + '/api/beautician/list')
if (data.success){
setBeauticians(data.beauticians)
}
  }
  catch(error){
console.log(error)
toast.error(error.message)
  }
}

useEffect(()=>{
  getBeauticiansData()
},[])
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext };
