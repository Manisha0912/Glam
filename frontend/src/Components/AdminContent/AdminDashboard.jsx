// import React from 'react'

// function AdminDashboard() {
//   return (
//     <div>AdminDashboard</div>
//   )
// }

// export default AdminDashboard

// AdminDashboard.jsx

// import React, { useEffect, useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";




// import axios from "axios";

// import Sidebar from "./Components/Sidebar";
// import Navbar from "./Components/Navbar";
// import Dashboard from "./Pages/Dashboard";
// import AllAppointments from "./Pages/AllAppointments";
// import AddBeautician from "./Pages/AddBeautician";
// import BeauticiansList from "./Pages/BeauticiansList";
// function AdminDashboard() {
//   return (
//     <div className="bg-black min-h-screen text-white">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </div>

//       {/* Sidebar + Content */}
//       <div className="flex pt-20"> {/* pt-16 to push content below navbar */}
//         {/* Sidebar */}
//         <div className="w-64 fixed top-16 left-0 h-full bg-gray-900 z-40">
//           <Sidebar />
//         </div>

//         {/* Page Content */}
//         <div className="flex-1 ml-64 p-4"> {/* ml-64 to leave space for sidebar */}
//           {/* <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/all-appointments" element={<AllAppointments />} />
//             <Route path="/add-beautician" element={<AddBeautician />} />
//             <Route path="/beautician-list" element={<BeauticiansList />} />
//           </Routes> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// 

import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar"; // This should be a custom admin navbar
import Dashboard from "./Pages/Dashboard";
import AllAppointments from "./Pages/AllAppointments";
import AddBeautician from "./Pages/AddBeautician";
import BeauticiansList from "./Pages/BeauticiansList";
import { Routes, Route, Navigate } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Sidebar + Content Section */}
      <div className="flex pt-16"> {/* pt-16 makes space for the fixed navbar */}
        {/* Sidebar - Fixed position below navbar */}
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 z-40">
          <Sidebar />
        </div>
        
        {/* Main Content - Margin to push beside sidebar */}
        <div className="ml-64 w-full p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllAppointments />} />
            <Route path="/add-beautician" element={<AddBeautician />} />
            <Route path="/beautician-list" element={<BeauticiansList />} />
            {/* Redirect any other paths to the dashboard */}
            <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;





