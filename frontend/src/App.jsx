// import React from 'react'
// import {Route, Routes} from 'react-router-dom'
// import Home from './Pages/Home'
// import Beautician from './Pages/Beautician'
// import Login from './Pages/Login'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import MyProfile from './Pages/MyProfile'
// import MyAppointments from './Pages/MyAppointments'
// import Appointment from './Pages/Appointment'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import AdminRoutes from './admin/AdminRoutes'

// const App = () => {
//   return (
//     <div className='w-full'>
//       <Navbar/>
//       <div className='w-full'>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/beautician' element={<Beautician/>}/>
//           <Route path='/beautician/:service' element={<Beautician/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/my-profile' element={<MyProfile/>}/>
//           <Route path='/my-appointments' element={<MyAppointments/>}/>
//           <Route path='/appointment/:artistId' element={<Appointment/>}/> {/* Changed to artistId */}

//           <Route path='/admin/*' element={<AdminRoutes />} />
// <Route path='/add-beautician' element={<AdminRoutes />} />
// <Route path='/beautician-list' element={<AdminRoutes />} />
// <Route path='/all-appointments' element={<AdminRoutes />} />

//         </Routes>
//         <Footer/>
//       </div>
//     </div>
//   )
// }

// export default App

// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import MyProfile from "./Pages/MyProfile";
// import MyAppointments from "./Pages/MyAppointments";
// import Appointment from "./Pages/Appointment";
// import Beautician from "./Pages/Beautician";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import AdminDashboard from "./Components/AdminContent/AdminDashboard";
// import BeauticianDashboard from "./Components/BeauticianContent/BeaticianDash";
// import Unauthorized from "./Components/Unauthorized";
// import "./App.css";

// import Dashboard from "./Components/AdminContent/Pages/Dashboard";
// import AllAppointments from "./Components/AdminContent/Pages/AllAppointments";
// import AddBeautician from "./Components/AdminContent/Pages/AddBeautician";
// import BeauticiansList from "./Components/AdminContent/Pages/BeauticiansList";

// const App = () => {
//   return (
//     <Router>
//       <div className="w-full">
//         <Navbar />
//         <div className="w-full">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/unauthorized" element={<Unauthorized />} />

//             <Route
//               path="/my-profile"
//               element={
//                 <ProtectedRoute allowedRoles={["customer"]}>
//                   <MyProfile />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/my-appointments"
//               element={
//                 <ProtectedRoute allowedRoles={["customer"]}>
//                   <MyAppointments />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/appointment/:artistId"
//               element={
//                 <ProtectedRoute allowedRoles={["customer"]}>
//                   <Appointment />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/beautician-dashboard"
//               element={
//                 <ProtectedRoute allowedRoles={["beautician"]}>
//                   <BeauticianDashboard />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/admin-dashboard"
//               element={
//                 <ProtectedRoute allowedRoles={["admin"]}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               }
//             />

//             <Route path="/beautician" element={<Beautician />} />
//             {/* <Route path='/beautician/:service' element={<Beautician />} /> */}


// {/* <Navbar/> */}
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/all-appointments" element={<AllAppointments />} />
//             <Route path="/add-beautician" element={<AddBeautician />} />
//             <Route path="/beautician-list" element={<BeauticiansList />} />
//             {/* Redirect any other paths to the dashboard */}
//             {/* <Route
//               path="*"
//               element={<Navigate to="/admin-dashboard/*" replace />}
//             /> */}
//           </Routes>
//           {/* <Footer /> */}
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;









// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import MyProfile from "./Pages/MyProfile";
// import MyAppointments from "./Pages/MyAppointments";
// import Appointment from "./Pages/Appointment";
// import Beautician from "./Pages/Beautician";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import AdminDashboard from "./Components/AdminContent/AdminDashboard";
// import BeauticianDashboard from "./Components/BeauticianContent/BeaticianDash";
// import Unauthorized from "./Components/Unauthorized";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="w-full">
//         {/* The main navbar should only appear on non-admin routes */}
//         <Routes>
//           {/* Regular Routes - with global Navbar */}
//           <Route path="/" element={
//             <>
//               <Navbar />
//               <Home />
//               <Footer />
//             </>
//           } />
//           <Route path="/login" element={
//             <>
//               <Navbar />
//               <Login />
//               <Footer />
//             </>
//           } />
//           <Route path="/about" element={
//             <>
//               <Navbar />
//               <About />
//               <Footer />
//             </>
//           } />
//           <Route path="/contact" element={
//             <>
//               <Navbar />
//               <Contact />
//               <Footer />
//             </>
//           } />
//           <Route path="/unauthorized" element={
//             <>
//               <Navbar />
//               <Unauthorized />
//               <Footer />
//             </>
//           } />
//           <Route path="/my-profile" element={
//             <>
//               <Navbar />
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <MyProfile />
//               </ProtectedRoute>
//               <Footer />
//             </>
//           } />
//           <Route path="/my-appointments" element={
//             <>
//               <Navbar />
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <MyAppointments />
//               </ProtectedRoute>
//               <Footer />
//             </>
//           } />
//           <Route path="/appointment/:artistId" element={
//             <>
//               <Navbar />
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <Appointment />
//               </ProtectedRoute>
//               <Footer />
//             </>
//           } />
//           <Route path="/beautician" element={
//             <>
//               <Navbar />
//               <Beautician />
//               <Footer />
//             </>
//           } />
//           <Route path="/beautician-dashboard" element={
//             <ProtectedRoute allowedRoles={["beautician"]}>
//               <BeauticianDashboard />
//             </ProtectedRoute>
//           } />

//           {/* Admin Dashboard with nested routes - admin navbar will be inside AdminDashboard */}
//           <Route path="/admin-dashboard/*" element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } />

