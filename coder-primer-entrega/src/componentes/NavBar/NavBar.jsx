import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="Nombre-empresa">Light-Vel</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Veladores</Nav.Link>
          <Nav.Link href="#pricing">lamparas</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};

export default NavBar;
