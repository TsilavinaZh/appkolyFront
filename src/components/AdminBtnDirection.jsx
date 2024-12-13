import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const FloatingButton = () => {
    const handleClick = () => {
        window.location.href = '/adminlogin';
    };

    
    return (
        <Button
            type="primary"
            shape="circle"
            icon={<UserOutlined />}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                backgroundColor: '#1890ff',
                border: 'none',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 1000,
            }}
            onClick={handleClick}
        />
    );
};

export default FloatingButton;
