import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({ username }) {
  const [loggedInUsername, setLoggedInUsername] = useState('');

  useEffect(() => {
    setLoggedInUsername(username);
  }, [username]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task Genius</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUS">AboutUS</Nav.Link>
            <Nav.Link href="/RandomTask">RandomTask</Nav.Link>
            <Nav.Link href="/MyTasks">MyTasks</Nav.Link>
            {loggedInUsername ? (
              <>
                <Nav.Link>Hello {loggedInUsername}</Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Log Out
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
