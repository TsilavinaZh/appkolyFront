import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const BtnDeconnect = () => {
  const handleLogout = () => {
    window.location.href = '/'; 
  };

  return (
    <Button
      type="primary"
      icon={<LogoutOutlined />}
      onClick={handleLogout}
      style={{
        position: 'fixed',
        bottom: 35, // position flottante vers le bas
        right: 35,  // à droite de l'écran
        zIndex: 1000,
        backgroundColor: 'red',
        borderColor: 'red',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Ajout d'une ombre pour l'esthétique
        borderRadius: '50%', // Bouton rond
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
      aria-label="Se déconnecter"
    >
    </Button>
  );
};

export default BtnDeconnect;
