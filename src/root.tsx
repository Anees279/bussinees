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
import {Sudia} from './layout/views/services/sudia'
import {Oman} from './layout/views/services/oman'
import {Abudabi} from './layout/views/family/abudabi'
import {Ajaman} from './layout/views/family/ajaman'
import {Golden} from './layout/views/family/golden'
import {Visadubai} from './layout/views/family/visadubai'
import { Pro } from './layout/views/proservices/proservices';
const Roots: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar shown on all pages */}
      <ResponsiveRootsBar />

      {/* Main content area with flex-grow to push footer to the bottom when content is short */}
      <div style={{ flexGrow: 1, paddingBottom: '16px' }}>
        <Routes>
          <Route path="/" element={<HereSection />} />
          <Route path="/sudia" element={<Sudia/>} />
          <Route path="/proservices" element={<Oman/>} />
          <Route path="/dhabi" element={<Abudabi/>} />
          <Route path="/ajman" element={<Ajaman/>} />
          <Route path="/residency" element={<Golden/>} />
          <Route path="/visab" element={<Visadubai/>} />
          <Route path="/establishmaent" element={<Pro/>} />
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
