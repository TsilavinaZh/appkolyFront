import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const RH_PDF = () => {
  const [formData, setFormData] = useState({
    jeune: '',
    ae: '',
    semaine: '',
    lieu: '',
    dateAppel: '',
    rendezVous: '',
    dateRE: '',
    datePPA: '',
    dateQuestionnaire: '',
    nombreRapports: '',
    dateBilan: '',
    activites: '',
    gestion_emotions: '',
    controle_addiction: '',
    volonte_grandir: '',
    relation_famille: '',
    relation_jeunes: '',
    relation_adultes: '',
    developpement_competence: '',
    autonomie_quotidien: '',
    scolaire_professionnelle: '',
    suivi_medical: '',
    hygiene_vie: '',
    suivi_psychologique: '',
    suivi_psychiatrique: '',
    compte_rendu: '',
    lien_exterieur: '',
    entretien_psychologique: '',
    incident: '',
    note_information: '',
    autres: '',
    preconisations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  const handleSubmit = async () => {
    try {

      const response = await fetch('https://appkolyback.onrender.com/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });
      generatePdf()
      if (response.ok) {
        // alert('Données enregistrées avec succès');
      } else {
        // alert('Erreur lors de l\'enregistrement des données');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };


  const generatePdf = () => {
    const doc = new jsPDF();
    // handleSubmit()
    // Ajouter le titre
    const title = "RAPPORT HEBDOMADAIRE";
    doc.setTextColor(255, 0, 0);
    doc.setFontSize(16);
    doc.text(title, 15, 20);
    const titleWidth = doc.getTextWidth(title);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(15, 22, 15 + titleWidth, 22);

    // Données du tableau
    const data = [
      [`Jeune : ${formData.jeune}`, `AE : ${formData.ae}`],
      [`Semaine : ${formData.semaine}`, `Lieu : ${formData.lieu}`],
      [`Date d’appel : ${formData.dateAppel}`, `Rendez-vous : ${formData.rendezVous}`],
      [`Date d’envoi du RE 1/2/3 : ${formData.dateRE}`, `Date d’envoi du PPA : ${formData.datePPA}`],
      [`Date d’envoi du questionnaire : ${formData.dateQuestionnaire}`, `Nombre de rapports : ${formData.nombreRapports}`],
      [`Date du Bilan Trimestriel : ${formData.dateBilan}`, ''],
    ];

    // Créer le tableau
    doc.autoTable({
      startY: 30,
      body: data,
      styles: {
        fontSize: 10,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.5,
        halign: 'left',
      },
      columnStyles: {
        0: { cellWidth: 'auto' },
        1: { cellWidth: 'auto' },
      },
      tableWidth: 'auto',
      margin: { top: 30, left: 15, right: 15 },
    });

    const addBlueTitle = (text, yPosition) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 10;
      }
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(14);
      doc.text(text, 10, yPosition);
      return yPosition + 10;
    };

    const addGreenText = (text, yPosition, withDot = false) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 10;
      }
      doc.setTextColor(0, 128, 0);
      doc.setFontSize(12);
      const content = withDot ? `• ${text}` : text;
      doc.text(content, 15, yPosition);
      return yPosition + 10;
    };

    // Contenu
    let y = 90;
    // ${formData.}

    y = addBlueTitle(`ACTIVITES : ${formData.activites}`, y);
    y = addBlueTitle("1- DEVELOPPEMENT PERSONNEL", y);
    y = addGreenText(`LA GESTION DES EMOTIONS ET DES FRUSTRATIONS : ${formData.gestion_emotions}`, y);
    y = addGreenText(`CONTROLE D’ADDICTION : ${formData.controle_addiction}`, y);
    y = addGreenText(`VOLONTE DE GRANDIR : ${formData.volonte_grandir}`, y);

    y = addBlueTitle("2- DEVELOPPEMENT SOCIAL", y);
    y = addGreenText(`RELATION AVEC SA FAMILLE : ${formData.relation_famille}`, y);
    y = addGreenText(`RELATION AVEC LES JEUNES : ${formData.relation_jeunes}`, y);
    y = addGreenText(`RELATION AVEC LES ADULTES : ${formData.relation_adultes}`, y);

    y = addBlueTitle(`3- DEVELOPPEMENT DE COMPETENCE : ${formData.developpement_competence}`, y);
    y = addGreenText(`AUTONOMIE AU QUOTIDIEN : ${formData.autonomie_quotidien}`, y);

    y = addBlueTitle("4- PROJECTION VERS L’AVENIR :", y);
    y = addGreenText(`SCOLAIRE ET/OU PROFESSIONNELLE : ${formData.scolaire_professionnelle}`, y);

    y = addBlueTitle("5- SOIN & HYGIENE DE VIE", y);
    y = addGreenText(`SUIVI MEDICAL : ${formData.suivi_medical}`, y);
    y = addGreenText(`HYGIENE DE VIE : ${formData.hygiene_vie}`, y);
    y = addGreenText(`SUIVI PSYCHOLOGIQUE : ${formData.suivi_psychologique}`, y);
    y = addGreenText(`SUIVI PSYCHIATRIQUE : ${formData.suivi_psychiatrique}`, y);

    y = addBlueTitle("6- COMPTE RENDU DE PASSATION", y);
    y = addGreenText(`Le mot du jeune concernant son évolution et ou ses objectifs de séjour : ${formData.compte_rendu}`, y);

    y = addBlueTitle("7- EVENEMENTS MARQUANTS ET AUTRES OBSERVATIONS :", y);
    y = addGreenText(`Lien extérieur : ${formData.lien_exterieur}`, y, true);
    y = addGreenText(`Entretien psychologique : ${formData.entretien_psychologique}`, y, true);
    y = addGreenText(`Incident : ${formData.incident}`, y, true);
    y = addGreenText(`Note d’information : ${formData.note_information}`, y, true);
    y = addGreenText(`AUTRES : ${formData.autres}`, y, true);

    y = addBlueTitle(`8- PRECONISATION : ${formData.preconisations}`, y);
    const filename = `RH_${new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '-')}.pdf`;
    doc.save(filename);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: "red" }}>Formulaire Rapport Hebdomadaire</h1>
      <form>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Jeune :<input type="text" name="jeune" value={formData.jeune} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>AE :<input type="text" name="ae" value={formData.ae} onChange={handleChange} /></label></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Semaine : <input type="text" name="semaine" value={formData.semaine} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Lieu :<input type="text" name="lieu" value={formData.lieu} onChange={handleChange} /></label></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Date d’appel : <input type="text" name="dateAppel" value={formData.dateAppel} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Rendez-vous :<input type="text" name="rendezVous" value={formData.rendezVous} onChange={handleChange} /></label></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Date d’envoi du RE :<input type="text" name="dateRE" value={formData.dateRE} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Date d’envoi du PPA :<input type="text" name="datePPA" value={formData.datePPA} onChange={handleChange} /></label></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Date d’envoi du questionnaire : <input type="text" name="dateQuestionnaire" value={formData.dateQuestionnaire} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Nombre de rapports :<input type="text" name="nombreRapports" value={formData.nombreRapports} onChange={handleChange} /></label></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}><label>Date du Bilan : <input type="text" name="dateBilan" value={formData.dateBilan} onChange={handleChange} /></label></td>
            <td style={{ border: '1px solid black', padding: '8px', color: "red" }}></td>
          </tr>
        </table>
        <h3>
          ACTIVITES :
          <input type="text" name="activites" value={formData.activites} onChange={handleChange} />
        </h3>
        <h2>1- DEVELOPPEMENT PERSONNEL.</h2>
        <h3>
          LA GESTION DES EMOTIONS ET DES FRUSTRATIONS :
          <input type="text" name="gestion_emotions" value={formData.gestion_emotions} onChange={handleChange} />
        </h3>
        <h3>
          CONTROLE D’ADDICTION :
          <input type="text" name="controle_addiction" value={formData.controle_addiction} onChange={handleChange} />
        </h3>
        <h3>
          VOLONTE DE GRANDIR :
          <input type="text" name="volonte_grandir" value={formData.volonte_grandir} onChange={handleChange} />
        </h3>
        <h2>2 - DEVELOPPEMENT SOCIAL</h2>
        <h3>
          RELATION AVEC SA FAMILLE :
          <input type="text" name="relation_famille" value={formData.relation_famille} onChange={handleChange} />
        </h3>
        <h3>
          RELATION AVEC LES JEUNES :
          <input type="text" name="relation_jeunes" value={formData.relation_jeunes} onChange={handleChange} />
        </h3>
        <h3>
          RELATION AVEC LES ADULTES :
          <input type="text" name="relation_adultes" value={formData.relation_adultes} onChange={handleChange} />
        </h3>
        <h2>
          3- DEVELOPPEMENT DE COMPETENCE :
          <input type="text" name="developpement_competence" value={formData.developpement_competence} onChange={handleChange} />
        </h2>
        <h3>
          AUTONOMIE AU QUOTIDIEN :
          <input type="text" name="autonomie_quotidien" value={formData.autonomie_quotidien} onChange={handleChange} />
        </h3>
        <h3>
          SCOLAIRE ET/OU PROFESSIONNELLE:
          <input type="text" name="scolaire_professionnelle" value={formData.scolaire_professionnelle} onChange={handleChange} />
        </h3>
        <h2>5- SOIN & HYGIENE DE VIE</h2>
        <h3>
          SUIVI MEDICAL :
          <input type="text" name="suivi_medical" value={formData.suivi_medical} onChange={handleChange} />
        </h3>
        <h3>
          HYGIENE DE VIE :
          <input type="text" name="hygiene_vie" value={formData.hygiene_vie} onChange={handleChange} />
        </h3>
        <h3>
          SUIVI PSYCHOLOGIQUE :
          <input type="text" name="suivi_psychologique" value={formData.suivi_psychologique} onChange={handleChange} />
        </h3>
        <h3>
          SUIVI PSYCHIATRIQUE :
          <input type="text" name="suivi_psychiatrique" value={formData.suivi_psychiatrique} onChange={handleChange} />
        </h3>
        <h2>
          6- COMPTE RENDU DE PASSATION / Le mot du jeune concernant son évolution et ou ses objectifs de séjour :
          <input type="text" name="compte_rendu" value={formData.compte_rendu} onChange={handleChange} />
        </h2>
        <h3>7- EVENEMENTS MARQUANTS ET AUTRES OBSERVATIONS :</h3>
        <ul>
          <li>
            Lien extérieur :
            <input type="text" name="lien_exterieur" value={formData.lien_exterieur} onChange={handleChange} />
          </li>
          <li>
            Entretien psychologique :
            <input type="text" name="entretien_psychologique" value={formData.entretien_psychologique} onChange={handleChange} />
          </li>
          <li>
            Incident :
            <input type="text" name="incident" value={formData.incident} onChange={handleChange} />
          </li>
          <li>
            Note d’information :
            <input type="text" name="note_information" value={formData.note_information} onChange={handleChange} />
          </li>
          <li>
            Autres :
            <input type="text" name="autres" value={formData.autres} onChange={handleChange} />
          </li>
        </ul>
        <h3>
          8- PRECONISATIONS:
          <input type="text" name="preconisations" value={formData.preconisations} onChange={handleChange} />
        </h3>
      </form>
      <button
        onClick={handleSubmit}
      >
        Sometre
      </button>
    </div>
  );
};

export default RH_PDF;
