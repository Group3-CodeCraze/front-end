import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
    return (
        
   
<Navbar bg="dark" variant="dark"className="Footer">
                <Container>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="/">codecraze team</Nav.Link>
                        {/* {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">about us</Nav.Link> */} 
                    </Nav>
                </Container>
            </Navbar>
    )
}
export default Footer;