import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedArtists = ({ service, artistId }) => {
  const { beautician } = useContext(AppContext);
  const navigate = useNavigate();
  const [relArtist, setRelArtist] = useState([]);

  useEffect(() => {
    if (beautician.length > 0 && service) {
      const artistData = beautician.filter(
        (artist) => artist.service === service && artist._id !== artistId
      );
      setRelArtist(artistData);
    }
  }, [beautician, service, artistId]);

  return (
    <div className='max-w-5xl mx-auto mt-6'>
      {/* Title and slogan above the container with black text */}
      <h2 className='text-3xl font-bold mb-2 text-center text-black'>Related Artists</h2>
      <p className='text-black text-xl mb-6 text-center'>Find more talented artists with similar services!</p>
      
      {/* Main content container */}
      <div className='bg-black text-white p-6 rounded-lg'>
        {relArtist.length > 0 ? (
          <div className='flex gap-4 overflow-x-auto'>
            {relArtist.slice(0, 5).map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  scrollTo(0, 0);
                }}
                className='w-48 border border-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-900/10 bg-gray-900'
                key={index}
              >
                <div className='overflow-hidden relative pt-[100%]'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105'
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                    }}
                  />
                </div>
                <div className='p-4'>
                  <div className="flex items-center gap-2 text-sm text-green-400 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Available</span>
                  </div>
                  <h3 className='text-white text-lg font-medium'>{item.name}</h3>
                  <p className='text-gray-300 text-sm mt-1'>{item.service}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center'>No related artists found</p>
        )}
        {relArtist.length > 0 && (
          <div className='flex justify-center mt-10'>
            <button
              onClick={() => {
                navigate('/beautician');
                scrollTo(0, 0);
              }}
              className='bg-white text-black px-12 py-3 rounded-full hover:bg-gray-200 transition-colors'
            >
              more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedArtists;