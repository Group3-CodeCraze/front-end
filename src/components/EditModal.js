import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';



function EditModal(props) {
  const [renderdata,setrenderdata]=useState([])
  const {username}=useContext(AuthContext);

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


  const sendToDbHandler = async (e) => {
    e.preventDefault()
    const obj = {
      username:username,
      task_type: e.target.title.value,
      due_date: e.target.date.value,
      activity: e.target.task.value,
      comments: e.target.comment.value
    }
    console.log(obj)
    const serverURL = `${process.env.REACT_APP_serverURL}/addtask`
    await axios.post(serverURL, obj).then(data=>{
      const serverURL = `${process.env.REACT_APP_serverURL}/gettasks`
      axios.get(serverURL).then(data=>{
           props.fromModal(data.data)
      })

    })
    props.handelclose()
  }
 
 
  return <>
    <Modal show={props.showFlag} onHide={props.handelclose}  >
      <Modal.Header closeButton className='modal-header'>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Form  onSubmit={sendToDbHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>task type</Form.Label>
            <Form.Control type="text" name="title" defaultValue={""} />
            <Form.Label>task</Form.Label>
            <Form.Control type="text" name="task" defaultValue={""} />
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

      <Modal.Footer className='modal-footer'>
        <Button variant="secondary" onClick={props.handelclose} >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}

export default EditModal