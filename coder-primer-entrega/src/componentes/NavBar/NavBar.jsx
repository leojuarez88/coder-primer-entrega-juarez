import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="m-2 p-1">
        <Link to="/">
          <Navbar.Brand href="Nombre-empresa">Light-Vel</Navbar.Brand>
        </Link>
        <Nav className="me-auto m-2">
          <NavLink to="/categoria/2" href="Lampara-pared">Lámparas de Pared</NavLink>
          <NavLink to="/categoria/3" href="Veladores">Veladores</NavLink>
          <NavLink to="/categoria/3" href="BarraIluminación">Barra de iluminación</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar 
