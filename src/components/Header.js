
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header (){
    return<>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task Genius</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUS">AboutUS</Nav.Link>
            <Nav.Link href="/RandomTask">RandomTask</Nav.Link>
            <Nav.Link href="/MyTasks">MyTasks</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
    </>
}

export default Header