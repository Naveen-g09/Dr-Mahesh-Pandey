import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { Clinic } from './components/Clinic';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Clinic />
      </main>
      <Footer />
    </div>
  );
}

export default App;