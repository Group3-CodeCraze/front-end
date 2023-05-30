import { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import './MyTasks.css'
import { AuthContext } from "../AuthContext";
import axios from "axios";

function MyTasks() {
    const { username } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        const URL = `http://localhost:3000/gettasks?username=${username}`; // Include username in the URL
        axios.get(URL)            
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getTasks();
    }, [username]);

    return (
        <>
            <h1>My Tasks</h1>

            <div className="tasks">
                {tasks.map((item) => (
                    <div key={item.id}>
                        <br />
                        <Card className="card" style={{ width: '15rem', color: 'black', height: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="title">{item.task_type}</Card.Title>
                                <Card.Text>{item.activity}</Card.Text>
                                <Card.Text>{item.due_date}</Card.Text>
                                <Card.Text>{item.comments}</Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyTasks;
