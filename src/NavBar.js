import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rameez is cool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="second">Second Page</Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="/">Also Home</NavDropdown.Item>
            <NavDropdown.Item href="second">Thi- Second page</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
