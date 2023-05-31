 import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

function UpdateTaskModal (props) {

    const item = props.clickedTask;

    const updateTask = async (e) =>{
        e.preventDefault();
        try {
            const serverURL = process.env.REACT_APP_serverURL + `/updateTask/` + item.id;
        const obj = {
            task_type: e.target.task_type.value,
            due_date: e.target.due_date.value,
            activity:e.target.activity.value,
            comments:e.target.comments.value,
            is_completed:false
        }
        const result = await axios.put(serverURL,obj)
        console.log(`Updated`+result.data);
        props.handleCloseUpdateModal();
        props.refreshData(result.data)

        }
        catch (error) {
            console.log(error);
        }

    }
    return(<>
    {/* task_type
due_date
activity
comments
is_completed */}
    <Modal show={props.showUpdateFlag} onHide={props.handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateTask}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>task_type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter A Task Type"
                name="task_type"
                defaultValue={item.task_type}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>due_date</Form.Label>
              <Form.Control 
              type="text"
              name="due_date" 
              defaultValue={item.due_date} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Activity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Activity"
                name="activity"
                defaultValue={item.activity}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>comments</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Activity"
                name="comments"
                defaultValue={item.comments}
                autoFocus
              />
              
            </Form.Group>
            <Button type="submit" variant="success" name="submit" >Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseUpdateModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>)
}
export default UpdateTaskModal;