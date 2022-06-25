import './App.css';
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
    </div>
  );
  }

export default App;
