import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import TopNavbar from './components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <TopNavbar/>
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)
