
import { useNavigate } from 'react-router-dom';

// import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';


function Home() {

    const { username } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    };

    return (
        <>
            <div className='home-page'>

                <div className='text'>
                    <h3>“Shoot for the <span className="text-stars">Stars</span>. Even if you miss, you'll land on the moon.”</h3>
                    </div>               
                <button className='main-button' onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Let's stars
                </button>

            </div>



























            {/* <Carousel slide={true} className='carousel' >
                
                <Carousel.Item>
                    <img
                        className="img"
                        src={require('./BackGimag2-01-01.png')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Success is a journey</h3>
                        <button className='uniqBt' onClick={handleClick}>Let's Start</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src={require('./BackGimag1-01.png')}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Starts with a plan</h3>
                        <button className='uniqBt' onClick={handleClick}>Let's Start</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src={require('./BackGimag3-01.png')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ends up achieving it</h3>
                        <button className='uniqBt' onClick={handleClick}>Let's Start</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </>
    );
}
export default Home;
