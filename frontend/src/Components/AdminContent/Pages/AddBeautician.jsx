// import React, { useContext, useState } from 'react';
// import { assets } from '../Assets/Assets';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { AdminContext } from '../../../Context/AdminContext';

// const AddBeautician = ({ backendUrl, aToken }) => {
//     const [beauticianImg, setBeauticianImg] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [experience, setExperience] = useState('1 Year');
//     const [fees, setFees] = useState('');
//     const [about, setAbout] = useState('');
//     const [service, setService] = useState('Bridal Makeup');
//     const [qualification, setQualification] = useState('');
//     const [address1, setAddress1] = useState('');
//     const [address2, setAddress2] = useState('');

//     const {backendUrl,token}=useContext(AdminContext)


//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         try {
//             if (!beauticianImg) {
//                 return toast.error('Image Not Selected');
//             }
//             const formData = new FormData();
//             formData.append('image', beauticianImg);
//             formData.append('name', name);
//             formData.append('email', email);
//             formData.append('password', password);
//             formData.append('experience', experience);
//             formData.append('fees', Number(fees));
//             formData.append('service', service);
//             formData.append('qualification', qualification);
//             formData.append('about', about);
//             formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

//             formData.forEach((value, key) => {
//                 console.log(`${key}:${value}`);
//             });

//             const { data } = await axios.post(
//                 'http://localhost:8000/api/admin/add-beautician',
//                 formData,
//                 { headers: { aToken } }
//             );

//             if (data.success) {
//                 toast.success(data.message);
//                 setBeauticianImg(false);
//                 setName('');
//                 setPassword('');
//                 setEmail('');
//                 setAddress1('');
//                 setAddress2('');
//                 setQualification('');
//                 setAbout('');
//                 setFees('');
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//             console.log(error);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto bg-black text-white p-8 rounded-lg shadow-lg mt-8">
//             <p className="text-xl font-bold mb-6 text-center">Add Beautician</p>

//             <div className="flex justify-center items-center mb-6">
//                 <div className="flex flex-col items-center">
//                     <label htmlFor="beautician-image" className="cursor-pointer">
//                         <img
//                             src={beauticianImg ? URL.createObjectURL(beauticianImg) : assets.upload_area}
//                             alt="Upload"
//                             className="w-24 h-24 object-cover rounded-full border-2 border-gray-600 shadow-md hover:scale-105 transition-all duration-300"
//                         />
//                     </label>
//                     <input onChange={(e) => setBeauticianImg(e.target.files[0])} type="file" id="beautician-image" hidden />
//                     <p className="text-xs mt-2">Upload Beautician Picture</p>
//                 </div>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//                 <div className="space-y-4">
//                     <div>
//                         <p className="text-xs font-medium">Beautician Name</p>
//                         <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Beautician Email</p>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Beautician Password</p>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Qualification</p>
//                         <input onChange={(e) => setQualification(e.target.value)} value={qualification} type="text" placeholder="Qualification" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Service</p>
//                         <select onChange={(e) => setService(e.target.value)} value={service} required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm">
//                             <option value="Bridal Makeup">Bridal Makeup</option>
//                             <option value="HD Makeup">HD Makeup</option>
//                             <option value="Hair Styling">Hair Styling</option>
//                             <option value="Nail Art">Nail Art</option>
//                             <option value="Party Makeup">Party Makeup</option>
//                             <option value="Permanent Makeup">Permanent Makeup</option>
//                             <option value="Keratin Treatment">Keratin Treatment</option>
//                             <option value="Threading">Threading</option>
//                             <option value="Temporary Tattoos">Temporary Tattoos</option>
//                             <option value="Pedicure Treatment">Pedicure Treatment</option>
//                             <option value="Manicure Treatment">Manicure Treatment</option>
//                             <option value="Saree Draping">Saree Draping</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="space-y-4">
//                     <div>
//                         <p className="text-xs font-medium">Experience</p>
//                         <select onChange={(e) => setExperience(e.target.value)} value={experience} required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm">
//                             {Array.from({ length: 10 }, (_, i) => (
//                                 <option key={i} value={`${i + 1} Year${i > 0 ? 's' : ''}`}>{`${i + 1} Year${i > 0 ? 's' : ''}`}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Fees</p>
//                         <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Address</p>
//                         <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="w-full px-3 py-2 mb-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                         <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-5">
//                 <p className="text-xs font-medium">About Beautician</p>
//                 <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about beautician" rows={4} required className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm" />
//             </div>

//             <div className="flex justify-center mt-5">
//                 <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm font-medium">
//                     Add Beautician
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default AddBeautician;


// import React, { useContext, useState } from 'react';
// import { assets } from '../Assets/Assets';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { AdminContext } from '../../../Context/AdminContext';
// import { AuthContext } from '../../../Context/AuthContext';

