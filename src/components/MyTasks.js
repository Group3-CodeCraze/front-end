import { useContext, useEffect, useState } from "react";
import "./MyTasks.css";
import { AuthContext } from "../AuthContext";
import EditModal from "./EditModal";
import TaskCalendar from "./calendar/TaskCalendar";
import axios from "axios";
import 'aos/dist/aos.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
  MDBTooltip,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import UpdateTaskModal from "./taskModal/UpdateTaskModal";
import { Button, Card, Modal } from "react-bootstrap";
import Aos from "aos";

function MyTasks() {
  const [updatedData, setUpdatedData] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const { username } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [iscompleted, setiscompleted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpdateFlag, setShowUpdateFlag] = useState(false);
  const [clickedTask, setClickedTask] = useState({});

  const handelshow = () => {
    if (!username) {
      return false;
    }

    setShowFlag(true);
  };

  const fromModal = (newModal) => {
    setUpdatedData(newModal);
  };

  const handelclose = () => {
    setShowFlag(false);
  };

  const getTasks = () => {
    const URL =
      process.env.REACT_APP_serverURL +
      `/gettasks?username=${username}&search=${searchQuery}`;
    axios.get(URL).then((response) => {
      setTasks(response.data);
    });
  };

  const submithandler = async (itemId) => {
    const serverURL =
      process.env.REACT_APP_serverURL + `/updateGenTasks/${itemId}`;
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

  const handleUpdateModal = (item) => {
    setShowUpdateFlag(true);
    setClickedTask(item);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateFlag(false);
  };

  const refreshData = (arr) => {
    setUpdatedData(arr);
  };

  const deleteItem = (item) => {
    const serverURL =
      process.env.REACT_APP_serverURL + `/deleteTask/${item.id}`;
    axios.delete(serverURL).then((data) => {
      const serverURL = process.env.REACT_APP_serverURL + `/gettasks`;
      axios.get(serverURL).then((data) => {
        refreshData(data.data);
      });
    });
  };

  useEffect(() => {

    Aos.init({
      duration:2000, 
    })

    setUpdatedData(tasks);
    getTasks();
  }, [tasks, username]);

  return <>
    {
      <div className="main-todo-container" >
        <MDBContainer data-aos="fade-up" >
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="9" xl="7" >
              <MDBCard className="rounded-3" style={{ height: "100%" }}>
                <MDBCardBody className="p-4">
                  <h4 className="text-center my-3 pb-2" style={{ color: "floralwhite" }}>To Do App</h4>
                  <MDBRow className="row-cols-lg-auto mb-2 pb-2">
                    <MDBCol size="12" lg="6">
                      {/* <MDBBtn type="submit" onClick={handelshow} >
                    Add Task
                  </MDBBtn> */}
                      <button class="addbt" onClick={handelshow}>
                      Add Task
                      </button>
                    </MDBCol>
                    <MDBCol size="12" lg="6">
                      <MDBInputGroup>
                        <MDBInput
                          label="Search"
                          name="search"
                          placeholder="Search for a Task"
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                          }}
                        />
                      </MDBInputGroup>
                    </MDBCol>
                  </MDBRow>
                  <div className="table-container">
                    <MDBTable className="mb-4" responsive>
                      <MDBTableHead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">To-Do</th>
                          <th scope="col">Comments</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {updatedData.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td
                              className={`task-content ${item.is_completed ? "completed" : ""
                                }`}
                            >
                              {item.activity}
                            </td>
                            <td
                              className={`task-content ${item.is_completed ? "completed" : ""
                                }`}
                            >
                              {item.comments}
                            </td>
                            <td className="actions">
                              <MDBTooltip tag="a" wrapperProps={{ href: "#" }} title="Delete Task">
                                <MDBIcon
                                  fas
                                  icon="trash-alt"
                                  size="xl"
                                  onClick={() => deleteItem(item)}
                                  style={{
                                    color: "red",
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                  }}
                                />
                              </MDBTooltip>
                              <MDBTooltip tag="a" wrapperProps={{ href: "#" }} title="Edit Task" className="edit-class">
                                <MDBIcon
                                  fas
                                  icon="edit"
                                  size="xl"
                                  onClick={() => {
                                    handleUpdateModal(item);
                                  }}
                                  style={{
                                    color: "",
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    paddingBottom:"8px",
                                  }}
                                />
                              </MDBTooltip>
                              <MDBTooltip tag="a" wrapperProps={{ href: "#" }} title="Done">
                                <MDBIcon
                                  far
                                  icon="check-circle"
                                  size="xl"
                                  onClick={() => {
                                    submithandler(item.id);
                                  }}
                                  style={{
                                    color: "green",
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                  }}
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
        </MDBContainer>
        <UpdateTaskModal
          showUpdateFlag={showUpdateFlag}
          clickedTask={clickedTask}
          handleCloseUpdateModal={handleCloseUpdateModal}
          refreshData={refreshData}
        />
        <EditModal
          showFlag={showFlag}
          handelshow={handelshow}
          handelclose={handelclose}
          fromModal={fromModal}
        />
        <div className="task-calendar-container" data-aos="fade-up">
          <TaskCalendar />
        </div>
      </div>


    }
  </>
}

export default MyTasks;
