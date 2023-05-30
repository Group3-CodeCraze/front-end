
import { useNavigate } from 'react-router-dom';
import './BackGimag1-01.png'
import './BackGimag2-01-01.png'
import './BackGimag3-01.png'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

// function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div>

//       <button onClick={handleClick}>Go to Login</button>
//     </div>
//   );
// }

// export default Home;

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <>
            <Carousel slide={true} className='carousel' >
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
            </Carousel>
        </>
    );
}
export default Home;
