import {Button, Form, Input } from 'antd';
import React from 'react';
import styles from './login.module.css';


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
  
const LoginForm = ({setStatus}) => {
    return ( 
        
            <Form
            layout="vertical"
            name="login"
            {...layout}
            onFinish={(value) => {
                console.log(value)
            }}
            onFinisgFaild={error => {
                console.log(error)
            }}
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{required:true , message: 'Please input your username!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="Password"
                rules={[{required:true , message:'Please input your password!'},
                {min:6 , message:"Password must be at least 6 characters."}]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item {...tailLayout} className="mt-3">
                <Button className={styles.submit_btn} htmlType="submit">
                 {" "}
                 Submit{" "}
        </Button>
        <br />
        <Button onClick={()=>setStatus(true)} className="mt-3" type="link">
          Create account
        </Button>
                </Form.Item>

                
            </Form>
           
     );
}
 
export default LoginForm;