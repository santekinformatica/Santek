import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Lazy load non-critical sections to improve initial load performance (LCP & TBT)
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

// Loading skeleton component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-gray-50 h-96">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-4 w-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-32 w-full max-w-md bg-gray-200 rounded"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero is critical, load immediately */}
        <Hero />
        
        {/* Lazy load the rest */}
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Services />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;