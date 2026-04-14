import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import SmartSolutions from './pages/SmartSolutions/SmartSolutions'
import Coaching from './pages/Coaching/Coaching'
import Speaking from './pages/Speaking/Speaking'
import Events from './pages/Events/Events'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import EvolveCommunity from './pages/EvolveCommunity/EvolveCommunity'

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/consulting" element={<SmartSolutions />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/evolve-community" element={<EvolveCommunity />} />
        <Route path="/evolve-community/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* Redirect old paths */}
        <Route path="/smart-solutions" element={<Navigate to="/consulting" replace />} />
        <Route path="/pricing" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
