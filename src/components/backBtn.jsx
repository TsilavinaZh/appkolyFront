import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = ({ to }) => {
  return (
    <Button
      type="default"
      icon={<ArrowLeftOutlined />}
      onClick={() => (window.location.href = to)}
      size="large"
    >
      Retour
    </Button>
  );
};

export default BackButton;
