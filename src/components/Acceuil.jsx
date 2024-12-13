import React from "react";
import { Button, Space, Typography } from "antd";
import BtnDeconnect from "./Deconnecter";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <BtnDeconnect />
      <Typography.Title level={1} style={{ marginBottom: "40px" }}>
        Association Koly
      </Typography.Title>
      <Space direction="vertical" size="large">
        <Button
          type="primary"
          size="large"
          onClick={() => (window.location.href = "/Acceuil/voir/ListPesron/")}
        >
          Ajouter un rapport
        </Button>
        <Button
          type="default"
          size="large"
          onClick={() => (window.location.href = "/AllPageView")}
        >
          Voir les rapports
        </Button>
      </Space>
    </div>
  );
};

export default HomePage;
