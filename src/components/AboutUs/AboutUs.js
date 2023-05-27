import TodoList from './TodoList.jpg'
import "./AboutUs.css"
import secimg from './secimg.jpg'

function AboutUs() {
    return (

        <div className='about'>

            <h1 >What's  special about our Website?!</h1>
            <div className='details'>
                <img src={TodoList} alt='todo' />
                <div className='par'>
                    <h2>Task<span className='genius'>Genius</span></h2>
                    <p><span className='check'>&#10004;</span> At Task Genius, we understand the importance of staying organized and being productive in today's fast-paced world. Our website is dedicated to providing you with a reliable and user-friendly platform that helps you effectively manage some choosen tasks and accomplish some goals</p>
                    <p><span className='check'>&#10004;</span> We believe that a well-organized and prioritized to-do list is the key to success.</p>

                </div>
            </div>

            <div className='extra'>
                <h1>So With Task Genius you can easily     </h1>
                <ul>
                    <li><span className='check'>&#10004;</span><span className='firstword'>  Do</span> several tasks</li>
                    <li> <span className='check'>&#10004;</span><span className='firstword' > Suggest</span> some tasks </li>
                    <li><span className='check'>&#10004;</span><span className='firstword'> Check</span> the due dates for the Tasks</li>
                    <li><span className='check'>&#10004;</span><span className='firstword'> Random </span> feature that provide random tasks depends on specific type</li>
                </ul>

            </div>
        </div>


    )
}
export default AboutUs;