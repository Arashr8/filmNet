import {Button, Form, Input } from 'antd';
import React from 'react';
import styles from './login.module.css';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const tailLayout = {
    wrapperCol: {
        offset: 4,
         span: 20, 
    },
  };
const LoginForm = () => {
    return ( 
        
            <Form
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
                <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
           
     );
}
 
export default LoginForm;