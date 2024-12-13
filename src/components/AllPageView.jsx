import React from "react";
import { Tabs } from "antd";  // Import des composants Tabs et TabPane
import RH from "./RHview";
import RI from "./ViewRI";
import NI from "./NOTE D’INFORMATION";
import BackButton from "./backBtn";
import BtnDeconnect from "./Deconnecter";

const { TabPane } = Tabs;

export default function AllPage() {
    return (
        <>
            <BackButton to="/acceuil" />
            <BtnDeconnect />
            <Tabs defaultActiveKey="1">
                <TabPane tab="RAPPORT D'INCIDENT" key="1">
                    <RI />
                </TabPane>
                <TabPane tab="NOTE D'INFORMATION" key="2">
                    <NI />
                </TabPane>
                <TabPane tab="RAPPORT HEBDOMADAIRE" key="3">
                    <RH />
                </TabPane>
            </Tabs>
        </>
    );
}
