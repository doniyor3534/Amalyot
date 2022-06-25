import React from 'react'
import './Footer.css'
import face from '../img/facebook.png'
import qush from '../img/twiter.png'
import fot from '../img/footer.png'
import init from '../img/in.png'
const Footer = () => {
  return (
    <div>
         <div className="ota">
               <div>
                 <a href=""> <img src={fot} alt="" /> </a>
                 <br/>
                   <div className="">
                       <a className='text' href=""><p>© Copyright Finsweet 2022</p></a>
                   </div>
                   <br />
                   <div className="text">
                       <a className='text' href=""><p className='ter'>(480) 555-0103</p></a>
                       <a className='text' href=""><p className='ter'>4517 Washington Ave. </p></a>
                       <a className='text' href=""><p className='ter'>finsweet@example.com</p></a>
                   </div>
               </div>
             <div className="texts">
                 <h3>Quicklinks</h3>
                 <br />
                 <a className='text' href=""><p>About us</p></a>
                 <br />
                 <a className='text' href=""><p>Sermons</p></a>
                 <br />
                 <a className='text' href=""><p>Events</p></a>
                 <br />
                 <a className='text' href=""><p>Blog</p></a>
                 <br />
             </div>
             <div className="text">
                 <h3>Connect </h3>
                 <br />
                 <div className="ot">
                     <a href=""><img src={face} alt="" /></a>
                     <a href=""><img src={qush} alt="" /></a>
                     <a href=""><img src={init} alt="" /></a>
                 </div>
             </div>
             <div className="">
                 <h1 className='ht'>Subscribe to get Latest Updates and News</h1>
                 <br />
                 <div className="">
                     <form>
                         <input className='input' type="text" placeholder='Yourmail@gmail.com' /> 
                         <button className='btn1'>Subscribe</button>
                     </form>
                 </div>
             </div>
           </div>
    </div>
  )
}

export default Footer