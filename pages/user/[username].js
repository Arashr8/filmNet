import React, { useContext } from 'react'
import UserCard from '../../components/profile/user-card';
import UserInfo from '../../components/profile/user-info';
import { AuthContext } from '../../store/auth';
import {Row , Col} from "react-bootstrap";

const UserPage = ({username}) => {
    const {authState} = useContext(AuthContext)
    if(authState.user && authState.user.username === username){
        return ( 
            <div>
            <Row className="w-100 p-2">
             <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                 <UserInfo />
             </Col>
             <Col xl={9} lg={9} md={6} sm={12} xs={12}>
                 <UserCard /> 
             </Col>
            </Row>   
            </div>
         );

    }else{
        return (
            <div>You do not have permission to access this profile </div>
        )
    }
}

export const getServerSideProps = (context) => {
    
    const {username} = context.params

    
    
    return{
        props:{
            username
        }
    }
}
 
export default UserPage;