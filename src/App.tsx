// src/App.tsx
import { lazy, Suspense } from 'react'; // ← SIN "React,"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Lazy loading de páginas
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 font-sans">Cargando...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
          </Routes>
        </Suspense>
        <ScrollToTop/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;