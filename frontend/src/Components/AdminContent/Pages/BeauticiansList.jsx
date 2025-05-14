import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AdminContext } from '../../../Context/AdminContext';
// import { AuthContext } from '../../../Context/AuthContext'; // Adjust path based on your file structure
const BeauticiansList = () => {
    const { beauticians,  token, getAllBeauticians,changeAvailability } = useContext(AdminContext);
   console.log(token)
    useEffect(() => {
      if (token) {
        getAllBeauticians();
      }
    }, [token]);
  
    return (
      <div className=' max-h-[90vh] overflow-y-scroll bg-black  '> 
      <h1 className="text-4xl font-bold text-center text-white mt-2 mb-2">All Beauticians</h1>
      <p className="text-center text-xl mb-8 text-white">Explore and manage beauticians in your platform</p>
{/* 
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6 justify-center'> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>

        {beauticians.map((item, index) => (
          <div key={index} className='border border-indigo-200 rounded-xl w-56 overflow-hidden cursor-pointer group bg-black'>
             {/* <div className="w-full h-54 overflow-hidden">
            <img className='group-hover:bg-primary  object-cover transition-all duration-500' src={item.image} alt="" */}
            <div className='overflow-hidden relative pt-[100%]'>
  <img
    src={item.image}
    alt={item.name}
    className='absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105'

             />
            </div>
            {/* <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' src={item.image} alt=""/> */}
            <div className='p-4'>
              <p className='text-white text-lg font-medium'>{item.name}</p>
              <p className='text-gray-300 text-sm'>{item.service}</p>
              <div className='mt-2 flex items-center gap-1 text-sm text-white'>
                <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BeauticiansList
  //     <div className='m-5 max-h-[90vh] overflow-y-scroll bg-black pt-5 pl-5 pr-5 pb-5'> 
  //     <h1 className="text-4xl font-bold text-center text-white mt-2 mb-2">All Beauticians</h1>
  //     <p className="text-center text-xl mb-8 text-white">Explore and manage beauticians in your platform</p>
  //     <div className='m-5 max-h-[90vh] overflow-y-scroll'>
  //       <h1 className='text-lg font-medium'>All Beauticians</h1>
  //       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
  //         {beauticians.map((item, index) => (
  //           <div
  //             className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group'
  //             key={index}
  //           >
  //             <img
  //               className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-full h-40 object-cover'
  //               src={item.image}
  //               alt={item.name}
  //             />
  //             <div className='p-4'>
  //               <p className=' text-lg font-medium'>{item.name}</p>
  //               <p className=' text-sm'>{item.service}</p>
  //               <div className='mt-2 flex items-center gap-1 text-sm'>
  //                 <input
  //                   onChange={() => changeAvailability(item._id)}
  //                   type='checkbox'
  //                   checked={item.available}
  //                 />
  //                 <p>Available</p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default BeauticiansList;