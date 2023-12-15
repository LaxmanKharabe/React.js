import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="light" className='fixed-top mb-5'>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#" className="nav-link active">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Link
          </Nav.Link>
          <NavDropdown title="Dropdown" id="navbarDropdown">
            <NavDropdown.Item href="#" className="dropdown-item">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="dropdown-item">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" className="dropdown-item">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className="nav-link disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="form-control me-2"
          />
          <Button variant="outline-success" type="submit" className="btn btn-outline-success">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
