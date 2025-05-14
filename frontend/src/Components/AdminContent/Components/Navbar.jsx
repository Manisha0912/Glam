// Navbar.jsx

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext'; // Adjust path based on your file structure
import { assets } from "../Assets/Assets"; // Adjust path based on your file structure

const Navbar = () => {
  const navigate = useNavigate()
  const {token,settoken}=useContext(AuthContext)
  const logout  = ()=>{
    navigate('/')
    token && settoken('')
    token && localStorage.removeItem('token')
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center bg-black text-white px-8 py-4 shadow-lg">
      {/* Logo & Role */}
      <div className="flex items-center gap-4">
        <img 
          src={assets.admin_logo} 
          alt="Admin Logo" 
          className="w-28 h-16 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-all duration-300"/>
        <p className="px-3 py-1 bg-gray-800 rounded-full border border-gray-200">
          {token ? 'Admin' : 'Beautician'}
        </p>
      </div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-md transition duration-300 shadow-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;






