import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Mahesh Pandey</h3>
            <p className="text-gray-400">MD Kayachikitsa</p>
            <p className="text-gray-400">PhD Scholar</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-lavender-400" />
                <span className="text-gray-400">+91 9820006082</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-lavender-400" />
                <span className="text-gray-400">drpandeymahesh@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-lavender-400" />
                <span className="text-gray-400">CBD Belapur, Navi Mumbai</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours at Ayush Clinic</h3>
            <p className="text-gray-400">Contact - +91 9930608243</p>
            <p className="text-gray-400">Monday - Saturday</p>
            <p className="text-gray-400">7:00 PM - 11:00 PM</p>
            <p className="text-gray-400">By Appointment Only</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Ayush Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}