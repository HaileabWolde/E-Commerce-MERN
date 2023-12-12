import { Navbar, Nav, Container} from "react-bootstrap"
const Header = ()=>{
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"  style={{ fontSize: '1rem' }} >
              <i class="fa-solid fa-cart-shopping"></i>
                CART</Nav.Link>
              <Nav.Link href="#link" style={{ fontSize: '1rem' }}>
              <i class="fa-regular fa-user"></i>
                SIGNUP</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
       
            </Container>
      
      </Navbar>
    )
}
export default Header