import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './header/Header.css'
import { Image } from 'react-bootstrap';
import logo from  './header/ToDoLogo-01.png';

function Header() {
  const { username, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* nav bar colors change ! */}
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-toggle="collapse"
          className="custom-toggle"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          {/* insert logo  */}
          
          <Navbar.Brand as={Link} to="/">
          <Image src={logo} width={100} ></Image>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  eventKey="1" as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/RandomTask" className={location.pathname === '/RandomTask' ? 'active' : ''}>
              Random Task
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/MyTasks" className={location.pathname === '/MyTasks' ? 'active' : ''}>
              My Tasks
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/AboutUs" className={location.pathname === '/AboutUs' ? 'active' : ''}>
              About Us
            </Nav.Link>
            {/* login to right with icon of login */}

          </Nav>
        </Navbar.Collapse>
        <div className='right-side'>
          {username ? (
            <>
              <Nav.Link  id='nav-link-1' eventKey="5" >Hello {username}</Nav.Link>
              <Nav.Link  id='nav-link-2' eventKey="6" onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link id='nav-link-3' eventKey="7" as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </div>
      </Navbar>
    </>
  );
}

export default Header;
