import React from 'react'
import boys from './img/boys.png'
import './Blog.css'
const Blog = () => {
  return (
    <>
        <div className="our">
            <h5>OUR BLOG</h5>
            <h1>most recent post</h1>
        </div>
        <div className="more">
            <div className="boys">
                <img src={boys} alt="" />
            </div>
            <div className="often">
                <p>Tuesday 13 May, 2022</p>
                <p>By John Hunau Deo</p>
                <h1>Church was doing what he often <br /> did when dropped An oracle </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />  Duis aute irure dolor.</p>
                <button className='readMore'>Read more</button>

            </div>
        </div>
        <div className="all">
            <div className="allPost">
                {/* <h1>ALL BLOG POSTS</h1> */}
                <div className="kard">
                    <h6>Relationship</h6>
                    <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                    <h5>By Mathew Johnson</h5>
                    <h5>Tuesday 13 May, 2018</h5>
                </div><br />
                <div className="kard">
                    <h6>Relationship</h6>
                    <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                    <h5>By Mathew Johnson</h5>
                    <h5>Tuesday 13 May, 2018</h5>
                </div><br />
                <div className="kard">
                    <h6>Relationship</h6>
                    <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                    <h5>By Mathew Johnson</h5>
                    <h5>Tuesday 13 May, 2018</h5>
                </div>
                <div className="kard">
                    <h6>Relationship</h6>
                    <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                    <h5>By Mathew Johnson</h5>
                    <h5>Tuesday 13 May, 2018</h5>
                </div> 
                
            </div>
            <div className="past">
                    <div className="kard">
                        <h6>Relationship</h6>
                        <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        <h5>By Mathew Johnson</h5>
                        <h5>Tuesday 13 May, 2018</h5>
                    </div>
                    <div className="kard">
                        <h6>Relationship</h6>
                        <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        <h5>By Mathew Johnson</h5>
                        <h5>Tuesday 13 May, 2018</h5>
                    </div>
                    <div className="kard">
                        <h6>Relationship</h6>
                        <h3>THE BEST WAY TO <br /> INSPIRE PEOPLE</h3>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
                        <h5>By Mathew Johnson</h5>
                        <h5>Tuesday 13 May, 2018</h5>
                    </div>
            </div>
        </div>
    </> 
  )
}

export default Blog