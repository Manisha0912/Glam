import React ,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../Context/AppContext'

const MakeupArtists = () => {

  const navigate=useNavigate()
  const {beautician}=useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10  '>
    <h1 className='text-5xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center px-4 font-medium'>Top artists offering premium makeup services across Telangana!</h1>
    <p className='sm:w-1/3 text-center text-xl'>"Bringing out the best in you with stunning transformations and professional artistry!"</p>
    <div className='bg-black w-full bg-black h-full grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 gap-y-10 px-3 py-6 sm:px-6 rounded-2xl'>
      {beautician.slice(0,9).map((item,index)=>(
      <div onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-black-200 rounded-xl overflow-hidden cursor-pointer hover:transition-all duration-500 ' key={index}   >

<div className='overflow-hidden transform hover:scale-105 hover:translate-y-2 transition-transform duration-300'>
<div className="h-64 overflow-hidden"> 
      <img className='bg-black-50 h-full max-h-[300px] w-full object-cover' src={item.image} alt=""/>
      </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
      <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
      </div>
     <p className='text-white text-1g font-medium'>{item.name}</p>
     <p className='text-white text-sm'>{item.service}</p>
      </div>
      </div>
      
    ))}
    </div>
    <button onClick={()=>{navigate('/beautician'); scrollTo(0,0)}} className='bg-black text-white px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default MakeupArtists