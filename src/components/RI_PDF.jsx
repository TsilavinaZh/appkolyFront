
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import topImage from '../assets/enteteRI.png';
import bottomImage from '../assets/piedNI.png';

const RIJPDF = () => {
    const [formData, setFormData] = useState({
        nomPrenomDepartement: '',
        moisPresence: '',
        dateLieu: '',
        referent: '',
        assistantPersonnes: '',
        victimesIncident: '',
        intensiteIncident: '',
        descriptifIncident: '',
        nombreRapports: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generatePdf = async () => {
        // Envoi des données au serveur avant la génération du PDF
        try {
            const response = await fetch('https://appkolyback.onrender.com/api/rapports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Envoyer les données du formulaire
            });

            if (!response.ok) {
                // alert('Erreur lors de l’envoi des données.');
                return;
            }

            const doc = new jsPDF();

            const topImg = new Image();
            const bottomImg = new Image();

            topImg.src = topImage;
            bottomImg.src = bottomImage;

            // Attendre que l'image du haut soit chargée avant de générer le PDF
            topImg.onload = () => {
                doc.addImage(topImg, 'JPEG', 10, 10, 200, 30);

                const data = [
                    ['NOM ET PRENOM ET DEPARTEMENT ORIGINE:', formData.nomPrenomDepartement],
                    ['NOMBRES DE MOIS DE PRESENCE A LA DATE DE L’INFORMATION :', formData.moisPresence],
                    ['DATE ET LIEU :', formData.dateLieu],
                    ['REFERENT :', formData.referent],
                    ['ASSISTANT ET PERSONNES PRESENTS :', formData.assistantPersonnes],
                    ['VICTIMES DE L’INCIDENT :', formData.victimesIncident],
                    ['INTENSITE DE L’INCIDENT :', formData.intensiteIncident],
                    ['DESCRIPTIF GENERAL DE L’INCIDENT : ', formData.descriptifIncident],
                    ['TOTAL NOMBRE DE RAPPORT D’INCIDENT DU JEUNE :', formData.nombreRapports],
                ];

                doc.autoTable({
                    startY: 50,
                    body: data,
                    styles: {
                        fontSize: 10,
                        cellPadding: 5,
                        lineWidth: 0.5,
                        lineColor: [0, 0, 0],
                        textColor: [0, 0, 0],
                        fillColor: [255, 255, 255],
                    },
                    columnStyles: {
                        0: { cellWidth: 90 },
                        1: { cellWidth: 90 },
                    },
                    theme: 'grid',
                });

                // Attendre que l'image du bas soit chargée avant d'ajouter cette image et de sauvegarder le PDF
                bottomImg.onload = () => {
                    doc.addImage(bottomImg, 'JPEG', 0, doc.autoTable.previous.finalY + 10, 210, 100);
                    const fileName = `RI_${formData.nomPrenomDepartement}_${new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}.pdf`;
                    doc.save(fileName);
                };

                bottomImg.onerror = () => {
                    // alert("Impossible de charger l'image du bas. Vérifiez son emplacement.");
                };
            };

            topImg.onerror = () => {
                // alert("Impossible de charger l'image du haut. Vérifiez son emplacement.");
            };
        } catch (error) {
            console.error('Erreur réseau :', error);
            // alert('Erreur réseau.');
        }
    };

    return (
        <>
            <center>
                <img src={topImage} alt="Image du haut" style={{ width: '100%', paddingLeft: "10%" }} />
            </center>
            <div style={{ padding: '20px' }}>
                <form>
                    <table style={{ width: '90%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tbody>
                            {/* Formulaire */}
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>NOM ET PRENOM ET DEPARTEMENT ORIGINE :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="nomPrenomDepartement" value={formData.nomPrenomDepartement} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>NOMBRES DE MOIS DE PRESENCE A LA DATE DE L’INFORMATION :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="moisPresence" value={formData.moisPresence} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>DATE ET LIEU :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="dateLieu" value={formData.dateLieu} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>REFERENT :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="referent" value={formData.referent} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>ASSISTANT ET PERSONNES PRESENTS :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="assistantPersonnes" value={formData.assistantPersonnes} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>VICTIMES DE L’INCIDENT :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="victimesIncident" value={formData.victimesIncident} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>INTENSITE DE L’INCIDENT :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="intensiteIncident" value={formData.intensiteIncident} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>DESCRIPTIF GENERAL DE L’INCIDENT :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <textarea name="descriptifIncident" value={formData.descriptifIncident} onChange={handleChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>TOTAL NOMBRE DE RAPPORT D’INCIDENT DU JEUNE :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input type="text" name="nombreRapports" value={formData.nombreRapports} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                                    <button type="button" onClick={generatePdf}>
                                        Soumettre
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default RIJPDF;