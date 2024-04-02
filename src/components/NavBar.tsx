import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {

  const { user, logout } = useAuth();

	return (
	<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to={'/'}>
          <i className="fa fa-cube"></i>React<b>Login</b>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={'/'}>Home</Link>
            <Link className="nav-link" to={'/login'}>Login</Link>
          </Nav>
          {user && (
            <Nav className="navbar-nav ml-auto">
              <a href="#" className="nav-item nav-link notifications">
                <i className="fa fa-bell-o"></i>
                <span className="badge text-black">1</span>
              </a>
              <a href="#" className="nav-item nav-link messages">
                <i className="fa fa-envelope-o"></i>
                <span className="badge text-black">10</span>
              </a>

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                <img src="vite.svg" className="avatar me-2" style={{'width': '20px'}} alt="Avatar" />
                  {user?.firstname}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="dropdown-item" to={'/account'}>My account</Link>
                  <Link className="dropdown-item" onClick={logout}>Disconnect</Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}


export default NavBar;
