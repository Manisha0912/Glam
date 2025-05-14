// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(true);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleLogout = () => {
//     setToken(false);
//     navigate('/login');
//   };

//   return (
//     <div className="w-full flex items-center justify-between text-sm py-1 mb-1 border-b border-gray-700 bg-black text-white px-4">
//       {/* Logo - Left Side */}
//       <div className="flex-shrink-0">
//         <img 
//           onClick={() => navigate('/')}
//           src={assets.logo}
//           alt="Logo" 
//           className="w-32 h-20 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-all duration-300"
//         />
//       </div>

//       {/* Desktop Navigation - Centered */}
//       <ul className="hidden md:flex items-center gap-6 font-medium mx-auto">
//         <NavLink to="/" className="relative hover:text-gray-300 transition-colors duration-300">
//           <li className="py-2 text-base">HOME</li>
//         </NavLink>
//         <NavLink to="/beautician" className="relative hover:text-gray-300 transition-colors duration-300">
//           <li className="py-2 text-base">BEAUTICIANS</li>
//         </NavLink>
//         <NavLink to="/about" className="relative hover:text-gray-300 transition-colors duration-300">
//           <li className="py-2 text-base">ABOUT</li>
//         </NavLink>
//         <NavLink to="/contact" className="relative hover:text-gray-300 transition-colors duration-300">
//           <li className="py-2 text-base">CONTACT</li>
//         </NavLink>
//       </ul>

//       {/* Profile + Buttons - Right Side */}
//       <div className="flex-shrink-0">
//         <div className="flex items-center gap-4">
//           {token ? (
//             <div 
//               className="relative group"
//               onMouseEnter={() => setIsDropdownVisible(true)}
//               onMouseLeave={() => setIsDropdownVisible(false)}
//             >
//               {/* Profile Image and Dropdown Icon */}
//               <div className="flex items-center gap-2 cursor-pointer">
//                 <img 
//                   className="w-10 h-10 rounded-full border"
//                   src={assets.profile_pic} 
//                   alt="Profile"
//                 />
//                 <img 
//                   className="w-2.5" 
//                   src={assets.dropdown_icon} 
//                   alt="Dropdown"
//                 />
//               </div>

