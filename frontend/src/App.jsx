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
//           <Route path='/appointment/:beauticianId' element={<Appointment/>}/>
//         </Routes>
//         <Footer/>
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Beautician from './Pages/Beautician'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/beautician' element={<Beautician/>}/>
          <Route path='/beautician/:service' element={<Beautician/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
          <Route path='/my-appointments' element={<MyAppointments/>}/>
          <Route path='/appointment/:artistId' element={<Appointment/>}/> {/* Changed to artistId */}
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App