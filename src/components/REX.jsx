
import React from "react";

const GrilleLecture = () => {
    const echelles = [
        {
            titre: "Echelle 1",
            contenu: [
                "Insulte",
                "Rébellion légère",
                "Non-respect des consignes",
                "Refus de se lever",
                "Refus de prendre les médicaments",
                "Léger refus de l’autorité",
                "Mauvaise foi, mensonge",
                "Cigarette fumée sans autorisation",
                "Saute d’humeurs légères",
                "Utilisation du portable sans autorisation",
                "Utilisation d’internet sans autorisation",
                "Non-respect des horaires",
                "Sortie sans permission",
                "Dissimulation de nourriture dans la chambre",
                "Procrastination (le fait de ne rien faire et de remettre au lendemain)",
            ],
        },
        {
            titre: "Echelle 2",
            contenu: [
                "Refus exprimé avec plus d’agressivité",
                "Hurlement, insulte plus sévère",
                "Provocation",
                "Fugue légère (retour dans les 5h)",
                "Alcoolisation légère",
                "Entêtement répété",
                "Pleurs répété",
            ],
        },
        {
            titre: "Echelle 3",
            contenu: [
                "Violence physique accompagné d’insulte",
                "Repli sur soi",
                "Enfermement",
                "Prise de médicament non autorisé",
                "Atteinte à la dignité de l’autre (mettre de la pisse dans la boisson de l’AE)",
                "Alcoolisation forte",
                "Le vol (le fait de voler de l’argent ou des biens)",
                "Nervosité extrême",
                "Bouffées délirantes (notion à travailler avec les assistants et stagiaires)",
                "Conduite de voiture sans autorisation",
                "Crise d’angoisse sévère",
            ],
        },
        {
            titre: "Echelle 4",
            contenu: [
                "ITT",
                "Violence physique envers l’assistant ou autres entrainant une ITT",
                "Destruction importante des biens",
                "Relation sexuelle entre jeunes",
                "Fugues ayant entrainé le contact des autorités",
                "Drogues (le fait de fumer du cannabis)",
                "Scarification légère",
                "Violence envers lui-même",
                "Tentative de TS par médicaments",
            ],
        },
        {
            titre: "Echelle 5",
            contenu: [
                "Tentative de suicide",
                "Placement en garde à vue",
                "Mise en danger de la vie d’autrui (incendie à Arivonimamo)",
                "Agression sexuelle",
            ],
        },
    ];

    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>Grille de Lecture : Échelle 1 à 5</h1>
                {echelles.map((echelle, index) => (
                    <div key={index} style={styles.echelle}>
                        <h2 style={styles.echelleTitle}>{echelle.titre}</h2>
                        <ul style={styles.list}>
                            {echelle.contenu.map((item, idx) => (
                                <li key={idx} style={styles.item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        maxWidth: "800px",
        margin: "0 auto",
        borderRadius: "8px",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#2c3e50",
    },
    echelle: {
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "6px",
        backgroundColor: "#fff",
    },
    echelleTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#34495e",
    },
    list: {
        listStyleType: "disc",
        paddingLeft: "20px",
    },
    item: {
        marginBottom: "5px",
    },
};

export default GrilleLecture;
