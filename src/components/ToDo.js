import React, { useState } from "react";
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

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const markAsFinished = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = (
      <span style={{ color: "green", textDecoration: 'line-through' }}>{updatedTasks[index]}</span>
    );
    setTasks(updatedTasks);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#9AA5B1" }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#9AA5B1" }}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3" >
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="submit" onClick={addTask}>
                      Add Task
                    </MDBBtn>
                  </MDBCol>
                  {/* <MDBCol size="12">
                    <MDBBtn type="submit" color="warning">
                    <MDBIcon fas icon="pencil-alt" /> Edit Task
                    </MDBBtn>
                  </MDBCol> */}
                </MDBRow>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {tasks.map((task, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td className="task-content" style={{ fontSize: '20px', fontWeight: "500" }}>{task}</td>
                        <td>In progress</td>
                        <td>

                          <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Delete Task">
                            <MDBIcon fas icon="trash-alt" size='xl'
                              onClick={() => deleteTask(index)}
                              style={{ color: "red", paddingLeft: "8px", paddingRight: "8px" }} />
                          </MDBTooltip>

                          <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Edite Task">
                            <MDBIcon fas icon="edit" size='xl'
                              style={{ color: "", paddingLeft: "8px", paddingRight: "8px" }} />
                          </MDBTooltip>

                          <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Done">
                            <MDBIcon far icon="check-circle" size='xl'
                              onClick={() => markAsFinished(index)}
                              style={{ color: "green", paddingLeft: "8px", paddingRight: "8px" }} />

                          </MDBTooltip>
                          
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
