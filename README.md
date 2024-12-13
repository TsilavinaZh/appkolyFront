# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







```
import React from 'react';
import { jsPDF } from "jspdf";

const GeneratePDF = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Premier mot : "Bonjour" en bleu
    doc.setTextColor(255,0, 0); // Bleu
    doc.text("Bonjour", 20, 30);

    // Deuxième mot : "Bienvenue" en rouge et souligné
    doc.setTextColor(255, 0, 0); // Rouge
    doc.text("Bienvenue", 20, 50);
    doc.line(20, 55, 90, 55); // Souligner

    // Troisième mot : "Monde" en vert
    doc.setTextColor(0, 255, 0); // Vert
    doc.text("Monde", 20, 70);

    // Quatrième mot : "React" en violet et souligné
    doc.setTextColor(128, 0, 128); // Violet
    doc.text("React", 20, 90);
    doc.line(20, 95, 60, 95); // Souligner

    // Cinquième mot : "jsPDF" en orange
    doc.setTextColor(255, 165, 0); // Orange
    doc.text("jsPDF", 20, 110);

    // Sauvegarder le PDF
    doc.save("exemple_mots.pdf");
  };

  return (
    <div>
      <button onClick={generatePdf}>Générer PDF</button>
    </div>
  );
};

export default GeneratePDF;

```