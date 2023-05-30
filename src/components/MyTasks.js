import { useContext, useEffect, useState } from "react";
import './MyTasks.css';
import { AuthContext } from "../AuthContext";
import { Button, Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import EditModal from "./EditModal";
import TaskCalendar from "./calendar/TaskCalendar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBIcon,
    MDBTooltip
} from "mdb-react-ui-kit";

function MyTasks() {
    const [updatedData, setUpdatedData] = useState([]);
    const [showFlag, setShowFlag] = useState(false);
    const { username } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [iscompleted, setiscompleted] = useState(false);

    const handelshow = () => {
        setShowFlag(true);
    };

    const fromModal = (newModal) => {
        setUpdatedData(newModal);
    };

    const handelclose = () => {
        setShowFlag(false);
    };

    const getTasks = () => {
        const URL = `http://localhost:3000/gettasks?username=${username}`;
        axios.get(URL).then((response) => {
            setTasks(response.data);
        });
    };

    // const submithandler = async (item) => {
    //     setiscompleted(true)

    //     const serverURL =
    //         `http://localhost:3000/updateGenTasks/${item.id}`
    //     const obj = {
    //         ...item,
    //         is_completed: iscompleted
    //     };

    //     const result = await axios.put(serverURL, obj)

    // }
    const submithandler = async (itemId) => {
        const serverURL = `http://localhost:3000/updateGenTasks/${itemId}`;
        const updatedTasks = tasks.map((task) => {
          if (task.id === itemId) {
            const updatedTask = { ...task, is_completed: !task.is_completed };
            axios.put(serverURL, updatedTask);
            return updatedTask;
          }
          return task;
        });
        setTasks(updatedTasks);
      };
    const deleteItem = (item) => {

        const serverURL = `http://localhost:3000/deleteTask/${item.id}`
        axios.delete(serverURL)
            .then(data => {
                const serverURL = `http://localhost:3000/gettasks`
                axios.get(serverURL)
                    .then(data => {
                        setUpdatedData(data.data)
                    })
            })

    }

    useEffect(() => {
        setUpdatedData(tasks);
        getTasks();
    }, [tasks, username]);

    return (
        <div className="main-todo-container" style={{ backgroundColor: "#9AA5B1" }}>

            <MDBContainer className="py-5" style={{ backgroundColor: "#9AA5B1" }}>
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="9" xl="7">
                        <MDBCard className="rounded-3" style={{ height: "100%" }}>
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">To Do App</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBBtn type="submit" onClick={handelshow}>
                                            Add Task
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <div className="table-container">
                                    <MDBTable className="mb-4" responsive>
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                        {updatedData.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td className={`task-content ${item.is_completed ? 'completed' : ''}`}>
                                                {item.activity}
                                            </td>
                                            <td>
                                            <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Delete Task">
                                                            <MDBIcon fas icon="trash-alt" size='xl'
                                                                onClick={() => deleteItem(item)}
                                                                style={{ color: "red", paddingLeft: "8px", paddingRight: "8px" }} />
                                                        </MDBTooltip>
                                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Done">
                                                    <MDBIcon
                                                        far
                                                        icon="check-circle"
                                                        size='xl'
                                                        onClick={() => { submithandler(item.id) }}
                                                        style={{ color: "green", paddingLeft: "8px", paddingRight: "8px" }}
                                                    />
                                                </MDBTooltip>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
            </MDBContainer >

            <TaskCalendar />
            <EditModal showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} fromModal={fromModal} />
        </div >

    );
}

export default MyTasks;
