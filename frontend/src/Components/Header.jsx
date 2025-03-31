
import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
return (
    
        
   <div className="mt-10 mx-4  sm:mx-[10%]">
      <div className='flex flex-col md:flex-row flex-wrap  bg-black rounded-lg px-6 md:px-10 1g:px-20'>

    
    
        
      {/* Left Side */}
        
       <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[12vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
                  Choose Your Glam <br/>  Perfect Your Beauty!
       </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
    <img className='w-28 rounded-lg'src={assets.make} alt="" />
       <p className='text-2xl leading-tight'>Step into a world of flawless <br className='hidden sm:block'/>beauty with top-tier services at your fingertips. </p>
        </div>
       <a href="#service" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Your Service<img className='w-3' src={assets.arrow_icon} alt=""/>
           </a>
            </div>
        
   {/* right Side */}   <div className='md:w-1/2 relative'>
        
     <img className=' w-full h-full object-cover rounded-lg' src={assets.makeup}
     alt=""/>
    </div>
       </div>
       </div>
      
  )
 }

export default Header


