import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Select,
  InputNumber,
  Space,
  Row,
  Col,
  Typography,
} from "antd";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const IncidentForm = () => {
  const [form] = Form.useForm();
  const [date, setDate] = useState(null);

  const handleSubmit = (values) => {
    console.log("Form Values: ", values);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px" }}>
      {/* Bouton Retour */}

      {/* Titre */}
      <Title level={2} style={{ textAlign: "center", margin: "20px 0" }}>
        Formulaire d'Incident
      </Title>

      {/* Formulaire */}
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          {/* Nom et Prénom */}
          <Col span={12}>
            <Form.Item
              label="Nom et Prénom"
              name="fullName"
              rules={[{ required: true, message: "Veuillez entrer votre nom et prénom!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Département */}
          <Col span={12}>
            <Form.Item
              label="Département"
              name="department"
              rules={[{ required: true, message: "Veuillez entrer votre département!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Origine */}
          <Col span={12}>
            <Form.Item
              label="Origine"
              name="origin"
              rules={[{ required: true, message: "Veuillez entrer l'origine!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Nombre de mois de présence */}
          <Col span={12}>
            <Form.Item
              label="Nombre de mois de présence"
              name="monthsPresent"
              rules={[{ required: true, message: "Veuillez entrer le nombre de mois de présence!" }]}
            >
              <InputNumber min={1} max={12} style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          {/* Date de l'information */}
          <Col span={12}>
            <Form.Item
              label="Date de l’information"
              name="informationDate"
              rules={[{ required: true, message: "Veuillez entrer la date de l'information!" }]}
            >
              <DatePicker
                format="DD/MM/YYYY"
                onChange={(date) => setDate(date)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          {/* Date et lieu */}
          <Col span={12}>
            <Form.Item
              label="Date et lieu"
              name="dateLieu"
              rules={[{ required: true, message: "Veuillez entrer la date et le lieu!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Référent */}
          <Col span={12}>
            <Form.Item
              label="Référent"
              name="referent"
              rules={[{ required: true, message: "Veuillez entrer le nom du référent!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Assistant et personnes présents */}
          <Col span={12}>
            <Form.Item
              label="Assistant et personnes présents"
              name="assistantAndPeople"
              rules={[{ required: true, message: "Veuillez entrer les personnes présentes!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Victimes de l'incident */}
          <Col span={12}>
            <Form.Item
              label="Victimes de l'incident"
              name="victims"
              rules={[{ required: true, message: "Veuillez entrer les victimes!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Intensité de l'incident */}
          <Col span={12}>
            <Form.Item
              label="Intensité de l'incident"
              name="incidentIntensity"
              rules={[{ required: true, message: "Veuillez entrer l'intensité de l'incident!" }]}
            >
              <Select>
                <Option value="low">Faible</Option>
                <Option value="medium">Moyenne</Option>
                <Option value="high">Haute</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Descriptif général de l'incident */}
          <Col span={24}>
            <Form.Item
              label="Descriptif général de l'incident"
              name="incidentDescription"
              rules={[{ required: true, message: "Veuillez entrer la description de l'incident!" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>

          {/* Total nombre de rapports */}
          <Col span={12}>
            <Form.Item
              label="Total nombre de rapports"
              name="totalReports"
              rules={[{ required: true, message: "Veuillez entrer le nombre total de rapports!" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          {/* Boutons */}
          <Col span={24}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Soumettre
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>
                  Réinitialiser
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default IncidentForm;
