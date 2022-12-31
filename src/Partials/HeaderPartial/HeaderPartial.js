import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";


export const HeaderPartial = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ATN Loja de Roupas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="minhas-pastas">Meus favoritos</Link>
            <Link className='nav-link' to="minhas-pastas">Carrinho</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}