import React from "react";
import { List, Avatar } from "antd";
import { FaUserCircle } from "react-icons/fa";
import BtnDeconnect from "./Deconnecter";
import BackButton from "./backBtn"

const data = [
  { id: 1, name: "HEVANN" },
  { id: 2, name: "VICHEA" },
  { id: 3, name: "YLAN" },
  { id: 4, name: "AYA" },
  { id: 5, name: "INES" },
  { id: 6, name: "CELIA" },
  { id: 7, name: "LORENA" },
  { id: 8, name: "JOE" },
  { id: 9, name: "JASON" },
];

function helloWorld() {
  window.location.href = './ajouter'
}

const PersonList = () => {
  const styles = {
    container: {
      width: "100%",
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      boxSizing: "border-box",
    },
    item: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      padding: "10px 0",
    },
    name: {
      fontSize: "16px",
      color: "#333",
    },
    avatar: {
      backgroundColor: "#87d068",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    // Styles responsives
    "@media screen and (max-width: 768px)": {
      item: {
        flexDirection: "column", // Icône et texte s'affichent verticalement
        alignItems: "flex-start",
      },
      name: {
        fontSize: "14px", // Réduit la taille du texte pour mobile
      },
    },
  };

  return (
    <>
      <BackButton to="/acceuil" />

      <div style={styles.container}>
        <List
          onClick={() => helloWorld()}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={styles.item}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={styles.avatar}
                    size={50}
                    icon={<FaUserCircle style={{ fontSize: "30px" }} />}
                  />
                }
                title={<span style={styles.name}>{item.name}</span>}
              />
            </List.Item>
          )}
        />
        <BtnDeconnect />
      </div>

    </>
  );
};

export default PersonList;
