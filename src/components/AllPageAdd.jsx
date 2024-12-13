import React from "react";
import { Tabs } from "antd";
import RH from "./RH_PDF";
import RI from "./RI_PDF";
import NI from "./NI_PDF";
import REX from "./REX"
import BackButton from "./backBtn";
import BtnDeconnect from "./Deconnecter";

const { TabPane } = Tabs;

export default function AllPage() {
    return (
        <>
            <BtnDeconnect />
            <BackButton to='/Acceuil/voir/ListPesron/'/>
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
                <TabPane tab="REX" key="4">
                    <REX />
                </TabPane>
            </Tabs>
        </>
    );
}