//           {/* Redirect admin pages to the proper nested route */}
//           <Route path="/all-appointments" element={<Navigate to="/admin-dashboard/all-appointments" replace />} />
//           <Route path="/add-beautician" element={<Navigate to="/admin-dashboard/add-beautician" replace />} />
//           <Route path="/beautician-list" element={<Navigate to="/admin-dashboard/beautician-list" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import MyProfile from "./Pages/MyProfile";
// import MyAppointments from "./Pages/MyAppointments";
// import Appointment from "./Pages/Appointment";
// import Beautician from "./Pages/Beautician";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import AdminDashboard from "./Components/AdminContent/AdminDashboard";
// import BeauticianDashboard from "./Components/BeauticianContent/BeaticianDash";
// import Unauthorized from "./Components/Unauthorized";
// import "./App.css";

// const StandardLayout = ({ children }) => (
//   <>
//     <Navbar />
//     <div className="min-h-screen ">
//       {children}
//     </div>
//     <Footer />
//   </>
// );

// const App = () => {
//   return (
  
//     <Router>
//       <Routes>
//         {/* Admin Dashboard - with its own layout */}
//         <Route 
//           path="/admin-dashboard/*" 
//           element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } 
//         />
        
//         {/* Beautician Dashboard - with its own layout */}
//         <Route 
//           path="/beautician-dashboard/*" 
//           element={
//             <ProtectedRoute allowedRoles={["beautician"]}>
//               <BeauticianDashboard />
//             </ProtectedRoute>
//           } 
//         />
        
//         {/* Regular Routes - with standard layout */}
//         <Route path="/" element={<StandardLayout><Home /></StandardLayout>} />
//         <Route path="/login" element={<StandardLayout><Login /></StandardLayout>} />
//         <Route path="/about" element={<StandardLayout><About /></StandardLayout>} />
//         <Route path="/contact" element={<StandardLayout><Contact /></StandardLayout>} />
//         <Route path="/unauthorized" element={<StandardLayout><Unauthorized /></StandardLayout>} />
        
//         <Route 
//           path="/my-profile" 
//           element={
//             <StandardLayout>
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <MyProfile />
//               </ProtectedRoute>
//             </StandardLayout>
//           } 
//         />
        
//         <Route 
//           path="/my-appointments" 
//           element={
//             <StandardLayout>
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <MyAppointments />
//               </ProtectedRoute>
//             </StandardLayout>
//           } 
//         />
        
//         <Route 
//           path="/appointment/:artistId" 
//           element={
//             <StandardLayout>
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <Appointment />
//               </ProtectedRoute>
//             </StandardLayout>
//           } 
//         />
        
//         <Route path="/beautician" element={<StandardLayout><Beautician /></StandardLayout>} />
        
//         {/* Redirect admin pages to the proper nested route */}
//         <Route path="/all-appointments" element={<Navigate to="/admin-dashboard/all-appointments" replace />} />
//         <Route path="/add-beautician" element={<Navigate to="/admin-dashboard/add-beautician" replace />} />
//         <Route path="/beautician-list" element={<Navigate to="/admin-dashboard/beautician-list" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./Pages/MyProfile";
import MyAppointments from "./Pages/MyAppointments";
import Appointment from "./Pages/Appointment";
import Beautician from "./Pages/Beautician";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminDashboard from "./Components/AdminContent/AdminDashboard";
import BeauticianDashboard from "./Components/BeauticianContent/BeaticianDash";
import Unauthorized from "./Components/Unauthorized";
import "./App.css";

// Layout component for pages that should have standard navigation and footer
const StandardLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="min-h-screen ">
      {children}
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      {/* Toast container for notifications - positioned at the top right of the screen */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Router>
        <Routes>
          {/* Admin Dashboard - with its own layout */}
          <Route
            path="/admin-dashboard/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Beautician Dashboard - with its own layout */}
          <Route
            path="/beautician-dashboard/*"
            element={
              <ProtectedRoute allowedRoles={["beautician"]}>
                <BeauticianDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Regular Routes - with standard layout */}
          <Route path="/" element={<StandardLayout><Home /></StandardLayout>} />
          <Route path="/login" element={<StandardLayout><Login /></StandardLayout>} />
          <Route path="/about" element={<StandardLayout><About /></StandardLayout>} />
          <Route path="/contact" element={<StandardLayout><Contact /></StandardLayout>} />
          <Route path="/unauthorized" element={<StandardLayout><Unauthorized /></StandardLayout>} />
          
          <Route
            path="/my-profile"
            element={
              <StandardLayout>
                <ProtectedRoute allowedRoles={["customer"]}>
                  <MyProfile />
                </ProtectedRoute>
              </StandardLayout>
            }
          />
          
          <Route
            path="/my-appointments"
            element={
              <StandardLayout>
                <ProtectedRoute allowedRoles={["customer"]}>
                  <MyAppointments />
                </ProtectedRoute>
              </StandardLayout>
            }
          />
          
          <Route
            path="/appointment/:artistId"
            element={
              <StandardLayout>
                <ProtectedRoute allowedRoles={["customer"]}>
                  <Appointment />
                </ProtectedRoute>
              </StandardLayout>
            }
          />
          
          <Route path="/beautician" element={<StandardLayout><Beautician /></StandardLayout>} />
          
          {/* Redirect admin pages to the proper nested route */}
          <Route path="/all-appointments" element={<Navigate to="/admin-dashboard/all-appointments" replace />} />
          <Route path="/add-beautician" element={<Navigate to="/admin-dashboard/add-beautician" replace />} />
          <Route path="/beautician-list" element={<Navigate to="/admin-dashboard/beautician-list" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;