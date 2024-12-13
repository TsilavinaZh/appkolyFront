// import React, { useState } from "react";
// import { Button, Form, Input, Card, Space, notification } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import AdminBtn from './AdminBtnDirection'

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Exemple de base de données des comptes
//   const accounts = [
//     { username: "admin", password: "12345" },
//     { username: "user", password: "password" },
//   ];

//   const handleSubmit = (values) => {
//     setLoading(true);

//     // Vérification des informations d'identification
//     const isAuthenticated = accounts.some(
//       (account) =>
//         account.username === values.username &&
//         account.password === values.password
//     );

//     setTimeout(() => {
//       setLoading(false);

//       if (isAuthenticated) {
//         notification.success({
//           message: "Connexion réussie",
//           description: "Vous êtes connecté avec succès!",
//           placement: "topRight",
//         });
//         navigate("/Acceuil"); // Redirection vers /allpage
//       } else {
//         notification.error({
//           message: "Échec de la connexion",
//           description: "Nom d'utilisateur ou mot de passe incorrect!",
//           placement: "topRight",
//         });
//       }
//     }, 1000);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f0f2f5",
//       }}
//     >
//       <Card
//         style={{
//           width: 400,
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//         title="Se Connecter"
//         bordered={false}
//       >
//         <Form
//           name="login"
//           initialValues={{ remember: true }}
//           onFinish={handleSubmit}
//         >
//           <Form.Item
//             name="username"
//             rules={[
//               { required: true, message: "Veuillez entrer votre nom d'utilisateur!" },
//             ]}
//           >
//             <Input
//               prefix={<UserOutlined />}
//               placeholder="Nom d'utilisateur"
//               size="large"
//             />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[
//               { required: true, message: "Veuillez entrer votre mot de passe!" },
//             ]}
//           >
//             <Input.Password
//               prefix={<LockOutlined />}
//               placeholder="Mot de passe"
//               size="large"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Space direction="vertical" style={{ width: "100%" }}>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 block
//                 loading={loading}
//                 size="large"
//               >
//                 Se connecter
//               </Button>
//             </Space>
//           </Form.Item>
//         </Form>
//       </Card>
//       <AdminBtn />
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { Button, Form, Input, Card, Space, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios"; // Import axios

const AdminBtn = () => {
  const handleAdminClick = () => {
    window.location.href = "/adminlogin";
  };

  return (
    <Button
      type="primary"
      shape="circle"
      icon={<UserOutlined />}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#1890ff",
        border: "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
      onClick={handleAdminClick}
    />
  );
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      // Send the login request to the backend with Axios
      const response = await axios.get("https://appkolyback.onrender.com/api/users");

      setLoading(false);

      // Check if the login is successful by finding the matching user
      const user = response.data.find(
        (account) =>
          account.username === values.username && account.password === values.password
      );

      if (user) {
        notification.success({
          message: "Connexion réussie",
          description: "Vous êtes connecté avec succès!",
          placement: "topRight",
        });
        window.location.href = "/Acceuil"; // Redirect to the homepage
      } else {
        notification.error({
          message: "Échec de la connexion",
          description: "Nom d'utilisateur ou mot de passe incorrect!",
          placement: "topRight",
        });
      }
    } catch (error) {
      setLoading(false);
      notification.error({
        message: "Erreur de connexion",
        description: "Une erreur s'est produite, veuillez réessayer plus tard.",
        placement: "topRight",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        title="Se Connecter"
        bordered={false}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Veuillez entrer votre nom d'utilisateur!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nom d'utilisateur"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Veuillez entrer votre mot de passe!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Mot de passe"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                size="large"
              >
                Se connecter
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      <AdminBtn />
    </div>
  );
};

export default Login;
