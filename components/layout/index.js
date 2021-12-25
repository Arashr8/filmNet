import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';


const Layout = ({children}) => {
    return(
        <div> 
<Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="#home">FilmNet</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Film</Nav.Link>
      <Nav.Link href="#features">Serier</Nav.Link>
      <Nav.Link href="#pricing">Barn</Nav.Link>
    </Nav>
    
  </Navbar>

            <div> {children} </div>
        
        </div>
    ) ;
}

export default Layout;