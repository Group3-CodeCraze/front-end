import TodoList from './TodoList.jpg'
import "./AboutUs.css"

function AboutUs() {
    return (
        <>

            <div className='about'>
                <h1 >What's  special about our Website?!</h1>
                <div className='details'>
                    <img src={TodoList} />
                    <div className='par'>
                        <h2>Task<span className='genius'>Genius</span></h2>
                        <p>*At Task Genius, we understand the importance of staying organized and being productive in today's fast-paced world. Our website is dedicated to providing you with a reliable and user-friendly platform that helps you effectively manage some choosen tasks and accomplish some goals</p>
                        <p>*We believe that a well-organized and prioritized to-do list is the key to success.</p>
                        <p>*So With Task Genius you can easily 
                            <ul>
                                <li>Do several tasks</li>
                                <li>Suggest some tasks </li>
                                <li>Check the due dates for the Tasks</li>
                                <li>We offer random feature that provide random tasks depends on specific type</li>
                            </ul>
                        </p>

                    </div>
                </div>

            </div>
           {/*  <div className='contact'>
                <h2>Contact</h2>
               

            </div> */}

        </>
    )
}
export default AboutUs;