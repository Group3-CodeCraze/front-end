// import TodoList from './Photos/TodoList.jpg'
import "./AboutUs.css"
import React from 'react';
import { useEffect } from "react";
import ramawael from './Photos/ramawael.jpg';
import abdallah from './Photos/abdallah.jpg';
import Ammar from './Photos/Ammar.jpg';
import Ahmad from './Photos/Ahmad.jpg';
import AlHareth from './Photos/AlHareth.jpg'
import logo from './TaskTracker-01.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

function AboutUs() {
    const teamMembers = [
        { id: 1, name: 'Ammar', photoUrl: Ammar, github: 'https://github.com/AMMARALBESANI' },
        { id: 2, name: 'Abdallah', photoUrl: abdallah, github: 'https://github.com/Abdallahalomarii' },
        { id: 3, name: 'Rama', photoUrl: ramawael, github: 'https://github.com/ramawm20' },
        { id: 4, name: 'Ahmad', photoUrl: Ahmad, github: 'https://github.com/ahmadjamalkhater' },
        { id: 5, name: 'Al Hareth', photoUrl: AlHareth, github: 'https://github.com/alharet7'  }
    ];

    useEffect(() => {

        Aos.init({
          duration:2000, 
        }); },[]);
    return (

        <div className='about'>

            <h1 className="aboutus-h1" >About us</h1>
            <div className='details' data-aos="zoom-in">
                {/* <img src={TodoList} alt='todo' /> */}
                <div className='par'>
                    {/* <h2>Task<span className='genius'>Genius</span></h2> */}
                    <img src={logo} alt='logo' className="logoimage" />
                    <p><span className='check'>&#10004;</span> At Task Tracker, we understand the importance of staying organized and being productive in today's fast-paced world. Our website is dedicated to providing you with a reliable and user-friendly platform that helps you effectively manage some choosen tasks and accomplish some goals</p>
                    <p><span className='check'>&#10004;</span> We believe that a well-organized and prioritized to-do list is the key to success.</p>
                </div>
            </div>
            <div className='extra' data-aos="zoom-in-up">
                <h1>So With Task Tracker you can easily     </h1>
                <ul>
                    <li><span className='check'>&#10004;</span><span className='firstword'>  Do</span> several tasks</li>
                    <li> <span className='check'>&#10004;</span><span className='firstword' > Suggest</span> some tasks </li>
                    <li><span className='check'>&#10004;</span><span className='firstword'> Check</span> the due dates for the Tasks</li>
                    <li><span className='check'>&#10004;</span><span className='firstword'> Random </span> feature that provide random tasks depends on specific type</li>
                </ul>
            </div>





            
            
            <div className="team-card-container" data-aos="zoom-in-up">
                <h1 className='team'>Team Members</h1>
                <br />
                {teamMembers.map((member) => (
                    <div className="team-card" key={member.id} data-aos="flip-right">
                        <h2 style={{ textAlign: 'center', color: 'white' }}>{member.name}</h2>

                        <img src={member.photoUrl} alt={member.photoUrl} />
                        <br />
                        <a href={member.github} target='blank'><i id='github' className="fa-brands fa-github"></i></a>
                    </div>
                ))}
            </div>
        </div>


    )
}
export default AboutUs;