import React from 'react'
import church from './img/church.png'
const Contact = () => {
  return (
    <>
        <div className="church">
            <img src={church} alt="" />
        </div>
        <h1>Contact form:</h1>
        <div className="form">
            <div className="send">
                <input type="text" placeholder='Your full Name'/><br /> <br />
                <input type="text" placeholder='Your Email'/><br /> <br />
                <input type="text" placeholder='Query Related'/><br /> <br />
                <textarea name="" id="" cols="40" rows="5" placeholder='Message'></textarea><br /><br />
                <button className='mass'>Send message</button>
            </div>
            <div className="find">
                <h6>Address</h6>
                <h3>NH 234   Public Square <br />
                    San Francisco  65368</h3><br />
                <h6>Contact Details</h6>
                <h3>(480) 555-0103</h3>
                <h3>finsweet@example.com</h3>
                <h6>Find us here</h6>

            </div>
        </div>
    </>
  )
}

export default Contact