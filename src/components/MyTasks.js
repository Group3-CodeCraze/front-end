

import { useContext, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import './MyTasks.css';
import { AuthContext } from "../AuthContext";
import { Button, Table } from "react-bootstrap";
import EditModal from "./EditModal";
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

    const handleClick = () => {
    //   setColor('red');
    };
 
    
  
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
    
    const submithandler = async (item) => {
        setiscompleted(true)
        
        const serverURL = 
        `http://localhost:3000/updateGenTasks/${item.id}`
        const obj={
            ...item,
            is_completed:iscompleted
        };

        const result = await axios.put(serverURL,obj )
        console.log(result.data)

    }

     
   

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
            <Button style={{ position: "relative", left: "46%", marginBottom: "10px" ,background:" transparent"}} onClick={handelshow}> add</Button>

            {updatedData.map((item, index) => (

                <div className="taskCont" key={index} >
                    <div style={{ color: "white" }}>
                        {item.activity}</div>
                                      <div>

                    <span >
                    <i data-fa-symbol="favorite" class="fas fa-star fa-fw" style={{ color:item.is_completed?"green":"red" }} onClick={()=>{submithandler(item)}} ></i> 
                        </span>
                        
                        <span onClick={() => deleteItem(item)}>
                            <FontAwesomeIcon className="trash" icon={faTrash} />
                        </span>

                    </div>


                </div>


            ))}


            <EditModal showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} fromModal={fromModal} />
        </>
    );
}

export default MyTasks

