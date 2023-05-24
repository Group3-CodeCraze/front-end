import Home from "./component/home/Home";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header ()
{
  return(
    <>
    
<Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#about us">about us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    <Home />
    </>
  )
}
export default Header