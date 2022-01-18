import { Form, Input, Button } from "antd";
import React from "react";
import styles from "./login.module.css";
import axios from "axios"

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};
  
const LoginForm = ({ setStatus }) => {
  return (
    <Form
      layout="vertical"
      name="login"
      {...layout}
      onFinish={(value) => {
        console.log(value);
        axios.post("/api/auth/login" , value).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }}
      onFinishFailed={(err) => {
        console.log(err);
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please inpput your username!" },
          { min: 5, message: "Username must be longer than 5 characters!" },
         
          {
            whitespace: true,
            message: "Invalid spaces!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please inpput your password!" },
          { min: 6, message: "Username must be longer than 6 characters!" },
          {
            whitespace: true,
            message: "Invalid spaces!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} className="text-center ">
        <Button className={styles.submit_btn} htmlType="submit">
          {" "}
          Submit{" "}
        </Button>
        <br />
        <Button onClick={() => setStatus(true)} className="mt-3" type="link">
          Create account
        </Button>
        
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
