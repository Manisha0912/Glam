import React, { useState,useContext,useEffect } from 'react';
import { assets } from '../assets/assets';  // Import your assets properly
import { AuthContext } from '../Context/AuthContext';

const MyProfile = () => {
    const [image, setImage] = useState(false);
    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        name: "Shweta Kapoor",
        image: assets.profile_pic,
        email: 'shweta@gmail.com',
        phone: '9346616699',
        address: {
            line1: 'Kukatpally',
            line2: 'Hyderabad, Telangana'
        },
        gender: 'Female',
        dob: '1995-06-15'
    });
   
      useEffect(() => {
        if (user) {
          setUserData({
            name: user.name || '',
            image: user.image || assets.profile_pic, // fallback to default
            email: user.email || '',
            phone: user.phone || '',
            address: user.address || { line1: '', line2: '' },
            gender: user.gender || '',
            dob: user.dob || ''
          })
        }
      }, [user])

    const [isEdit, setIsEdit] = useState(false);

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    // Handle form submission (API call or local save)
    const updateUserProfileData = () => {
        console.log('Updated Profile Data:', userData);
        alert('Profile updated successfully!');
        setIsEdit(false);
    };

    return userData ? (
        <div className='min-h-screen flex justify-center items-center bg-black text-white p-8'>

            <div className='max-w-lg w-full flex flex-col gap-4 text-sm bg-[#1a1a1a] p-8 rounded-xl shadow-lg'>

                {/* Image Upload */}
                <div className="flex justify-center">
                    {isEdit ? (
                        <label htmlFor="image" className='cursor-pointer'>
                            <div className='relative'>
                                <img
                                    className='w-36 h-36 rounded-full object-cover opacity-75 border-2 border-gray-500'
                                    src={image ? URL.createObjectURL(image) : userData.image}
                                    alt="Profile"
                                />
                                <img
                                    className='w-10 absolute bottom-2 right-2'
                                    src={image ? '' : assets.upload_icon}
                                    alt="Upload"
                                />
                            </div>
                            <input onChange={handleImageChange} type="file" id="image" hidden />
                        </label>
                    ) : (
                        <img
                            className='w-36 h-36 rounded-full object-cover border-2 border-gray-500'
                            src={userData.image}
                            alt="Profile"
                        />
                    )}
                </div>

                {/* Name */}
                {isEdit ? (
                    <input
                        className='bg-gray-800 text-3xl font-medium max-w-60 p-2 border border-gray-500 rounded text-white'
                        type="text"
                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        value={userData.name}
                    />
                ) : (
                    <p className='font-medium text-3xl mt-4'>{userData.name}</p>
                )}

                <hr className='bg-gray-600 h-[1px] border-none' />

                {/* Contact Information */}
                <div>
                    <p className='text-gray-400 underline mt-3'>CONTACT INFORMATION</p>
                    <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>

                        {/* Email */}
                        <p className='font-medium'>Email id:</p>
                        <p className='text-blue-400'>{userData.email}</p>

                        {/* Phone */}
                        <p className='font-medium'>Phone:</p>
                        {isEdit ? (
                            <input
                                className='bg-gray-800 max-w-52 p-2 border border-gray-500 rounded text-white'
                                type="text"
                                onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                                value={userData.phone}
                            />
                        ) : (
                            <p className='text-blue-400'>{userData.phone}</p>
                        )}

                        {/* Address */}
                        <p className='font-medium'>Address:</p>
                        {isEdit ? (
                            <div>
                                <input
                                    className='bg-gray-800 w-full p-2 border border-gray-500 rounded mb-2 text-white'
                                    type="text"
                                    placeholder="Line 1"
                                    onChange={(e) => setUserData(prev => ({
                                        ...prev,
                                        address: { ...prev.address, line1: e.target.value }
                                    }))}
                                    value={userData.address.line1}
                                />
                                <input
                                    className='bg-gray-800 w-full p-2 border border-gray-500 rounded text-white'
                                    type="text"
                                    placeholder="Line 2"
                                    onChange={(e) => setUserData(prev => ({
                                        ...prev,
                                        address: { ...prev.address, line2: e.target.value }
                                    }))}
                                    value={userData.address.line2}
                                />
                            </div>
                        ) : (
                            <p className='text-gray-400'>{userData.address.line1} <br /> {userData.address.line2}</p>
                        )}
                    </div>
                </div>

                {/* Basic Information */}
                <div>
                    <p className='text-gray-400 underline mt-3'>BASIC INFORMATION</p>
                    <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>

                        {/* Gender */}
                        <p className='font-medium'>Gender:</p>
                        {isEdit ? (
                            <select
                                className='bg-gray-800 max-w-20 p-2 border border-gray-500 rounded text-white'
                                onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                                value={userData.gender}
                            >
                                <option value="Not Selected">Not Selected</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        ) : (
                            <p className='text-gray-400'>{userData.gender}</p>
                        )}

                        {/* Date of Birth */}
                        <p className='font-medium'>DOB:</p>
                        {isEdit ? (
                            <input
                                type="date"
                                className='bg-gray-800 p-2 border border-gray-500 rounded text-white'
                                value={userData.dob}
                                onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                            />
                        ) : (
                            <p className='text-gray-400'>{userData.dob}</p>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className='mt-10 flex justify-center'>
                    {isEdit ? (
                        <button
                            onClick={updateUserProfileData}
                            className='bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600 transition-all'
                        >
                            Save Information
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEdit(true)}
                            className='bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition-all'
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    ) : null;
}

export default MyProfile;