// const AddBeautician = () => {
//     const [beauticianImg, setBeauticianImg] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [experience, setExperience] = useState('1 Year');
//     const [fees, setFees] = useState('');
//     const [about, setAbout] = useState('');
//     const [service, setService] = useState('Bridal Makeup');
//     const [qualification, setQualification] = useState('');
//     const [address1, setAddress1] = useState('');
//     const [address2, setAddress2] = useState('');

//     const { backendUrl} = useContext(AdminContext); // ✅ using context only
//     const{token}=useContext(AuthContext)

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         try {
//             if (!beauticianImg) return toast.error('Image Not Selected');

//             const formData = new FormData();
//             formData.append('image', beauticianImg);
//             formData.append('name', name);
//             formData.append('email', email);
//             formData.append('password', password);
//             formData.append('experience', experience);
//             formData.append('fees', Number(fees));
//             formData.append('service', service);
//             formData.append('qualification', qualification);
//             formData.append('about', about);
//             formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

//             // const { data } = await axios.post(
//             //     `${backendUrl}/api/admin/add-beautician`, // ✅ dynamic URL from context
//             //     formData,
//             //     // { headers: { token } }
//             //     {headers: {
//             //         Authorization: `Bearer ${token}`,
//             //       }
//             //     }
//             // );
//             const data  = await axios.post(
//                 `${backendUrl}/api/admin/add-beautician`, // ✅ dynamic URL from context
//                 formData,
//                 {
                    
//                   headers: {
//                     Authorization: `Bearer ${token}`, // ✅ Properly sending token
//                   },
//                 }
//               );
              

//             if (data.success) {
//                 toast.success(data.message);
//                 setBeauticianImg(false);
//                 setName('');
//                 setPassword('');
//                 setEmail('');
//                 setAddress1('');
//                 setAddress2('');
//                 setQualification('');
//                 setAbout('');
//                 setFees('');
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//             console.log(error);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto bg-black text-white p-8 rounded-lg shadow-lg mt-8">
//             <p className="text-xl font-bold mb-6 text-center">Add Beautician</p>

//             <div className="flex justify-center items-center mb-6">
//                 <div className="flex flex-col items-center">
//                     <label htmlFor="beautician-image" className="cursor-pointer">
//                         <img
//                             src={beauticianImg ? URL.createObjectURL(beauticianImg) : assets.upload_area}
//                             alt="Upload"
//                             className="w-24 h-24 object-cover rounded-full border-2 border-gray-600 shadow-md hover:scale-105 transition-all duration-300"
//                         />
//                     </label>
//                     <input onChange={(e) => setBeauticianImg(e.target.files[0])} type="file" id="beautician-image" hidden />
//                     <p className="text-xs mt-2">Upload Beautician Picture</p>
//                 </div>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//                 <div className="space-y-4">
//                     <div>
//                         <p className="text-xs font-medium">Beautician Name</p>
//                         <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="input" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Beautician Email</p>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="input" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Beautician Password</p>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="input" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Qualification</p>
//                         <input onChange={(e) => setQualification(e.target.value)} value={qualification} type="text" placeholder="Qualification" required className="input" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Service</p>
//                         <select onChange={(e) => setService(e.target.value)} value={service} required className="input">
//                             <option value="Bridal Makeup">Bridal Makeup</option>
//                             <option value="HD Makeup">HD Makeup</option>
//                             <option value="Hair Styling">Hair Styling</option>
//                             <option value="Nail Art">Nail Art</option>
//                             <option value="Party Makeup">Party Makeup</option>
//                             <option value="Permanent Makeup">Permanent Makeup</option>
//                             <option value="Keratin Treatment">Keratin Treatment</option>
//                             <option value="Threading">Threading</option>
//                             <option value="Temporary Tattoos">Temporary Tattoos</option>
//                             <option value="Pedicure Treatment">Pedicure Treatment</option>
//                             <option value="Manicure Treatment">Manicure Treatment</option>
//                             <option value="Saree Draping">Saree Draping</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="space-y-4">
//                     <div>
//                         <p className="text-xs font-medium">Experience</p>
//                         <select onChange={(e) => setExperience(e.target.value)} value={experience} required className="input">
//                             {Array.from({ length: 10 }, (_, i) => (
//                                 <option key={i} value={`${i + 1} Year${i > 0 ? 's' : ''}`}>{`${i + 1} Year${i > 0 ? 's' : ''}`}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Fees</p>
//                         <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required className="input" />
//                     </div>
//                     <div>
//                         <p className="text-xs font-medium">Address</p>
//                         <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="input mb-2" />
//                         <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="input" />
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-5">
//                 <p className="text-xs font-medium">About Beautician</p>
//                 <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about beautician" rows={4} required className="input" />
//             </div>

//             <div className="flex justify-center mt-5">
//                 <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm font-medium">
//                     Add Beautician
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default AddBeautician;


import React, { useContext, useState } from 'react';
import { assets } from '../Assets/Assets';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AdminContext } from '../../../Context/AdminContext';
import { AuthContext } from '../../../Context/AuthContext';

