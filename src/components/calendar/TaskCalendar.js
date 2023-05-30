

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './taskCalendar.css';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState(null);

  const { username } = useContext(AuthContext);


  

  const handleDayClick = async (date) => {
    if (!date) {
      return;
    }

    setSelectedDate(date);
    try {
      const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      const formattedDate = adjustedDate.toISOString().split('T')[0];
      const response = await axios.get(
        process.env.REACT_APP_serverURL + '/getCalendarDate/' + username + '/' + formattedDate
      );
      setTaskData(response.data[0]); // Assuming the response is an array with a single task object
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching task data:', error);
    }
  };

  const fetchCalendarData = async () => {
    try {
      const adjustedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
      const formattedDate = adjustedDate.toISOString().split('T')[0];
      const response = await axios.get(
        process.env.REACT_APP_serverURL + '/getCalendarDate/' + username
      );
      const datesWithTasks = response.data.map((item) => new Date(item.due_date));
      setCalendarData(datesWithTasks);
    } catch (error) {
      console.error('Error fetching calendar data:', error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTaskData(null);
  };
  const tileContent = ({ date }) => {
    const currentDate = new Date();
    const dateString = date.toISOString().split('T')[0];
    const hasTask = calendarData.some(
      (calendarDate) => calendarDate.toISOString().split('T')[0] === dateString
    );
  
    const isPastDate = date < currentDate;
    const isUpcomingDate = date > currentDate;
  
    // Render the marker if there is a task for the current date (past or upcoming)
    return (
      <div className={`day-marker ${hasTask ? 'has-task' : ''} ${isPastDate ? 'past-date' : ''} ${isUpcomingDate ? 'upcoming-date' : ''}`}></div>
    );
  };

  const handleAdding = async (e) =>{
    e.preventDefault();
    const serverURL = `${process.env.REACT_APP_serverURL}/addtask`;

    const timezoneOffset = selectedDate.getTimezoneOffset();

    // Adjust the selected date by subtracting the offset
    const adjustedDate = new Date(selectedDate.getTime() - timezoneOffset * 60000);
  
    // Format the adjusted date
    const formattedDate = adjustedDate.toISOString().split('T')[0];
    

    const obj ={ 
      username : username,
      task_type:e.target.task_type.value,
      due_date : formattedDate,
      activity : e.target.activity.value,
      comments : e.target.comments.value
    }
    const result = await axios.post(serverURL,obj)
    handleModalClose();


  }
  useEffect(() => {
    if (username) {
      fetchCalendarData();
    }
    
    
  }, [username, selectedDate]);

  return (
    <Container className='Calendar_box'>
      <Row>
        <Col>
          <h1 className='Calendar-Header'>Calendar</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Calendar value={selectedDate} onClickDay={handleDayClick} tileContent={tileContent} />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {taskData ? (
            <>
              <p>
                <strong>Task Type:</strong> {taskData.task_type}
              </p>
              <p>
                <strong>Activity:</strong> {taskData.activity}
              </p>
              <p>
                <strong>Comments:</strong> {taskData.comments}
              </p>
            </>
          ) : (
            <>
              <p>No task available for this date.</p>
              <Form onSubmit={handleAdding}>
              <input type='text' 
               placeholder='Add a task Type'
               name='task_type' />
                <input type='text'
               placeholder='Add a activity for this day' 
               name='activity'
               />
              <input type='text'
               placeholder='Add some comments'
               name='comments' />
              <Button type='submit'>Submit</Button>
              </Form>
            </>

          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default CalendarPage;
