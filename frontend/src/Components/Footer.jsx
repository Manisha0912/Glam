import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    
<div className='md:mx-4 sm:mt-0'>
        <div className=' bg-black w-full flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-12 my-10 mt-40 text-sm pt-5'>
        {/* Left */}
<div className='ml-4 md:ml-8'>
    <img className="mb-4 w-48 h-20 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-all duration-300" src={assets.logo} alt=""/>
    <p className='w-full md:w-2/3 text-white leading-8'>GlamUp – Your Ultimate Beauty Booking App<br/>
GlamUp is a premium beauty appointment <br/> booking app designed to connect users <br/> with top-rated beauticians and makeup <br/> artists. 
</p>
</div>



       {/* Middle */}

<div className='pt-2' >
    <p className='text-xl font-medium mb-5 text-white' text>COMPANY</p>
    <ul className='w-full flex flex-col gap-2 text-white'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Privacy policy</li>

    </ul>
        
        
        
        </div>




       {/* Right */}

<div className='pt-2'>
    <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-2 text-white'>
        <li>+91 9849730555</li>
        <li>glamup@gmail.com</li>
    </ul>
</div>

    </div>
    <div>
        <hr/>
        {/* COPYRIGHT */}
        <p className='py-5 text-sm text-center'>Copyright 2025@Glamup-All Rights Reserved</p>

    </div>
    </div>
  )
}

export default Footer