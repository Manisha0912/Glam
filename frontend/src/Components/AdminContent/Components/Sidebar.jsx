// Sidebar.jsx

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { assets } from "../Assets/Assets";



// const Sidebar = () => {
//   return (
//     <div className="w-64 h-full min-h-screen bg-black text-white flex flex-col p-4 pt-5">
//       <NavLink  
//         to='/admin-dashboard' 
//         className={({ isActive }) => 
//           `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
//           ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
//         }
//       >
//         <img src={assets.home_icon} alt="Home" className="w-6 h-6" />
//         <p className="text-sm pt-5">Dashboard</p>
//       </NavLink>

//       <NavLink  
//         to='/all-appointments' 
//         className={({ isActive }) => 
//           `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
//           ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
//         }
//       >
//         <img src={assets.appointment_icon} alt="Bookings" className="w-6 h-6" />
//         <p className="text-sm">Bookings</p>
//       </NavLink>

//       <NavLink  
//         to='/add-beautician' 
//         className={({ isActive }) => 
//           `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
//           ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
//         }
//       >
//         <img src={assets.add_icon} alt="Add" className="w-6 h-6" />
//         <p className="text-sm">Add Beautician</p>
//       </NavLink>

//       <NavLink  
//         to='/beautician-list' 
//         className={({ isActive }) => 
//           `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
//           ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
//         }
//       >
//         <img src={assets.people_icon} alt="List" className="w-6 h-6" />
//         <p className="text-sm">Beautician List</p>
//       </NavLink>
//     </div>
//   )
// }

// export default Sidebar;




import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from "../Assets/Assets";

const Sidebar = () => {
  return (
    <div className="w-64 h-full min-h-screen bg-black text-white flex flex-col p-4 pt-5">
      <NavLink
        to='/admin-dashboard'
        className={({ isActive }) =>
          `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
          ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
        }
      >
        <img src={assets.home_icon} alt="Home" className="w-6 h-6" />
        <p className="text-sm">Dashboard</p>
      </NavLink>

      <NavLink
        to='/admin-dashboard/all-appointments'
        className={({ isActive }) =>
          `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
          ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
        }
      >
        <img src={assets.appointment_icon} alt="Bookings" className="w-6 h-6" />
        <p className="text-sm">Bookings</p>
      </NavLink>

      <NavLink
        to='/admin-dashboard/add-beautician'
        className={({ isActive }) =>
          `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
          ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
        }
      >
        <img src={assets.add_icon} alt="Add" className="w-6 h-6" />
        <p className="text-sm">Add Beautician</p>
      </NavLink>

      <NavLink
        to='/admin-dashboard/beautician-list'
        className={({ isActive }) =>
          `flex items-center gap-4 py-3 px-4 rounded-md hover:bg-gray-800 transition-all duration-300
          ${isActive ? 'bg-gray-800 border-r-4 border-pink-500' : ''}`
        }
      >
        <img src={assets.people_icon} alt="List" className="w-6 h-6" />
        <p className="text-sm">Beautician List</p>
      </NavLink>
    </div>
  )
}

export default Sidebar;