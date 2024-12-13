// import React, { useState } from 'react';
// import { Table, Button, Modal, Form, Input, Space, Popconfirm, Typography } from 'antd';
// import Deconnection from './Deconnecter';
// const { Title } = Typography;

// const AdminAddUser = () => {
//   const [data, setData] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();

//   const afficherModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const handleAddPerson = (values) => {
//     const newData = {
//       key: Date.now().toString(),
//       name: values.name,
//       prenom: values.prenom,
//       username: values.username,
//       password: values.password
//     };
//     setData([...data, newData]);
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const handleDelete = (key) => {
//     setData(data.filter((item) => item.key !== key));
//   };

//   const columns = [
//     {
//       title: 'Nom',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Prénom',
//       dataIndex: 'prenom',
//       key: 'prenom',
//     },
//     {
//       title: 'Nom d\'utilisateur',
//       dataIndex: 'username',
//       key: 'username',
//     },
//     {
//       title: 'Mot de passe', // Ajouter une colonne pour le mot de passe
//       dataIndex: 'password',
//       key: 'password',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, record) => (
//         <Space>
//           <Popconfirm
//             title="Êtes-vous sûr de vouloir supprimer cette personne ?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Oui"
//             cancelText="Non"
//           >
//             <Button type="primary" danger>
//               Supprimer
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Button type="primary" onClick={afficherModal}>
//         Ajouter une personne
//       </Button>
//       <Modal
//         title="Ajouter une personne"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={handleAddPerson}
//         >
//           <Form.Item
//             label="Nom"
//             name="name"
//             rules={[{ required: true, message: 'Veuillez entrer le nom' }]}
//           >
//             <Input placeholder="Entrer le nom" />
//           </Form.Item>
//           <Form.Item
//             label="Prénom"
//             name="prenom"
//             rules={[{ required: true, message: 'Veuillez entrer le prénom' }]}
//           >
//             <Input placeholder="Entrer le prénom" />
//           </Form.Item>
//           <Form.Item
//             label="Nom d'utilisateur"
//             name="username"
//             rules={[{ required: true, message: 'Veuillez entrer le nom d\'utilisateur' }]}
//           >
//             <Input placeholder="Entrer le nom d'utilisateur" />
//           </Form.Item>
//           <Form.Item
//             label="Mot de passe"
//             name="password"
//             rules={[{ required: true, message: 'Veuillez entrer le mot de passe' }]}
//           >
//             <Input.Password placeholder="Entrer le mot de passe" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>
//               Ajouter une personne
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//       <Table columns={columns} dataSource={data} />
//       <Deconnection />
//     </div>
//   );
// };

// export default AdminAddUser;












import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const AdminAddUser = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users'); // Add `/api`
      setData(response.data.map(user => ({ ...user, key: user.id })));
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };
  
  const handleAddPerson = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/users', values); // Add `/api`
      fetchUsers();
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`); // Add `/api`
      fetchUsers();
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };
  

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Prénom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Nom d\'utilisateur',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Mot de passe',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Êtes-vous sûr de vouloir supprimer cette personne ?"
            onConfirm={() => handleDelete(record.id)}
            okText="Oui"
            cancelText="Non"
          >
            <Button type="primary" danger>
              Supprimer
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ marginBottom: '10px' }}>
        Ajouter une personne
      </Button>
      <Modal
        title="Ajouter une personne"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddPerson}
        >
          <Form.Item
            label="Nom"
            name="name"
            rules={[{ required: true, message: 'Veuillez entrer le nom' }]}
          >
            <Input placeholder="Entrer le nom" />
          </Form.Item>
          <Form.Item
            label="Prénom"
            name="prenom"
            rules={[{ required: true, message: 'Veuillez entrer le prénom' }]}
          >
            <Input placeholder="Entrer le prénom" />
          </Form.Item>
          <Form.Item
            label="Nom d'utilisateur"
            name="username"
            rules={[{ required: true, message: 'Veuillez entrer le nom d\'utilisateur' }]}
          >
            <Input placeholder="Entrer le nom d'utilisateur" />
          </Form.Item>
          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[{ required: true, message: 'Veuillez entrer le mot de passe' }]}
          >
            <Input.Password placeholder="Entrer le mot de passe" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Ajouter une personne
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AdminAddUser;
