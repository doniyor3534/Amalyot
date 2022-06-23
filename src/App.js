
import './App.css';
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
    </div>
  );
  }

export default App;
