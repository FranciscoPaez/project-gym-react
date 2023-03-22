import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'


function NavBar() {
  return (
    <Navbar expand="lg" id='navBar'>
      <Container>
        <Navbar.Brand href="#home">
        <span className="nav-logo">Z</span><span className="mayusLogo">D</span><span className="point-logo">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks">
            <Nav.Link href="#" className='links'>Home</Nav.Link>
            <Nav.Link href="#" className='links'>Programs</Nav.Link>
            <Nav.Link href="#" className='links'>Plans</Nav.Link>
            <Nav.Link href="#" className='links'>Testimonials</Nav.Link>
            <Nav.Link href="#" className='links'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;