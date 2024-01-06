import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import './index.css'

import {Link} from 'react-router-dom'
function ColorSchemesExample() {
  const movieCount=useSelector(state=>state.wishlist)
    return (
 
        <Navbar bg="black" data-bs-theme="dark"  className='movie-nav' >
          <Container>
 <Navbar.Brand className='nav-heading'><Link to="/movies-app" className='text-decoration-none '>Cinema Hub</Link></Navbar.Brand> 
            <Nav className="ms-auto">
     <Nav.Link  to="/movies-app" as={Link}>Home</Nav.Link>
              <Nav.Link to="/wish-list" as={Link}>Wishlist <span className='text-warning'>{movieCount.length}</span></Nav.Link>
              <Nav.Link to="/search" as={Link}>Search</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        );
}

export default ColorSchemesExample;