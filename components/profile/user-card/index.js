import React from 'react';
import { Card } from "react-bootstrap";
import { Avatar, Divider } from "antd";


const UserCard = () => {
    return ( 
        <div className="mt-5">
        <Card className="p-3">
          <div className="text-center p-2">
            <Avatar
              size={128}
              src={
                "https://secure.gravatar.com/avatar/60cc950ccbd1d64a240454f1?s=90&d=identicon"
              }
            />
          </div>
          <Divider />
          <Card.Body className="text-center">
            <p>Username</p>
            <p>Profile creation date </p>
            <p>Subscription</p>
          </Card.Body>
        </Card>
      </div>
     );
}
 
export default UserCard;