//               {/* Dropdown Menu */}
//               <div 
//                 className={`absolute right-0 top-14 z-20 transition-all duration-300 ${
//                   isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
//                 }`}
//               >
//                 <div 
//                   className="bg-stone-100 text-black rounded shadow-lg flex flex-col gap-2 p-4 min-w-48"
//                   onMouseEnter={() => setIsDropdownVisible(true)}
//                 >
//                   <p 
//                     onClick={() => {
//                       navigate('/my-profile');
//                       setIsDropdownVisible(false);
//                     }} 
//                     className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     My Profile
//                   </p>
//                   <p 
//                     onClick={() => {
//                       navigate('/my-appointments');
//                       setIsDropdownVisible(false);
//                     }} 
//                     className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     My Appointments
//                   </p>
//                   <p 
//                     onClick={() => {
//                       handleLogout();
//                       setIsDropdownVisible(false);
//                     }} 
//                     className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate('/login')}
//               className="bg-black text-white px-8 py-3 rounded-full font-light border border-white hover:bg-white hover:text-black transition-colors duration-300"
//             >
//               Create Account
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Icon */}
//       <img 
//         onClick={() => setShowMenu(true)} 
//         className="w-6 md:hidden" 
//         src={assets.menu_icon} 
//         alt="Menu"
//       />
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(true);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleLogout = () => {
//     setToken(false);
//     navigate('/login');
//   };

//   return (
//     <>
//       {/* Main Navbar */}
//       <div className="w-full flex items-center justify-between text-sm py-1 mb-1 border-b border-gray-700 bg-black text-white px-4">
//         {/* Logo - Left Side */}
//         <div className="flex-shrink-0">
//           <img 
//             onClick={() => navigate('/')}
//             src={assets.logo}
//             alt="Logo" 
//             className="w-32 h-20 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-all duration-300"
//           />
//         </div>

//         {/* Desktop Navigation - Centered */}
//         <ul className="hidden md:flex items-center gap-6 font-medium mx-auto">
//           <NavLink to="/" className="relative hover:text-gray-300 transition-colors duration-300">
//             <li className="py-2 text-base">HOME</li>
//           </NavLink>
//           <NavLink to="/beautician" className="relative hover:text-gray-300 transition-colors duration-300">
//             <li className="py-2 text-base">BEAUTICIANS</li>
//           </NavLink>
//           <NavLink to="/about" className="relative hover:text-gray-300 transition-colors duration-300">
//             <li className="py-2 text-base">ABOUT</li>
//           </NavLink>
//           <NavLink to="/contact" className="relative hover:text-gray-300 transition-colors duration-300">
//             <li className="py-2 text-base">CONTACT</li>
//           </NavLink>
//         </ul>

//         {/* Profile + Buttons - Right Side */}
//         <div className="flex-shrink-0 hidden md:block">
//           <div className="flex items-center gap-4">
//             {token ? (
//               <div 
//                 className="relative group"
//                 onMouseEnter={() => setIsDropdownVisible(true)}
//                 onMouseLeave={() => setIsDropdownVisible(false)}
//               >
//                 {/* Profile Image and Dropdown Icon */}
//                 <div className="flex items-center gap-2 cursor-pointer">
//                   <img 
//                     className="w-10 h-10 rounded-full border"
//                     src={assets.profile_pic} 
//                     alt="Profile"
//                   />
//                   <img 
//                     className="w-2.5" 
//                     src={assets.dropdown_icon} 
//                     alt="Dropdown"
//                   />
//                 </div>

//                 {/* Dropdown Menu */}
//                 <div 
//                   className={`absolute right-0 top-14 z-20 transition-all duration-300 ${
//                     isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
//                   }`}
//                 >
//                   <div 
//                     className="bg-stone-100 text-black rounded shadow-lg flex flex-col gap-2 p-4 min-w-48"
//                     onMouseEnter={() => setIsDropdownVisible(true)}
//                   >
//                     <p 
//                       onClick={() => {
//                         navigate('/my-profile');
//                         setIsDropdownVisible(false);
//                       }} 
//                       className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                     >
//                       My Profile
//                     </p>
//                     <p 
//                       onClick={() => {
//                         navigate('/my-appointments');
//                         setIsDropdownVisible(false);
//                       }} 
//                       className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                     >
//                       My Appointments
//                     </p>
//                     <p 
//                       onClick={() => {
//                         handleLogout();
//                         setIsDropdownVisible(false);
//                       }} 
//                       className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
//                     >
//                       Logout
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-black text-white px-8 py-3 rounded-full font-light border border-white hover:bg-white hover:text-black transition-colors duration-300"
//               >
//                 Create Account
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <img 
//           onClick={() => setShowMenu(true)} 
//           className="w-6 md:hidden" 
//           src={assets.menu_icon} 
//           alt="Menu"
//         />
//       </div>

//       {/* Mobile Menu Overlay */}
//       {showMenu && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden flex items-start justify-end">
//           <div className="w-64 h-[80vh] bg-black text-white p-6 shadow-lg overflow-auto rounded-bl-lg">
//             {/* Close Button */}
//             <div 
//               className="absolute top-4 right-4 cursor-pointer"
//               onClick={() => setShowMenu(false)}
//             >
//               <span className="text-2xl text-white">&times;</span>
//             </div>

//             {/* Mobile Profile Section */}
//             {token && (
//               <div className="flex flex-col items-center mb-6">
//                 <img 
//                   className="w-20 h-20 rounded-full border mb-4"
//                   src={assets.profile_pic} 
//                   alt="Profile"
//                 />
//                 <div className="flex flex-col items-center">
//                   <p 
//                     onClick={() => {
//                       navigate('/my-profile');
//                       setShowMenu(false);
//                     }} 
//                     className="cursor-pointer mb-2 hover:text-gray-300"
//                   >
//                     My Profile
//                   </p>
//                   <p 
//                     onClick={() => {
//                       navigate('/my-appointments');
//                       setShowMenu(false);
//                     }} 
//                     className="cursor-pointer mb-2 hover:text-gray-300"
//                   >
//                     My Appointments
//                   </p>
//                   <p 
//                     onClick={() => {
//                       handleLogout();
//                       setShowMenu(false);
//                     }} 
//                     className="cursor-pointer hover:text-gray-300"
//                   >
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* Mobile Navigation Links */}
//             <ul className="flex flex-col gap-4 mt-6">
//               <NavLink 
//                 to="/" 
//                 className="hover:text-gray-300"
//                 onClick={() => setShowMenu(false)}
//               >
//                 <li>HOME</li>
//               </NavLink>
//               <NavLink 
//                 to="/beautician" 
//                 className="hover:text-gray-300"
//                 onClick={() => setShowMenu(false)}
//               >
//                 <li>BEAUTICIANS</li>
//               </NavLink>
//               <NavLink 
//                 to="/about" 
//                 className="hover:text-gray-300"
//                 onClick={() => setShowMenu(false)}
//               >
//                 <li>ABOUT</li>
//               </NavLink>
//               <NavLink 
//                 to="/contact" 
//                 className="hover:text-gray-300"
//                 onClick={() => setShowMenu(false)}
//               >
//                 <li>CONTACT</li>
//               </NavLink>
//             </ul>

//             {/* Mobile Login/Create Account Button */}
//             {!token && (
//               <button
//                 onClick={() => {
//                   navigate('/login');
//                   setShowMenu(false);
//                 }}
//                 className="mt-6 w-full bg-white text-black px-8 py-3 rounded-full font-light border border-black hover:bg-black hover:text-white transition-colors duration-300"
//               >
//                 Create Account
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';


