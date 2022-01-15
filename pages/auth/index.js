import React, { useState } from 'react';
import LoginForm from '../../components/auth/login';
import {Card} from 'react-bootstrap';
import RegisterForm from '../../components/auth/register';

const AuthPage = () => {
    const [status , setStatus]= useState(false)
    return ( 
        <Card className="w-50 m-auto mt-5">
            <Card.Header className="text-center">
                <h2>{!status ? "Logga in" : "Register"}</h2> 
            </Card.Header>
            <Card.Body>
            {!status ? (
                <LoginForm setStatus={e => setStatus(e)}/>
                ) : (
                    <RegisterForm setStatus={e => setStatus(e)}/>
                )}
            </Card.Body>
        </Card>
        
     );
}
 
export default AuthPage;