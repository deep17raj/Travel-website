import React from 'react';
import { Phone, Gauge, Zap, Users } from 'lucide-react';
import { handleCall } from '../../utils/contactHelper';
// Header section component
const Header = () => (
  <div className="mb-12">
    <h2 className="text-blue-700 font-bold tracking-wider uppercase mb-2 text-sm">
      Explore Your Way
    </h2>
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
      Vehicle Rental Service
    </h1>
    <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
      Choose from our premium fleet of bikes, scooters, and cars. Whether you want a thrilling ride or a comfortable drive, we have the perfect vehicle for your adventure.
    </p>
  </div>
);

// Individual Vehicle Card Component
const VehicleCard = ({ vehicle }) => {
  const { badge, image, title, specs, description } = vehicle;

  // Map badge variant to Tailwind color classes
  const badgeColorMap = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-cyan-600',
  };
  const badgeClass = badgeColorMap[badge.variant] || 'bg-gray-500';

  // Map icon string to Lucide React component
  const IconComponent = {
    speed: Gauge,
    lightning: Zap,
    users: Users,
  }[specs.icon];

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col h-full">
      {/* Top Media Section with Image, Badge, Title, and Specs overlay */}
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {/* Badge */}
        <span className={`absolute top-5 left-5 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${badgeClass}`}>
          {badge.text}
        </span>

        {/* Title and Specs Overlay */}
        <div className="absolute bottom-5 left-5 text-white z-10">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <div className="flex items-center text-sm font-medium opacity-90">
            {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
            <span>{specs.text}</span>
          </div>
        </div>
      </div>

      {/* Bottom Content Section with Description and Button */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <button onClick={() => handleCall('+971501234567')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full flex items-center justify-center transition-colors duration-300">
          <Phone className="w-5 h-5 mr-2 fill-current" />
          Call Now
        </button>
      </div>
    </div>
  );
};

// Main Component
const VehicleRental = () => {
  // Hardcoded data for the cards
  const vehicles = [
    {
      id: 1,
      badge: { text: 'Available', variant: 'success' },
      // Using placeholders based on the image content. In a real app, use actual images.
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
      title: 'Cruiser Bikes',
      specs: { icon: 'speed', text: '350cc - 500cc' },
      description:
        'Perfect for solo travelers or couples looking for an adventurous ride through the winding mountain roads. Feel the wind and explore freely.',
    },
    {
      id: 2,
      badge: { text: 'Popular', variant: 'warning' },
      image: 'https://images.unsplash.com/photo-1519750292352-c9fc17322ed7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'City Scooters',
      specs: { icon: 'lightning', text: 'Automatic' },
      description:
        'Convenient and easy to handle. Best for local sightseeing and navigating through narrow city streets with ease and comfort.',
    },
    {
      id: 3,
      badge: { text: 'Family Choice', variant: 'info' },
      // This placeholder simulates the graphic from the original image.
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
      title: 'SUV & Sedans',
      specs: { icon: 'users', text: '4-7 Seater' },
      description:
        'Travel in comfort with your family or group. Our well-maintained cars ensure a smooth journey to distant locations and maximum safety.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-orange-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Header />
        {/* Card Grid - No carousel, just a static grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleRental;