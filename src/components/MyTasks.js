// import { useContext, useEffect, useState } from "react";
// import Card from 'react-bootstrap/Card'; import './MyTasks.css'
// import { AuthContext } from "../AuthContext";
// import { Button } from "react-bootstrap";
// import EditModal from "./EditModal";
// import axios from "axios";
// import ReactCardFlip from "react-card-flip";



// function MyTasks() {

//     const [updatedData, setUpdatedData] = useState([])

//     const [showFlag, setShowFlag] = useState(false)

//     const [flip, setFlip] = useState(false);



//     const handelshow = () => {
//         setShowFlag(true)
//     }


//     const fromModal = (newModal) => {
//         setUpdatedData(newModal)
//     }
//     const { username } = useContext(AuthContext);
//     const [tasks, setTasks] = useState([]);


//     const handelclose = () => {

//         setShowFlag(false)


//     }

//     const getTasks = () => {
//         const URL = `http://localhost:3000/gettasks?username=${username}`
//         axios.get(URL)
//             .then((response) => {

//                 setTasks(response.data)


//             })
//     }

//     const markAsFinished = (index) => {
//         const updatedTasks = [...tasks];
//         updatedTasks[index] = (
//             <span style={{ color: "green", textDecoration: 'line-through' }}>{updatedTasks[index]}</span>
//         );
//         setTasks(updatedTasks);
//     };

//     useEffect(() => {
//         setUpdatedData(tasks)
//         getTasks()
//     }, [tasks], [username])





//     return (
//         <>

//             <h1 >My Tasks</h1>
//             <Button style={{ position: "relative", left: "46%" }} onClick={handelshow}> +</Button>

//             <div className="tasks">
//                 {updatedData.map((item) => {
//                     return <>


//                     </>

//                 })}
//             </div>

//             <EditModal showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} fromModal={fromModal} />

//         </>
//     )
// }
// export default MyTasks;
import { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
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

    const markAsFinished = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = (
            <span style={{ color: "green", textDecoration: "line-through" }}>
                {updatedTasks[index]}
            </span>
        );
        setTasks(updatedTasks);
    };

    useEffect(() => {
        setUpdatedData(tasks);
        getTasks();
    }, [tasks, username]);

    return (
        <>

            <h1 >My Tasks</h1>
            <Button style={{ position: "relative", left: "46%" ,marginBottom:"10px"}} onClick={handelshow}> +</Button>
            <MDBTableBody>
                {updatedData.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id + 1}</th>
                        <td className="task-content" style={{ fontSize: '20px', fontWeight: "500" }}>{item.activity}</td>

                        <td>

                            <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Delete Task">
                                <MDBIcon fas icon="trash-alt" size='xl'
                                    //   onClick={() => deleteTask(index)}
                                    style={{ color: "red", paddingLeft: "8px", paddingRight: "8px" }} />
                            </MDBTooltip>

                            <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Edit Task">
                                <MDBIcon fas icon="edit" size='xl'
                                    // onClick={handleShowModal}
                                    style={{ color: "", paddingLeft: "8px", paddingRight: "8px" }} />
                            </MDBTooltip>

                            <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Done">
                                <MDBIcon far icon="check-circle" size='xl'
                                    onClick={() => markAsFinished(item.markAsFinished)}
                                    style={{ color: "green", paddingLeft: "8px", paddingRight: "8px" }} />

                            </MDBTooltip>

                        </td>
                    </tr>
                ))}
            </MDBTableBody>



            <EditModal showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} fromModal={fromModal} />
        </>
    );
}

export default MyTasks;
