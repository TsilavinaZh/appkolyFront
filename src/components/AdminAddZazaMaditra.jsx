import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm, Typography, message } from 'antd';

const { Title } = Typography;

const AdminAddZazamaditra = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Récupérer les données depuis l'API
  const fetchData = async () => {
    try {
      const response = await fetch('https://appkolyback.onrender.com/api/personnes');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erreur de récupération des données', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const afficherModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddPerson = async (values) => {
    try {
      const response = await fetch('https://appkolyback.onrender.com/api/personnes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const newPerson = await response.json();
      setData([...data, newPerson]);
      message.success('Personne ajoutée avec succès');
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('Erreur lors de l\'ajout de la personne');
    }
  };

  const handleDelete = async (key) => {
    try {
      await fetch(`https://appkolyback.onrender.com/api/personnes/${key}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item.id !== key));
      message.success('Personne supprimée avec succès');
    } catch (error) {
      message.error('Erreur lors de la suppression de la personne');
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
      <Button type="primary" onClick={afficherModal}>
        Ajouter une personne
      </Button>
      <Modal
        title="Ajouter une personne"
        visible={isModalVisible}
        onCancel={handleCancel}
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
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Ajouter une personne
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default AdminAddZazamaditra;