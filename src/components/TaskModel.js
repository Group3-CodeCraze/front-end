import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';


function TaskModel(props) {
    const {username}=useContext(AuthContext)
    const getDefaultDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 2);
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();


        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };

    const sendToDbHandler = (e) => {
        e.preventDefault()
        const obj = {
            username:username,
            task_type: e.target.title.value,
            due_date: e.target.date.value,
            activity: e.target.task.value,
            comments: e.target.comment.value
        }
        console.log(obj)
        const serverURL = `http://localhost:3000/addtask`
        axios.post(serverURL, obj)
        props.handelclose()
    }



    return <>

        {props.selectedValue === "none" || props.selectedValue === "" ?
            <Modal show={props.showFlag} onHide={props.handelclose} >
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body>

                    <Card.Text name="type" type="text"  > please select type </Card.Text>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handelclose} >
                        Close
                    </Button>


                </Modal.Footer>
            </Modal>

            :

            <Modal show={props.showFlag} onHide={props.handelclose} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sendToDbHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>task type</Form.Label>
                            <Form.Control type="text" name="title" defaultValue={props.selectedValue} />
                            <Form.Label>task</Form.Label>
                            <Form.Control as="textarea" rows={3} name="task" defaultValue={props.generate} />
                            <Form.Label>due</Form.Label>

                            <Form.Control type="date" name="date" defaultValue={getDefaultDate()} />

                            <Form.Label>comment</Form.Label>
                            <Form.Control type="text" name="comment" defaultValue={""} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handelclose} >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={() => { sendToDbHandler() }} >
                        add to Home
                    </Button> */}


                </Modal.Footer>
            </Modal>
        }


    </>


}

export default TaskModel