import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate=useNavigate()
  return (
    <div className='flex bg-black rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 py-6 md:py-12 lg:py-14 my-8 md:mx-25 overflow-hidden   sm:mx-[10%]'>
        {/* LEFT */}
<div className='flex-1 py-10 sm:py-10 md:py-16 lg:py-34 lg:pl-5'>
<div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>

<p >Glow up </p>
<p className='mt-4'>With expert makeup artists!</p>
</div>
<button  onClick={()=>{navigate('/login'); scrollTo()}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
</div>



        {/* RIGHT */}
       
<div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
<img className='absolute  w-full h-full bottom-[-45px]  object-cover max-w-md h-[350px] md:h-[450px] lg:h-[430px]' src={assets.Banner} alt=""/>
</div>






    </div>
  )
}

export default Banner