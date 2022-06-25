import React from 'react';
import '../Sermonevent/Sermonevent.css'


const Sermonevebt = () => {
    const send = (e) => {
        e.preventDefault()
    }
    const sermontmas = [
        {
            id: 0,
            name: '100 RANDOM ACTS OF KINDNESS',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            vaqt: 'Friday 23:39 IST Saturday 11:20 ISD',
            search: 'No 233 Main St. New York, United States'
        },
        {
            id: 1,
            name: '100 RANDOM ACTS OF KINDNESS',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            vaqt: 'Friday 23:39 IST Saturday 11:20 ISD',
            search: 'No 233 Main St. New York, United States'
        },
        {
            id: 2,
            name: '100 RANDOM ACTS OF KINDNESS',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            vaqt: 'Friday 23:39 IST Saturday 11:20 ISD',
            search: 'No 233 Main St. New York, United States'
        },
        {
            id: 3,
            name: '100 RANDOM ACTS OF KINDNESS',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            vaqt: 'Friday 23:39 IST Saturday 11:20 ISD',
            search: 'No 233 Main St. New York, United States'
        },
    ]
    return (
        <div className='sermontevent'>
            <div className="sermonteventheader">
                <div className="left">
                    <img src="./img/semontevent.png" alt="" />
                    <a href=".">Upcoming Event</a>
                    <h2>HOW TO TRULY TRUST SOMEONE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
                    </p>
                    <span>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
                </div>
                <div className="right">
                    <h3>REGISTER NOW</h3>
                    <div className="formhead">
                        <div className="formheadleft">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            No 233 Main St. New York, United States
                        </div>
                        <div className="formheadright">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                            13 May, 2018
                        </div>
                    </div>
                    <form onSubmit={send} className='form'>
                        <label htmlFor="fulname">Full name</label>
                        <input type="text" id='fulname' placeholder='Leonard John' />
                        <label htmlFor="Email">Full name</label>
                        <input type="Email" id='Email' placeholder='admin@abc.com' />
                        <button type='submit' className='registernow'>Register now</button>
                    </form>
                </div>
            </div>
            <h1>Upcoming Sermons</h1>
            <div className="sermoneventcards">
                {
                    sermontmas.map((val) => (
                        <div className="sermoneventcard" key={val.id}>
                            <h6>20</h6>
                            <p>july</p>
                            <a href=".">Upcoming Event</a>
                            <h4>{val.name}</h4>
                            <span>{val.p}</span>
                            <div className="vaqt">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                Friday 23:39 IST Saturday 11:20 ISD
                            </div>
                            <div className="vaqt">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                </svg>
                                No 233 Main St. New York, United States
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sermonevebt;