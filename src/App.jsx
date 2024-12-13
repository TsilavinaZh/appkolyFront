
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Maintenace from './components/NotFond';
import Acceuil from './components/Acceuil';
import ListPesron from './components/PersonList'
import AllPageAdd from './components/AllPageAdd'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import AllPage from './components/AllPageView';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* AllPageAdd */}
                <Route path="/Acceuil" element={<Acceuil />} />
                <Route path="/Acceuil/voir/ListPesron/" element={<ListPesron />} />
                <Route path="/Acceuil/voir/ListPesron/ajouter" element={<AllPageAdd />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminlogin/dahbosrd" element={<AdminDashboard />} />
                {/* voir/ListPesron/ */}
                <Route path="/AllPageView" element={<AllPage />} />
                <Route path="/*" element={<Maintenace />} />

            </Routes>
        </Router>
    );
}

export default App;



