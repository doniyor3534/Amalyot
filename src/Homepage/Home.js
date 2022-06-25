import React, { useState } from 'react'
import './Home.css'
import jas from '../img/Jasur.png';
import qiz from '../img/qiz.png';
import acha from '../img/acha.png';
const Home = () => {
  const[get,setGet] = useState([
    {
      id:'0',
      img:'../img/hand.png',
      name:'About us',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:'1',
      img:'../img/voice.png',
      name:'Get involved',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:'2',
      img:'../img/hard.png',
      name:'Giving back',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ])  
  return (
    <div>
      <div className="box">
        <div className="boxo">
          <h2 className='text'>Welcome to our CHURCH</h2>
          <br />
            <h1 className='texr'>Become a part of  <br /> our community</h1>
            <br/>
            <br/>
            <button className='btns'>Learn more</button>
            <br/><br/><br/><br/>
            <div className="box1">
              <div className="linee"></div>
              <p className='text2'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
            </div>
        </div>
      </div>
      <div className="box3">
        <div className="">
          <p className='par'>sub-headline</p>
          <h1 className='text5'>a church that's relevant</h1>
          <div className="card">
             {
               get.map((val)=>(
                 <div className="cards" key={val.id}>
                   <div className="card-body">
                     <img className='rasm' src={val.img} alt="" />
                       <h2 className='tex6'>{val.name}</h2>
                       <p className='par8'>{val.text}</p>
                   </div>
                 </div>
               ))
             }
          </div>
        </div>
      </div>
      <div className="box4">
         <div>
         <p className='par4'>sub-headline</p>
         <h1 className='text9'>love and compassion</h1>
         <p className='par9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <div>
           <button className='btn9'>Read more</button>
         </div>
         </div>
         <div>
          <div className="jas">
            <img src={jas} alt="" />
            </div>
          <div className="qiz">
            <img className='qizcha' src={qiz} alt="" />
            </div>
          <div className="acha">
            <img className='ach' src={acha} alt="" />
            </div>
         </div>
      </div>
      <div className="box5">
      <div className='box5'>
         <p className='par10'>our mission & vision</p>
         <h1 className='text10'>celebrate WITH US</h1>
         <p className='par9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
         <div className='atag'>
           <a className='at' href="">Read More →</a>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Home