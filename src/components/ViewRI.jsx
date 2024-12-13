import React, { useState, useEffect } from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { jsPDF } from 'jspdf'; // Import jsPDF

const RapportList = () => {
  const [rapports, setRapports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRapports = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rapports');
        if (response.ok) {
          const data = await response.json();
          setRapports(data);
          setLoading(false);
        } else {
          throw new Error('Erreur lors de la récupération des rapports');
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRapports();
  }, []);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nom et Prénom',
      dataIndex: 'nomPrenomDepartement',
      key: 'nomPrenomDepartement',
    },
    {
      title: 'Département',
      dataIndex: 'dateLieu',
      key: 'dateLieu',
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => new Date(text).toLocaleDateString('fr-FR'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button onClick={() => handleDownload(record)} type="primary">
          Télécharger
        </Button>
      ),
    },
  ];

  const handleDownload = (record) => {
    const doc = new jsPDF();
    doc.text(`ID: ${record.id}`, 10, 10);
    doc.text(`Nom et Prénom: ${record.nomPrenomDepartement}`, 10, 20);
    doc.text(`Département: ${record.dateLieu}`, 10, 30);
    doc.text(`Date: ${new Date(record.created_at).toLocaleDateString('fr-FR')}`, 10, 40);
    doc.save(`${record.nomPrenomDepartement}_rapport.pdf`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Table
        columns={columns}
        dataSource={rapports}
        rowKey="id"
        pagination={true}
      />
    </div>
  );
};

export default RapportList;
