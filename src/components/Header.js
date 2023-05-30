import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './header/Header.css'

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
      <Navbar >
        <Container>
          {/* insert logo  */}
          <Navbar.Brand as={Link} to="/">
            Task Genius
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/RandomTask" className={location.pathname === '/RandomTask' ? 'active' : ''}>
              Random Task
            </Nav.Link>
            <Nav.Link as={Link} to="/MyTasks" className={location.pathname === '/MyTasks' ? 'active' : ''}>
              My Tasks
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className={location.pathname === '/AboutUs' ? 'active' : ''}>
              About Us
            </Nav.Link>
            {/* login to right with icon of login */}
         
          </Nav>
        </Container>
        <div className='right-side'>
           {username ? (
              <>
                <Nav.Link>Hello {username}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
           </div>
      </Navbar>
    </>
  );
}

export default Header;
