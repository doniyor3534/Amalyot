import './App.css';
<<<<<<< HEAD
import React from 'react';
import Home from './Homepage/Home';
import Aboutpage from './Aboutpage/Aboutpage'
import Sermon from './Sermonpage/Sermon'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer';
import logonav from './img/logor.png'
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';

function App() {  
  return (
    <div>
      <Router>
              <nav>
                    <ul className='nav_item'>
                    <div className="logo"><NavLink to='/'><img src={logonav} alt="" /></NavLink></div>
                        <NavLink activclassname="selected" to='/' className="nav-link">Home</NavLink>
                        <NavLink activclassname="selected" to='/clothes' className="nav-link">Aboutpage</NavLink>
                        <NavLink activclassname="selected" to='/shoes' className="nav-link">Sermon</NavLink>
                        <NavLink activclassname="selected" to='/acser' className="nav-link">Blog</NavLink>
                        <button className='btn'>Contact</button>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/clothes' element={<Aboutpage />} />
                    <Route path='/shoes' element={<Sermon />} />
                    <Route path='/acser' element={<Blog />} />
                </Routes>
         </Router>
         <Footer/>
=======
<<<<<<< HEAD
import React,{useState}  from 'react';
import Blog from './Blog/Blog'
import Contact from './Contact/Contact';
import './Blog/Blog.css'
import './Contact/Contact.css'

function App() {
  return (
    <div className='app'>
        <Blog/>
        <Contact/>
=======
import React from 'react';
import Aboutpage from './Aboutpage/Aboutpage';
import Sermonevebt from './Sermonevent/Sermonevebt';



function App() {
 

  return (
    <div className='app'>
           <Aboutpage/>  
>>>>>>> 215e6f5b436955086f16a6747ecbd1dd36ebcb15
>>>>>>> 840296252e9569ab4d7493507a12c1b16695ece4
    </div>
  );
  }

export default App;
