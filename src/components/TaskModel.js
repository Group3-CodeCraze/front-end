import Modal from 'react-bootstrap/Modal';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function TaskModel(props) {


    

   
    return <>
         
         {props.selectedValue === "none" || props.selectedValue === ""? 
                <Modal show={props.showFlag} onHide={props.handelclose} >
                <Modal.Header closeButton>
                </Modal.Header>
                
                <Modal.Body>
    
                    <Card.Text name="title" type="text" > please select type </Card.Text>
                   
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
                    <Card.Text name="title" type="text" > Your task is: {props.generate} </Card.Text>
              
                    <Card.Text ><input name="date" type="date" ></input>  </Card.Text>
                
                
                    <Card.Text  > <input name="comment" type="text"></input> </Card.Text>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handelclose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handelclose} >
                        add to Home
                    </Button>

    
                </Modal.Footer>
            </Modal> }

        
    </>


}

export default TaskModel