import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Beautician = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const { beautician } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(service || '');
  const [showFilters, setShowFilters] = useState(false); // New state for mobile filter visibility

  // Service categories - using the exact format from your data
  const serviceCategories = [
    'Bridal Makeup',
    'HD Makeup',
    'Hair Styling',
    'Nail Art',
    'Party Makeup',
    'Permanent Makeup',
    'Threading',
    'Saree Draping',
    'Temporary tattoos',
    'Keratin Treatment',
    'Pedicure Treatment',
    'Manicure Treatment'
  ];

  // Normalize service names for comparison (case insensitive, remove spaces)
  const normalizeServiceName = (serviceName) => {
    return serviceName?.toLowerCase().replace(/\s+/g, '');
  };

  // Apply filters whenever dependencies change
  useEffect(() => {
    if (!beautician || beautician.length === 0) {
      setNoResults(true);
      setFilterDoc([]);
      return;
    }

    let filtered = [...beautician]; // Create a copy to avoid mutation
    let hasResults = true;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = beautician.filter((artist) => {
        // Check both service and speciality fields
        const artistService = artist.service || artist.speciality || '';
        const artistName = artist.name || '';
        
        return artistService.toLowerCase().includes(lowerSearchTerm) ||
               artistName.toLowerCase().includes(lowerSearchTerm);
      });
    } else if (selectedCategory) {
      const normalizedSelectedCategory = normalizeServiceName(selectedCategory);
      
      filtered = beautician.filter((artist) => {
        // Check both service and speciality fields with normalized comparison
        const artistService = normalizeServiceName(artist.service || '');
        const artistSpeciality = normalizeServiceName(artist.speciality || '');
        
        return artistService === normalizedSelectedCategory || 
               artistSpeciality === normalizedSelectedCategory;
      });
    }

    hasResults = filtered.length > 0;
    setFilterDoc(filtered);
    setNoResults(!hasResults);
  }, [beautician, selectedCategory, searchTerm]);

  // Handler for category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search when selecting a category
    
    // Close filters on mobile after selection
    if (window.innerWidth < 1024) {
      setShowFilters(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedCategory(''); // Clear category selection when searching
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    // Close filters on mobile after search
    if (window.innerWidth < 1024) {
      setShowFilters(false);
    }
  };

  // Get service display name for a beautician
  const getBeauticianService = (beautician) => {
    return beautician.service || beautician.speciality || 'Not specified';
  };

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <h1 className="text-4xl font-bold text-center text-white mb-2">Beautician Services</h1>
      <p className="text-center text-xl mb-8 text-white">Explore and book top beauticians for your beauty needs</p>

      {/* Mobile filter button */}
      <div className="lg:hidden flex justify-end mb-4">
        <button 
          onClick={toggleFilters}
          className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-6 mt-5 bg-black">
        {/* Sidebar for search and categories - hidden on mobile unless showFilters is true */}
        <div className={`w-full lg:w-1/4 bg-lack p-5 rounded-xl shadow-md ${showFilters ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
          {/* Search form with onSubmit handler */}
          <form onSubmit={handleSearchSubmit} className="w-full mb-6">
            <div className="font-medium text-white mb-3 text-lg">Search</div>
            <input
              type="text"
              placeholder="Search Services or Artists..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-4 py-2.5 border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none"
            />
          </form>

          <div className="font-medium text-white mb-3 text-lg">Categories</div>
          
          <div className="text-white flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 categories-scroll">
            {/* Generate category buttons from serviceCategories array */}
            {serviceCategories.map((category) => (
              <div 
                key={category}
                className={`w-full px-4 py-2.5 border rounded-lg transition-all cursor-pointer hover:bg-gray-50 ${
                  selectedCategory === category 
                    ? 'bg-pink-50 border-pink-300 text-pink-700 font-medium' 
                    : 'border-gray-300 text-gray-700'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          
          {(selectedCategory || searchTerm) && (
            <div 
              className="w-full px-4 py-2.8 mt-4 border border-red-200 rounded-lg transition-all cursor-pointer bg-red-50 text-red-600 font-medium hover:bg-red-100"
              onClick={() => {
                setSelectedCategory('');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </div>
          )}
        </div>

        {/* Main content area */}
        <div className="bg-black w-full lg:w-3/4">
          <div className="w-full rounded-xl p-6 relative min-h-[400px]">
            {/* Show results heading */}
            {filterDoc.length > 0 && (
              <div className="mb-6">
                <h2 className="text-white text-xl font-medium">
                  {searchTerm ? `Results for "${searchTerm}"` : 
                  selectedCategory ? `${selectedCategory} Artists` : 
                  "All Beauticians"}
                </h2>
              </div>
            )}

            {/* No results message */}
            {noResults && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  {searchTerm ? `No results found for "${searchTerm}"` : 
                  selectedCategory ? `No ${selectedCategory} artists available` : 
                  "No beauticians found."}
                </p>
              </div>
            )}

            {/* Loading message */}
            {filterDoc.length === 0 && !noResults && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg">Loading...</p>
              </div>
            )}

            {/* Beautician cards - always 3 per row on medium screens and above */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterDoc.map((item, index) => (
  <div
    className="border border-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-900/10 bg-gray-900"
    key={index}
  >
    <div 
      onClick={() => navigate(`/appointment/${item._id}`)}
      className="overflow-hidden relative pt-[100%]"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        src={item.image}
        alt={item.name || "Beautician"}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
        }}
      />
    </div>
    <div 
      onClick={() => navigate(`/appointment/${item._id}`)}
      className="p-4"
    >
      <div className="flex items-center gap-2 text-sm text-green-400 mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span>Available</span>
      </div>
      <h3 className="text-white text-lg font-medium">{item.name}</h3>
      <p className="text-gray-300 text-sm mt-1">{getBeauticianService(item)}</p>
      {item.experience && (
        <p className="text-gray-400 text-xs mt-1">Experience: {item.experience}</p>
   
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .categories-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .categories-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .categories-scroll::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 10px;
        }
        .categories-scroll::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
};

export default Beautician;