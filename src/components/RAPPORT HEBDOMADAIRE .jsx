import React from 'react';
import { Form, Input, DatePicker, Row, Col, Button, Typography } from 'antd';

const { Title } = Typography;

const RapportForm = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>RAPPORT HEBDOMADAIRE</Title>
      
      <Form layout="vertical">
        {/* Row 1 */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Numéro">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Jeune">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="AE">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Semaine">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Lieu">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Date d’appel">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Personne à Contacter">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Numéro">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Rendez-vous psychologiques ou médicaux">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 4 */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Date d’envoi du RE 1/2/3">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Date d’envoi du PPA">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Date d’envoi du questionnaire de retour">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Nombre de rapports d’incident">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Date du Bilan Trimestriel">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Soumettre le Rapport
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RapportForm;