import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState(true);


  const { token, logout } = useContext(AuthContext);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handleLogout = () => {
  //   setToken(false);
  //   navigate('/login');
  // };
  const handleLogout = () => {
    logout();  // call the logout method from context
    navigate('/login');
  };
  
  return (
    <>
      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between text-sm py-1 mb-1 border-b border-gray-700 bg-black text-white px-4">
        {/* Logo - Left Side */}
        <div className="flex-shrink-0">
          <img 
            onClick={() => navigate('/')}
            src={assets.logo}
            alt="Logo" 
            className="w-32 h-20 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex items-center gap-6 font-medium mx-auto">
          <NavLink to="/" className="relative hover:text-gray-300 transition-colors duration-300">
            <li className="py-2 text-base">HOME</li>
          </NavLink>
          <NavLink to="/beautician" className="relative hover:text-gray-300 transition-colors duration-300">
            <li className="py-2 text-base">BEAUTICIANS</li>
          </NavLink>
          <NavLink to="/about" className="relative hover:text-gray-300 transition-colors duration-300">
            <li className="py-2 text-base">ABOUT</li>
          </NavLink>
          <NavLink to="/contact" className="relative hover:text-gray-300 transition-colors duration-300">
            <li className="py-2 text-base">CONTACT</li>
          </NavLink>
        </ul>

        {/* Profile + Buttons - Right Side */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="flex items-center gap-4">
            {token ? (
              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                {/* Profile Image and Dropdown Icon */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <img 
                    className="w-10 h-10 rounded-full border"
                    src={assets.profile_pic} 
                    alt="Profile"
                  />
                  <img 
                    className="w-2.5" 
                    src={assets.dropdown_icon} 
                    alt="Dropdown"
                  />
                </div>

                {/* Dropdown Menu */}
                <div 
                  className={`absolute right-0 top-14 z-20 transition-all duration-300 ${
                    isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div 
                    className="bg-stone-100 text-black rounded shadow-lg flex flex-col gap-2 p-4 min-w-48"
                    onMouseEnter={() => setIsDropdownVisible(true)}
                  >
                    <p 
                      onClick={() => {
                        navigate('/my-profile');
                        setIsDropdownVisible(false);
                      }} 
                      className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
                    >
                      My Profile
                    </p>
                    <p 
                      onClick={() => {
                        navigate('/my-appointments');
                        setIsDropdownVisible(false);
                      }} 
                      className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
                    >
                      My Appointments
                    </p>
                    <p 
                      onClick={() => {
                        handleLogout();
                        setIsDropdownVisible(false);
                      }} 
                      className="cursor-pointer px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-black text-white px-8 py-3 rounded-full font-light border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Create Account
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Section - Profile and Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          {token && (
            <img 
              className="w-10 h-10 rounded-full border"
              src={assets.profile_pic} 
              alt="Profile"
              onClick={() => navigate('/my-profile')}
            />
          )}
          <img 
            onClick={() => setShowMenu(true)} 
            className="w-6" 
            src={assets.menu_icon} 
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden flex items-start justify-end">
          <div className="w-64 h-[80vh] bg-black text-white p-6 shadow-lg overflow-auto rounded-bl-lg">
            {/* Close Button */}
            <div 
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <span className="text-2xl text-white">&times;</span>
            </div>

            {/* Mobile Profile Section */}
            {token && (
              <div className="flex flex-col items-center mb-6">
                <img 
                  className="w-20 h-20 rounded-full border mb-4"
                  src={assets.profile_pic} 
                  alt="Profile"
                />
                <div className="flex flex-col items-center">
                  <p 
                    onClick={() => {
                      navigate('/my-profile');
                      setShowMenu(false);
                    }} 
                    className="cursor-pointer mb-2 hover:text-gray-300"
                  >
                    My Profile
                  </p>
                  <p 
                    onClick={() => {
                      navigate('/my-appointments');
                      setShowMenu(false);
                    }} 
                    className="cursor-pointer mb-2 hover:text-gray-300"
                  >
                    My Appointments
                  </p>
                  <p 
                    onClick={() => {
                      handleLogout();
                      setShowMenu(false);
                    }} 
                    className="cursor-pointer hover:text-gray-300"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-4 mt-6">
              <NavLink 
                to="/" 
                className="hover:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <li>HOME</li>
              </NavLink>
              <NavLink 
                to="/beautician" 
                className="hover:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <li>BEAUTICIANS</li>
              </NavLink>
              <NavLink 
                to="/about" 
                className="hover:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <li>ABOUT</li>
              </NavLink>
              <NavLink 
                to="/contact" 
                className="hover:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <li>CONTACT</li>
              </NavLink>
            </ul>

            {/* Mobile Login/Create Account Button */}
            {!token && (
              <button
                onClick={() => {
                  navigate('/login');
                  setShowMenu(false);
                }}
                className="mt-6 w-full bg-white text-black px-8 py-3 rounded-full font-light border border-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;





