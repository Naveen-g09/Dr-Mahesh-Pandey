import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Clinic() {
  return (
    <section id="clinic" className="py-16 bg-lavender-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ayush Clinic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-lavender-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">C/5/7-0:1, Trimurti Apartment, Sec-3, CBD Belapur, Navi Mumbai</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-lavender-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p className="text-gray-600">Mon-Sat: 7:00 PM - 11:00 PM</p>
                 
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-lavender-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Contact</p>
                  <p className="text-gray-600">+91 9930608243</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-lavender-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">General Physician Consultations</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-lavender-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Panchkarma Center</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-lavender-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Modern Medical Treatments</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-lavender-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Traditional Ayurvedic Therapies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}