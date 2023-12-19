import { Navbar, Nav, Container,  NavDropdown} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { LOGOUT } from "../../actions/userAction"
const Header = ()=>{
  const {userInfo} = useSelector((state)=> state.user)
  const dispatch = useDispatch()

const handleLogout = ()=>{
  dispatch(LOGOUT())
}
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

        {
          userInfo && userInfo.name ? (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <NavDropdown.Item>{userInfo.email}</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ):  
          <Link to="/signIn">
          <Nav.Link href="#link" style={{ fontSize: '1rem' }}>
            <i class="fa-regular fa-user"></i>
              SIGNUP</Nav.Link>
          
          </Link>
        }
           
             
            </Nav>
          </Navbar.Collapse>
       
            </Container>
      
      </Navbar>
    )
}
export default Header