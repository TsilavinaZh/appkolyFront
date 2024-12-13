// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Spin, Alert } from 'antd';

// const RapportTable = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios
//             .get('https://appkolyback.onrender.com/api/reports')
//             .then((response) => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError('Erreur lors du chargement des données');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <Spin size="large" />;

//     if (error) return <Alert message={error} type="error" />;

//     const columns = [
//         {
//             title: 'Jeune',
//             dataIndex: 'jeune',
//             key: 'jeune',
//         },
//         {
//             title: 'AE',
//             dataIndex: 'ae',
//             key: 'ae',
//         },
//         {
//             title: 'Semaine',
//             dataIndex: 'semaine',
//             key: 'semaine',
//         },
//         {
//             title: 'Lieu',
//             dataIndex: 'lieu',
//             key: 'lieu',
//         },
//         {
//             title: 'Date Appel',
//             dataIndex: 'dateAppel',
//             key: 'dateAppel',
//         },
//         {
//             title: 'Rendez-vous',
//             dataIndex: 'rendezVous',
//             key: 'rendezVous',
//         },
//         {
//             title: 'Activités',
//             dataIndex: 'activites',
//             key: 'activites',
//         },
//         {
//             title: 'Gestion des émotions',
//             dataIndex: 'gestion_emotions',
//             key: 'gestion_emotions',
//         },
//         {
//             title: 'Autres',
//             dataIndex: 'autres',
//             key: 'autres',
//         },
//     ];

//     return (
//         <div style={{ padding: '20px' }}>
//             <Table
//                 columns={columns}
//                 dataSource={data}
//                 rowKey="id"
//                 pagination={false}
//             />
//         </div>
//     );
// };

// export default RapportTable;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin, Alert, Button } from 'antd';
import { jsPDF } from 'jspdf';

const RapportTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://appkolyback.onrender.com/api/reports')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Erreur lors du chargement des données');
                setLoading(false);
            });
    }, []);

    if (loading) return <Spin size="large" />;

    if (error) return <Alert message={error} type="error" />;

    const columns = [
        {
            title: 'Jeune',
            dataIndex: 'jeune',
            key: 'jeune',
        },
        {
            title: 'AE',
            dataIndex: 'ae',
            key: 'ae',
        },
        {
            title: 'Semaine',
            dataIndex: 'semaine',
            key: 'semaine',
        },
        {
            title: 'Lieu',
            dataIndex: 'lieu',
            key: 'lieu',
        },
        {
            title: 'Date Appel',
            dataIndex: 'dateAppel',
            key: 'dateAppel',
        },
        {
            title: 'Rendez-vous',
            dataIndex: 'rendezVous',
            key: 'rendezVous',
        },
        {
            title: 'Activités',
            dataIndex: 'activites',
            key: 'activites',
        },
        {
            title: 'Gestion des émotions',
            dataIndex: 'gestion_emotions',
            key: 'gestion_emotions',
        },
        {
            title: 'Autres',
            dataIndex: 'autres',
            key: 'autres',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Button onClick={() => downloadPDF(record)} type="primary">
                    Télécharger PDF
                </Button>
            ),
        },
    ];

    // Fonction pour télécharger un PDF
    const downloadPDF = (record) => {
        const doc = new jsPDF();
        doc.setFontSize(12);
        
        doc.text(`Jeune: ${record.jeune}`, 10, 10);
        doc.text(`AE: ${record.ae}`, 10, 20);
        doc.text(`Semaine: ${record.semaine}`, 10, 30);
        doc.text(`Lieu: ${record.lieu}`, 10, 40);
        doc.text(`Date Appel: ${record.dateAppel}`, 10, 50);
        doc.text(`Rendez-vous: ${record.rendezVous}`, 10, 60);
        doc.text(`Activités: ${record.activites}`, 10, 70);
        doc.text(`Gestion des émotions: ${record.gestion_emotions}`, 10, 80);
        doc.text(`Autres: ${record.autres}`, 10, 90);

        doc.save(`${record.jeune}_rapport.pdf`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={false}
            />
        </div>
    );
};

export default RapportTable;
