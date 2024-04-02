import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
	<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to={'/'}>React Login Template</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={'/'}>Home</Link>
            <Link className="nav-link" to={'/login'}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}

export default NavBar;
