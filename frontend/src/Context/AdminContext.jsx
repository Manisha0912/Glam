// import { createContext } from "react";
// // import { beautician } from "../assets/assets";

// export const AdminContext = createContext();
// const AdminContextProvider = (props) => {
//   const value = {
//     // beautician,
//   };

//   return (
//     <AdminContext.Provider value={value}>{props.children}</AdminContext.Provider>
//   );
// };

// export default AdminContextProvider;
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { beautician } from "../assets/assets";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [beauticians,setBeauticians]=useState([])
  const backendUrl = "http://localhost:8000"; // or your production URL
  const token = localStorage.getItem("token"); // assuming you store token here after login
 const getAllBeauticians=async()=>{
  try{

const {data}=await axios.post(backendUrl + '/api/admin/all-beauticians',{},{headers: {
  Authorization: `Bearer ${token}`,} // ✅ Properly sending token
},)
if (data.success){
  setBeauticians(data.beauticians)
  console.log(data.beauticians)

}else{
  toast.error(data.message)
}
  }catch(error){
    toast.error(error.message)

  }
 }

 const changeAvailability=async (beauticianId)=>{
  try{
    const {data}=await axios.post(backendUrl + '/api/admin/change-availability',{beauticianId},{headers: {
      Authorization: `Bearer ${token}`,} // ✅ Properly sending token
    },)
    if (data.success){
      toast.success(data.message)
    }
  }catch(error){
    toast.error(error.message)

  }
 }
  const value = {
    backendUrl,
    beauticians,
    getAllBeauticians,
    token,
    changeAvailability
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
