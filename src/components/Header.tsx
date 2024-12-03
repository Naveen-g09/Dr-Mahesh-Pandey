import React from 'react';
import { Menu, Phone, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-lavender-700">Dr. Mahesh Pandey</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-lavender-600">About</a>
            <a href="#specialties" className="text-gray-700 hover:text-lavender-600">Specialties</a>
            <a href="#clinic" className="text-gray-700 hover:text-lavender-600">Clinic</a>
            <a href="#contact" className="text-gray-700 hover:text-lavender-600">Contact</a>
          </nav>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
}