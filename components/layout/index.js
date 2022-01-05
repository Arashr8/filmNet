import {Divider} from "antd";
import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';
import {useRouter} from 'next/router'
import Link from 'next/link'


const Layout = ({children}) => {
    return(
        <div> 
<Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="#home"> <img src={"./filimo1.jpg"} /> FilmNet </Navbar.Brand>
    <Divider style={{backgroundColor:"white !important"}} type="vertical"/>
    <Nav className="me-auto">
    <Nav.Link href="#home"> Home </Nav.Link>
      <Nav.Link href="#films"> Film </Nav.Link>
      <Nav.Link href="#features"> Serier </Nav.Link>
      <Nav.Link href="#pricing"> Barn </Nav.Link>
    </Nav>
    
  </Navbar>

            <div> {children} </div>
        
        </div>
    ) ;
}

export default Layout;