import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navegation() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-white" >
        <Container className='navorder'>
          <div>
            <Navbar.Brand as={Link} to="/"><img id='logo' src="../img/logo-negro.png" alt="logo" /></Navbar.Brand >
            <Navbar.Brand as={Link} to="/"><img id='logo-figura' src="../img/Screenshot_1.png" alt="logo" width={'100px'} /></Navbar.Brand >
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  as={Link} to="/">Home</Nav.Link>
                <Nav.Link  as={Link} to="/menu">Menú</Nav.Link>
                
                <Nav.Link  as={Link} to="/about">Nosotros</Nav.Link>
                <Nav.Link  as={Link} to="/reserva">Reserva Aquí</Nav.Link>
                <Nav.Link as={Link} to="/crudmenu">Crud Menu</Nav.Link>
                
                <NavDropdown title="Log In" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  href=''><img className="logo" src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="Instagram" width="24px" height="24px"/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>  
        </Container>
      </Navbar>
    </header>
  );
}

export default Navegation;

