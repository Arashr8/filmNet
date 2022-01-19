import {Divider} from "antd";
import React, { useContext } from 'react';
import {Button , Nav , Navbar} from 'react-bootstrap';
import styles from './layout.module.css';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { AuthContext } from "../../store/auth";


const Layout = ({children , customize}) => {
  const { isAuthenticated, authState } = useContext(AuthContext);
  const router = useRouter()

  if(customize){

    return(
    <div> {children} </div>
    )

  }else{    
    return(
    <div> 
    <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="#home"> <img src={"./filimo1.jpg"} alt="filimo.jpg" /> FilmNet </Navbar.Brand>
    <Divider style={{backgroundColor:"white !important"}} type="vertical"/>
    <Nav className="me-auto">
    <Link href={"/"}><Nav.Link active={router.pathname === "/"} href="#home"> Home </Nav.Link></Link>
    <Link href={"/films"}><Nav.Link href="#films"> Film </Nav.Link></Link>
    <Nav.Link href="#features"> Series </Nav.Link>
    <Nav.Link href="#pricing"> Kids </Nav.Link>
  </Nav>
  {isAuthenticated() === false ? (
            <Link href="/auth">
              <Button className={styles.auth_btn} variant="light">
                Logga in
              </Button>
            </Link>
          ) : (
            <div className={styles.auth_welcome}>Welcome</div>
          )}
  </Navbar>

        <div> {children} </div>
    
    </div>
) ;}


}

export default Layout;