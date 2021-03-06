import React from 'react'
import styles from './register.module.css'
import {Button, Form, Input } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';


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

  const RegisterForm = ({ setStatus }) => {
    return (
      <Form
        layout="vertical"
        name="register"
        {...layout}
        onFinish={(value) => {
          console.log(value);
          if (value.password === value.re_password) {
            const { username, password, email } = value;
            const values = { username, password, email };
            axios
              .post("/api/auth/register", values)
              .then((res) => {
                console.log(res);
                toast.success("registration was successful");
              })
              .catch((err) => {
                if(err.response){
            
                  toast.error(err.response.data.error)
                }else{
                  toast.error("Something went wrong!")
                }
                
              });
          } else {
            toast.error("Repeat password is wrong");
          }
        }}
        onFinishFailed={(err) => {
          // console.log(err);
        }}
      >
            <Form.Item 
            label="Username"
            name="username"
            rules={[{required:true , message: 'Enter your username'},
            { min: 5, message: "Username must be longer than 5 characters!"}]}
            >
                <Input />
            </Form.Item>

            <Form.Item 
            label="Email"
            name="email"
            rules={[{required:true , message:'Wrong or Invalid email address.Please correct and try again.'},
            {min:6 , message:""}]}
            >
                <Input />
            </Form.Item>

            <Form.Item 
            label="Password"
            name="password"
            rules={[{required:true , message:'Please input your password!'},
            {min:6 , message:"Minimum 6 characters required"}]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item 
            label="Confirm Password"
            name="re_password"
            rules={[{required:true },
            {min:6 , message:"Minimum 6 characters required"}]}
            >
                <Input.Password />
            </Form.Item>
            
            <Form.Item {...tailLayout} className="text-center ">
        <Button className={styles.submit_btn} htmlType="submit">
          {" "}
         Register{" "}
        </Button>
        
      </Form.Item>

            
        </Form>
       
     );
}
 
export default RegisterForm;