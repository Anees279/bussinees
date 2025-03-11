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
import {Familyvisa} from './layout/views/family/familyvisa'
import {Visadubai} from './layout/views/family/visadubai'
import { Pro } from './layout/views/proservices/proservices';
import {Mainland} from './layout/views/bussiness/minlind'
import { Medical } from './layout/views/bussiness/medical';
import {Albasara} from './layout/views/bussiness/albasra'
import {Beauty} from './layout/views/bussiness/beauty'
import {Freezone} from './layout/views/bussiness/freezone'
import {Visa} from './layout/views/bussiness/visa'
import {Mofa} from './layout/views/bussiness/mofta'
import {News} from "./layout/views/news/news"
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
          <Route path="/family" element={<Familyvisa/>} />

          
          <Route path="/dhabi" element={<Abudabi/>} />
          <Route path="/ajman" element={<Ajaman/>} />
          <Route path="/residency" element={<Golden/>} />
          <Route path="/visab" element={<Visadubai/>} />
          <Route path="/establishmaent" element={<Pro/>} />
          <Route path="/mainland" element={<Mainland/>} />
          <Route path="/medical" element={<Medical/>} />
          <Route path="/barsha" element={<Albasara/>} />
          <Route path="/salon" element={<Beauty/>} />
          <Route path="/freezone" element={<Freezone/>} />
          <Route path="/permit" element={<Visa/>} />
          <Route path="/embassy" element={<Mofa/>} />
          <Route path="/news" element={<News/>} />
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
