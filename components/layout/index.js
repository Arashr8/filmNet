import {Badge, Divider, Avatar, Dropdown, Menu} from "antd";
import React, { useContext } from 'react';
import {Button , Nav , Navbar} from 'react-bootstrap';
import styles from './layout.module.css';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { AuthContext } from "../../store/auth";
import { toast } from "react-toastify";
import axios from "axios";


const Layout = ({children , customize}) => {
  const { isAuthenticated, authState, setAuthNewState } = useContext(AuthContext);
  const router = useRouter()

  const menu = (
    <Menu className={styles.avatar_menu}>
      <Menu.Item key="profile">
        <Link href={"/user/[id]"}>
          <a>profile</a>
        </Link>
      </Menu.Item>

      <Menu.Item
        key="logout"
        onClick={() => {
          axios
            .get("/api/auth/logout")
            .then((res) => {
              setAuthNewState({});
              toast.warning("You are logged out of your account");
            })
            .catch((err) => console.log(err));
        }}
        danger
      >
        Sign out
      </Menu.Item>
    </Menu>
  );

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
            <Dropdown overlay={menu}>
            <Badge dot>
              <Avatar src={
                   "https://secure.gravatar.com/avatar/sdfsdfetw?s=164&d=identicon"
                  }>
                    size={32}

              </Avatar>
            </Badge>
            </Dropdown>
          )}
  </Navbar>

        <div> {children} </div>
    
    </div>
) ;}


}

export default Layout;