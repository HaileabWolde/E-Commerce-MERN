import { Navbar, Nav, Container} from "react-bootstrap"
import { Link } from "react-router-dom"
const Header = ()=>{
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <Link to="/">
              <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
              </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Link to="/cart/:id">
            <Nav.Link  href="#link" style={{ fontSize: '1rem' }}>
              <i class="fa-solid fa-cart-shopping"></i>
                CART</Nav.Link>
            
            </Link>
            <Link to="/signIn">
            <Nav.Link href="#link" style={{ fontSize: '1rem' }}>
              <i class="fa-regular fa-user"></i>
                SIGNUP</Nav.Link>
            
            </Link>
             
            </Nav>
          </Navbar.Collapse>
       
            </Container>
      
      </Navbar>
    )
}
export default Header