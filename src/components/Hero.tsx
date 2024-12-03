import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import doctorImage from '../assets/doctor.jpg';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Integrating Modern Medicine with Traditional Wisdom
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Associate Professor at YMT Medical College & General Physician at Ayush Clinic
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-lavender-600 mr-2" />
                <span className="text-gray-700">MD Kayachikitsa</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-lavender-600 mr-2" />
                <span className="text-gray-700">PhD Scholar</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={doctorImage}
              alt="Doctor's Portrait"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}