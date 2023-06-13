import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="m-2 p-1">
        <Navbar.Brand href="Nombre-empresa">Light-Vel</Navbar.Brand>
        <Nav className="me-auto m-2">
          <Nav.Link href="Lampara-pared">Lámparas de Pared</Nav.Link>
          <Nav.Link href="Veladores">Veladores</Nav.Link>
          <Nav.Link href="BarraIluminación">Barra de iluminación</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar 
