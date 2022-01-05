import {Divider} from "antd";
import React from 'react';
import {Button , Nav , Navbar} from 'react-bootstrap';
import styles from './layout.module.css';
import {useRouter} from 'next/router'
import Link from 'next/link'


const Layout = ({children}) => {

  const router = useRouter()

    return(
        <div> 
<Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="#home"> <img src={"./filimo1.jpg"} /> FilmNet </Navbar.Brand>
    <Divider style={{backgroundColor:"white !important"}} type="vertical"/>
    <Nav className="me-auto">
      <Link href={"/"}><Nav.Link active={router.pathname === "/"} href="#home"> Home </Nav.Link></Link>
      <Link href={"/films"}><Nav.Link href="#films"> Film </Nav.Link></Link>
      <Nav.Link href="#features"> Serier </Nav.Link>
      <Nav.Link href="#pricing"> Barn </Nav.Link>
    </Nav>
    <button className={styles.auth_btn}>Logga in</button>
  </Navbar>

            <div> {children} </div>
        
        </div>
    ) ;
}

export default Layout;