import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router';
// import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import CaseStudies from './Pages/CaseStudies';
import Testimonials from './Pages/Testimonials';
import RecentWork from './Pages/RecentWork';
import Contact from './Pages/Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/case-study' element={<CaseStudies />}/>
      <Route path='/testimonials' element={<Testimonials />}/>
      <Route path='/recent-work' element={<RecentWork />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)