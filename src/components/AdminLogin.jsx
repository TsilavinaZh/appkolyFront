import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import 'antd/dist/reset.css';
import BackButton from './backBtn';

const { Title } = Typography;

function Login() {
  const [error, setError] = useState(null);

  const handleSubmit = (values) => {
    const { username, password } = values;
    if (username === 'admin' && password === '12345') {
      window.location.href = '/adminlogin/dahbosrd';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <BackButton to='/' />
      <div style={{ width: '100%', maxWidth: 400, margin: '50px auto', padding: 20, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', borderRadius: 8 }}>
        <Title level={2} style={{ textAlign: 'center' }}>Admin</Title>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
