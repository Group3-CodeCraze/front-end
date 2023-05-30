import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return <>
        <Navbar  variant="dark" fixed='bottom' >
            <Container style={{display:'flex',justifyContent:'space-between'}}>
                <Navbar.Brand href="/">Task Genius</Navbar.Brand>
                <Nav >
                    <Nav.Link href="https://github.com/Group3-CodeCraze">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    </>
}

export default Footer