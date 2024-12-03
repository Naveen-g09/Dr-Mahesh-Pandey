import React from 'react';
import { Heart, Droplets, Sun, Activity } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      icon: <Heart className="h-8 w-8 text-lavender-600" />,
      title: 'Cardiac Care',
      description: 'Comprehensive cardiac health management and treatment'
    },
    {
      icon: <Activity className="h-8 w-8 text-lavender-600" />,
      title: 'Arthritis Treatment',
      description: 'Specialized care for joint pain and arthritis management'
    },
    {
      icon: <Sun className="h-8 w-8 text-lavender-600" />,
      title: 'Skin Care',
      description: 'Expert dermatological treatments and consultations'
    },
    {
      icon: <Droplets className="h-8 w-8 text-lavender-600" />,
      title: 'Diabetes Management',
      description: 'Blood sugar monitoring and diabetes care'
    }
  ];

  return (
    <section id="specialties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="p-6 bg-lavender-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}