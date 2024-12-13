
import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'; 
const NotFound = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Result
        status="404"
        title="404"
        subTitle="Désolé, la page que vous cherchez est introuvable."
        extra={
          <Button type="primary">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
