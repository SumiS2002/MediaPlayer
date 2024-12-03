import { Navbar,Container } from "react-bootstrap"
import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
        <Navbar className="bg-info">
    <Link to={'/'} style={{textDecoration:'none'}}>
            <Container>
              <Navbar.Brand href="#home">
              <i className="me-2 fa-solid fa-headphones"></i>
                Media Player
              </Navbar.Brand>
            </Container>
    
    </Link>     
 </Navbar>
    </div>
  )
}

export default Header