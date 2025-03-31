import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointments = () => {
  const { beautician } = useContext(AppContext);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-black text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Appointments</h2>

      <div className="space-y-6">
        {beautician.slice(0, 2).map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 shadow-md">
            <div className="w-24 h-24">
              <img src={item.image} alt="Beautician" className="w-full h-full rounded-lg object-cover" />
            </div>

            <div className="flex-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-300">{item.service}</p>
              <p className="text-sm text-gray-400">{item.address.line1}</p>
              <p className="text-sm text-gray-400">{item.address.line2}</p>
              <p className="text-sm mt-2">
                <span className="font-semibold">Date & Time:</span> 25, February, 2025 | 8:30 PM
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200">
                Pay Online
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
