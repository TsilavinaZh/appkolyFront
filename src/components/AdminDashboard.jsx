import React from 'react';
import { Tabs, Typography } from 'antd';
import Deconnection from './Deconnecter';
import AdminAddUser from './AdminAddUser';
import AdminAddZazamaditra from './AdminAddZazaMaditra';

const { Title } = Typography;
const { TabPane } = Tabs;

const AdminDashboard = () => {
    return (
        <div>
            <Title level={2} style={{ textAlign: 'center' }}>Admin Dashboard</Title>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Gestion des Utilisateurs" key="1">
                    <AdminAddUser />
                </TabPane>
                <TabPane tab="Enfants" key="2">
                    <AdminAddZazamaditra />
                </TabPane>
            </Tabs>
            <Deconnection />
        </div>
    );
};

export default AdminDashboard;
