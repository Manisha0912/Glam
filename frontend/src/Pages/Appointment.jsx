
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';
import RelatedArtists from '../Components/RelatedArtists';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Appointment = () => {
  const { artistId } = useParams();
  const { beautician } = useContext(AppContext);
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Shorter day names for compact view
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [artistInfo, setArtistInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [slotTime, setSlotTime] = useState(null);
  const [bookingMessage, setBookingMessage] = useState('');
  const [bookedDate, setBookedDate] = useState(null);

  const fetchArtInfo = async () => {
    const artistInfo = beautician.find((art) => art._id === artistId);
    setArtistInfo(artistInfo);
  };

  const getTimeSlots = (date) => {
    const timeSlots = [];
    let startTime = new Date(date);
    startTime.setHours(8, 0, 0, 0); // Start at 8 AM

    for (let j = 0; j < 12; j++) { // 12 slots for a full day with 1-hour gaps
      let formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeSlots.push({
        datetime: new Date(startTime),
        time: formattedTime,
      });
      startTime.setHours(startTime.getHours() + 1); // Increment by 1 hour
    }

    // Filter out past time slots for the current day
    const now = new Date();
    if (date.getDate() === now.getDate() && 
        date.getMonth() === now.getMonth() && 
        date.getFullYear() === now.getFullYear()) {
      // Only compare hours for today's slots
      return timeSlots.filter((slot) => slot.datetime.getHours() > now.getHours() || 
        (slot.datetime.getHours() === now.getHours() && slot.datetime.getMinutes() > now.getMinutes()));
    }

    return timeSlots;
  };

  useEffect(() => {
    fetchArtInfo();
  }, [beautician, artistId]);

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(getTimeSlots(selectedDate));
      // Reset the selected time when changing date
      setSlotTime(null);
    }
  }, [selectedDate]);

  const handleBookAppointment = () => {
    if (!slotTime) {
      setBookingMessage('Please select a time slot.');
      return;
    }
    
    const appointmentDate = new Date(selectedDate);
    const timeMatch = slotTime.match(/(\d+):(\d+)\s*([APap][Mm])?/);
    
    if (timeMatch) {
      let hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);
      const period = timeMatch[3] ? timeMatch[3].toLowerCase() : null;
      
      // Convert to 24-hour format if needed
      if (period === 'pm' && hours !== 12) {
        hours += 12;
      } else if (period === 'am' && hours === 12) {
        hours = 0;
      }
      
      appointmentDate.setHours(hours, minutes, 0, 0);
      
      setBookedDate(appointmentDate);
      setBookingMessage(`Appointment booked for ${appointmentDate.toLocaleDateString()} at ${slotTime}`);
    } else {
      setBookingMessage('Invalid time format');
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
    
    const prevMonthDays = getDaysInMonth(year, month - 1);
    
    const calendar = [];
    let day = 1;
    
    // Create weeks
    for (let i = 0; i < 6; i++) {
      const week = [];
      
      // Create days in a week
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          // Previous month days
          const prevMonthDay = prevMonthDays - (firstDayOfMonth - j - 1);
          week.push({
            day: prevMonthDay,
            currentMonth: false,
            date: new Date(year, month - 1, prevMonthDay)
          });
        } else if (day > daysInMonth) {
          // Next month days
          const nextMonthDay = day - daysInMonth;
          week.push({
            day: nextMonthDay,
            currentMonth: false,
            date: new Date(year, month + 1, nextMonthDay)
          });
          day++;
        } else {
          // Current month days
          const date = new Date(year, month, day);
          const today = new Date();
          const isToday = date.getDate() === today.getDate() && 
                          date.getMonth() === today.getMonth() && 
                          date.getFullYear() === today.getFullYear();
          
          week.push({
            day,
            currentMonth: true,
            isToday,
            date
          });
          day++;
        }
      }
      
      calendar.push(week);
      
      // Stop if we've reached the end of the month
      if (day > daysInMonth && i < 5) break;
    }
    
    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isDateSelected = (date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const isDateInPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const calendar = generateCalendar();

  return artistInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="w-70 h-80 bg-black sm:max-w-72 rounded-lg" src={artistInfo.image} alt="" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-black mx-2 sm:mx-0 mt-[-80px] sm:mt-0 text-white">
          <p className="flex items-center gap-2 text-2xl font-medium text-white">
            {artistInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-white">
            <p>{artistInfo.qualification} - {artistInfo.service}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1 text-white">
            <p>{artistInfo.service}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{artistInfo.experience}</button>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-white mt-3">
              About <img className="w-3.5" src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-white max-w-[700px] mt-1">{artistInfo.about}</p>
          </div>
          <p className="text-white font-medium mt-4">
            Appointment fee: <span>{artistInfo.fees}/-</span>
          </p>
        </div>
      </div>
      
      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700">
        <p className="text-xl mb-4 text-white">Book Your Appointment</p>
        
        {/* Compact Black Calendar - Now with smaller size */}
        <div className="max-w-xs rounded-lg overflow-hidden bg-black border border-gray-700">
          {/* Calendar Header */}
          <div className="flex items-center justify-between p-2 border-b border-gray-700">
            <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-gray-800 text-gray-300">
              <ChevronLeft size={16} />
            </button>
            <h2 className="text-sm font-medium text-white">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-gray-800 text-gray-300">
              <ChevronRight size={16} />
            </button>
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7 text-center border-b border-gray-700">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="py-1 text-xs font-medium text-gray-400">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Dates - Reduced sizes */}
          <div>
            {calendar.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 text-center">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`py-1 border-t border-gray-700 ${day.currentMonth ? '' : 'text-gray-600'}`}
                    onClick={() => {
                      if (!isDateInPast(day.date)) {
                        setSelectedDate(day.date);
                      }
                    }}
                  >
                    <div 
                      className={`
                        cursor-pointer inline-flex items-center justify-center w-6 h-6 rounded-full text-xs
                        ${isDateSelected(day.date) ? 'bg-pink-600 text-white' : ''}
                        ${day.isToday && !isDateSelected(day.date) ? 'border border-gray-400 text-white' : day.currentMonth ? 'text-white' : ''}
                        ${isDateInPast(day.date) ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-gray-800'}
                      `}
                    >
                      {day.day}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Time Slots - with smaller buttons and right margin */}
        <div className="mt-6 pr-4">
          <p className="mb-2 text-white">Available time slots for {selectedDate.toLocaleDateString()}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mr-4">
            {timeSlots.length > 0 ? (
              timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`py-1.5 px-1.5 rounded-md text-xs transition-colors duration-200 ${
                    slotTime === slot.time 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-black text-white border border-gray-600 hover:border-pink-400'
                  }`}
                  onClick={() => setSlotTime(slot.time)}
                >
                  {slot.time}
                </button>
              ))
            ) : (
              <p className="col-span-full text-white bg-black p-2 border border-gray-600 rounded-md">No available slots for this date</p>
            )}
          </div>
          {slotTime && <p className="mt-2 text-white">Selected Time: {slotTime}</p>}
          
          <button 
            onClick={handleBookAppointment} 
            className="mt-4 bg-black border border-white text-white p-2 px-6 rounded-md hover:bg-gray-900 transition-colors duration-200"
          >
            Book Appointment
          </button>
          
          {bookingMessage && (
            <div className={`mt-2 p-3 rounded-md ${bookingMessage.includes('booked') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
      
      <RelatedArtists artistId={artistId} service={artistInfo.service}/>
    </div>
  );
};

export default Appointment;