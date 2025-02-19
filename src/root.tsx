import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResponsiveRootsBar from './component/navbar'; // Adjust path as needed
import HereSection from './layout/views/home';
import Footer from './component/footer';
import StatsSection from './layout/views/StatsSection'
import WhyChooseInZone from './layout/views/whychooes'
import HowItWorks from './layout/views/how_it_work';
import ClientTestimonial from './layout/views/testmoniol'
import Most from './layout/views/mostpopular'
const Roots: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar shown on all pages */}
      <ResponsiveRootsBar />

      {/* Main content area with flex-grow to push footer to the bottom when content is short */}
      <div style={{ flexGrow: 1, paddingBottom: '16px' }}>
        <Routes>
          <Route path="/" element={<HereSection />} />
          
          {/* If no route matches, redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <StatsSection/>
      <WhyChooseInZone/>
      <HowItWorks/>
      <ClientTestimonial/>
      <Most/>

      {/* Footer shown on all pages */}
      <Footer />
    </div>
  );
};

export default Roots;
