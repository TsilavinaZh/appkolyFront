import React, { useState, useEffect } from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { jsPDF } from 'jspdf'; // Import jsPDF

const NI_PDF_Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://appkolyback.onrender.com/api/NI-PDF');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const result = await response.json();
      setData(result);  
      setLoading(false);
    } catch (error) {
      setError('Erreur réseau : ' + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;

  const columns = [
    {
      title: 'Nom, Prénom et Département',
      dataIndex: 'nomPrenomDepartement',
      key: 'nomPrenomDepartement',
    },
    {
      title: 'Mois de Présence',
      dataIndex: 'moisPresence',
      key: 'moisPresence',
    },
    {
      title: 'Date et Lieu',
      dataIndex: 'dateLieu',
      key: 'dateLieu',
    },
    {
      title: 'Référent',
      dataIndex: 'referent',
      key: 'referent',
    },
    {
      title: 'Assistant et Personnes Présentes',
      dataIndex: 'assistantPersonnes',
      key: 'assistantPersonnes',
    },
    {
      title: 'Date de Création',
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
    doc.text(`Nom, Prénom et Département: ${record.nomPrenomDepartement}`, 10, 10);
    doc.text(`Mois de Présence: ${record.moisPresence}`, 10, 20);
    doc.text(`Date et Lieu: ${record.dateLieu}`, 10, 30);
    doc.text(`Référent: ${record.referent}`, 10, 40);
    doc.text(`Assistant et Personnes Présentes: ${record.assistantPersonnes}`, 10, 50);
    doc.text(`Date de Création: ${new Date(record.created_at).toLocaleDateString('fr-FR')}`, 10, 60);
    doc.save(`${record.nomPrenomDepartement}_rapport.pdf`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id" // assuming each item has a unique 'id' property
        pagination={true}
      />
    </div>
  );
};

export default NI_PDF_Table;
