

import { useContext, useEffect, useState } from "react";
import './MyTasks.css';
import { AuthContext } from "../AuthContext";
import { Button, Table } from "react-bootstrap";
import EditModal from "./EditModal";
import axios from "axios";
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
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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
        <>
            <h1>My Tasks</h1>
            <Button style={{ position: "relative", left: "46%", marginBottom: "10px" }} onClick={handelshow}> +</Button>
            <MDBTableBody>
                {updatedData.map((item, index) => (
                    <div className="taskCont" >
                        
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td className="task-content" style={{ fontSize: '20px', fontWeight: "500", color: "white" }}>{item.activity}</td>
                            <td>
                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Delete Task">
                                    <MDBIcon fas icon="trash-alt" size='xl' style={{ color: "red", paddingLeft: "8px", paddingRight: "8px" }} onClick={() => deleteItem(item)} />
                                </MDBTooltip>

                                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Done">

                                </MDBTooltip>
                            </td>
                        </tr>
                        </div>
                ))}
                   
                    
            </MDBTableBody>
            <EditModal showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} fromModal={fromModal} />
        </>
    );
}

export default MyTasks






