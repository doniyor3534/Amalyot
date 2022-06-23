
import './App.css';
import React , {useState} from 'react';
import  Home from './Home'
import  Servise  from './Servise';
import Contact from './Contact';
import Modal from './Modal/Modal';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function Nav() {
  const [menu,setaMenu] = useState(false)
  const navmenu=()=>{
       setaMenu(!menu)
       
  }
  
  return (
     <>
         <Router>
             <nav className={menu ? 'active' :''}>
         
                  <Link to="/">HOME</Link>
                  <Link to="/servise">Servise</Link>
                  <Link to="/Contact">Contact</Link>
                  <Link to="/modal">Modal</Link>
              
             </nav>
             <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/servise" element={<Servise/>}/>
                 <Route path="/Contact" element={<Contact/>}/>
                 <Route path="/modal" element={<Modal/>}/>
             </Routes>
             </Router>
             <button  onClick={navmenu}>navmenu</button>
     </>
  );
}

export default Nav;