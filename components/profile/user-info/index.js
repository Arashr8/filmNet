import React, { useState } from "react";
import { Form, Input , Button } from "antd";
import { Card } from "react-bootstrap";

const UserInfo = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="mt-5">
      <Card className="p-3">
        <Card.Body>
          <Form
            initialValues={{ email: "admin@yahoo.com", password: "123456" }}
          >
            <Form.Item name="email">
              <Input disabled={disabled} />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password disabled={disabled} />
            </Form.Item>
            <Form.Item className="text-center">
              {disabled ? (
                <Button onClick={()=> setDisabled(false)} type="link">Change user information</Button>
              ) : (
                <Button onClick={()=> setDisabled(true)} type="link">Confirm</Button>
              )}
            </Form.Item>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInfo;
