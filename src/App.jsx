import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';
import AsakePage from './pages/AsakePage';
import BeautyPage from './pages/BeautyPage';
import DavidoPage from './pages/DavidoPage';
import TonyPage from './pages/TonyPage';
import VeekeePage from './pages/VeekeePage';
import WizkidPage from './pages/WizkidPage';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Homepage />} />
    <Route path='/portfolio' element={<PortfolioPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/services' element={<ServicesPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/asake' element={<AsakePage />} />
    <Route path='/beauty' element={<BeautyPage />} />
    <Route path='/davido' element={<DavidoPage />} />
    <Route path='/tony' element={<TonyPage />} />
    <Route path='/veekee' element={<VeekeePage />} />
    <Route path='/wizkid' element={<WizkidPage />} />
  </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}/>
}
export default App