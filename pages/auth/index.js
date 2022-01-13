import React from 'react';
import LoginForm from '../../components/auth/login';
import {Card} from 'react-bootstrap';

const AuthPage = () => {
    return ( 
        <Card className="w-50 m-auto mt-5">
            <Card.Header className="text-center">
                <h2>Logga in</h2> 
            </Card.Header>
            <Card.Body>
            <LoginForm />
            </Card.Body>
        </Card>
        
     );
}
 
export default AuthPage;