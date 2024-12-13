import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import topImage from '../assets/enteteNI.png';
import bottomImage from '../assets/piedNI.png';

const NIJPDF = () => {
    const [formData, setFormData] = useState({
        nomPrenomDepartement: '',
        moisPresence: '',
        dateLieu: '',
        referent: '',
        assistantPersonnes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitDataToBackend = async () => {
        try {
            const response = await fetch('https://appkolyback.onrender.com/api/NI-PDF', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Data submitted successfully:', data.message);
                generatePdf();
            } else {
                console.error('Error submitting data:', data.message);
            }
        } catch (error) {
            console.error('An error occurred while submitting data:', error);
        }
    };

    const generatePdf = () => {
        const doc = new jsPDF();

        doc.addImage(topImage, 'PNG', 45, 10, 120, 30);

        const data = [
            ['NOM ET PRENOM ET DEPARTEMENT ORIGINE', formData.nomPrenomDepartement],
            ['NOMBRES DE MOIS DE PRESENCE A LA DATE DE L’INFORMATION :', formData.moisPresence],
            ['DATE ET LIEU', formData.dateLieu],
            ['REFERENT', formData.referent],
            ['ASSISTANT ET PERSONNES PRESENTS :', formData.assistantPersonnes],
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
                0: { cellWidth: 100 },
                1: { cellWidth: 80 },
            },
            theme: 'grid',
        });

        doc.addImage(bottomImage, 'PNG', 0, 195, 210, 100);

        const fileName = `NI_${new Date().toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).replace(/\//g, '-')}.pdf`;
        doc.save(fileName);
    };

    return (
        <>
            <center>
                <img src={topImage} alt="" style={{ width: '50%' }} />
            </center>        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <form>
                    <table style={{ width: '90%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>NOM ET PRENOM ET DEPARTEMENT ORIGINE :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input
                                        type="text"
                                        name="nomPrenomDepartement"
                                        value={formData.nomPrenomDepartement}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>NOMBRES DE MOIS DE PRESENCE A LA DATE DE L’INFORMATION :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input
                                        type="text"
                                        name="moisPresence"
                                        value={formData.moisPresence}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>DATE ET LIEU :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input
                                        type="text"
                                        name="dateLieu"
                                        value={formData.dateLieu}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>REFERENT :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input
                                        type="text"
                                        name="referent"
                                        value={formData.referent}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '10px' }}>ASSISTANT ET PERSONNES PRESENTS :</td>
                                <td style={{ border: '1px solid black', padding: '10px' }}>
                                    <input
                                        type="text"
                                        name="assistantPersonnes"
                                        value={formData.assistantPersonnes}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                                    <button type="button" onClick={submitDataToBackend}>Soumettre</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default NIJPDF;