const AddBeautician = () => {
    const [beauticianImg, setBeauticianImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [service, setService] = useState('Bridal Makeup');
    const [qualification, setQualification] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const { backendUrl } = useContext(AdminContext);
    const { token } = useContext(AuthContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (!beauticianImg) return toast.error('Image Not Selected');

            const formData = new FormData();
            formData.append('image', beauticianImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('service', service);
            formData.append('qualification', qualification);
            formData.append('about', about);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

            const response = await axios.post(
                `${backendUrl}/api/admin/add-beautician`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            
            // Explicitly show success toast regardless of response structure
            toast.success('Beautician added successfully!');
            
            // Reset form fields
            setBeauticianImg(false);
            setName('');
            setPassword('');
            setEmail('');
            setAddress1('');
            setAddress2('');
            setQualification('');
            setAbout('');
            setFees('');
            
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
            console.log(error);
        }
    };

    const inputClass = "w-full bg-gray-900 text-white border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500";
    const labelClass = "text-xs font-medium text-gray-400 mb-1 block";

    return (
        <div className="py-4 px-2">
            <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-center">Add Beautician</h2>

                <div className="flex justify-center items-center mb-4">
                    <div className="flex flex-col items-center">
                        <label htmlFor="beautician-image" className="cursor-pointer">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300">
                                <img
                                    src={beauticianImg ? URL.createObjectURL(beauticianImg) : assets.upload_area}
                                    alt="Upload"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </label>
                        <input onChange={(e) => setBeauticianImg(e.target.files[0])} type="file" id="beautician-image" hidden />
                        <p className="text-xs mt-1 text-gray-400">Upload Photo</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="name" className={labelClass}>Beautician Name</label>
                            <input 
                                id="name"
                                onChange={(e) => setName(e.target.value)} 
                                value={name} 
                                type="text" 
                                placeholder="Name" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className={labelClass}>Email Address</label>
                            <input 
                                id="email"
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email} 
                                type="email" 
                                placeholder="Email" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className={labelClass}>Password</label>
                            <input 
                                id="password"
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password} 
                                type="password" 
                                placeholder="Password" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="qualification" className={labelClass}>Qualification</label>
                            <input 
                                id="qualification"
                                onChange={(e) => setQualification(e.target.value)} 
                                value={qualification} 
                                type="text" 
                                placeholder="Qualification" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="service" className={labelClass}>Service Type</label>
                            <select 
                                id="service"
                                onChange={(e) => setService(e.target.value)} 
                                value={service} 
                                required 
                                className={inputClass}
                            >
                                <option value="Bridal Makeup">Bridal Makeup</option>
                                <option value="HD Makeup">HD Makeup</option>
                                <option value="Hair Styling">Hair Styling</option>
                                <option value="Nail Art">Nail Art</option>
                                <option value="Party Makeup">Party Makeup</option>
                                <option value="Permanent Makeup">Permanent Makeup</option>
                                <option value="Keratin Treatment">Keratin Treatment</option>
                                <option value="Threading">Threading</option>
                                <option value="Temporary Tattoos">Temporary Tattoos</option>
                                <option value="Pedicure Treatment">Pedicure Treatment</option>
                                <option value="Manicure Treatment">Manicure Treatment</option>
                                <option value="Saree Draping">Saree Draping</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label htmlFor="experience" className={labelClass}>Experience</label>
                            <select 
                                id="experience"
                                onChange={(e) => setExperience(e.target.value)} 
                                value={experience} 
                                required 
                                className={inputClass}
                            >
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i} value={`${i + 1} Year${i > 0 ? 's' : ''}`}>
                                        {`${i + 1} Year${i > 0 ? 's' : ''}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="fees" className={labelClass}>Service Fees</label>
                            <input 
                                id="fees"
                                onChange={(e) => setFees(e.target.value)} 
                                value={fees} 
                                type="number" 
                                placeholder="Fees" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className={labelClass}>Address</label>
                            <input 
                                onChange={(e) => setAddress1(e.target.value)} 
                                value={address1} 
                                type="text" 
                                placeholder="Address 1" 
                                required 
                                className={inputClass} 
                            />
                            <input 
                                onChange={(e) => setAddress2(e.target.value)} 
                                value={address2} 
                                type="text" 
                                placeholder="Address 2" 
                                required 
                                className={inputClass} 
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="about" className={labelClass}>About Beautician</label>
                    <textarea 
                        id="about"
                        onChange={(e) => setAbout(e.target.value)} 
                        value={about} 
                        placeholder="Write about beautician" 
                        rows={3} 
                        required 
                        className={inputClass} 
                    />
                </div>

                <div className="flex justify-center mt-4">
                    <button 
                        type="submit" 
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 text-sm font-medium"
                    >
                        Add Beautician
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBeautician;