const list_services = [
    {
        nom: "Livraison de repas",
        categorie: "service"
    },
    {
        nom: "Téléassistance",
        categorie: "service"
    },
    {
        nom: "Aide au repas",
        categorie: "service"
    },
    {
        nom: "Aide aux courses",
        categorie: "service"
    },
    {
        nom: "Aides ménagères",
        categorie: "service"
    },
    {
        nom: "Petits et gros travaux",
        categorie: "service"
    },
    {
        nom: "Aides administratives",
        categorie: "service"
    },
    {
        nom: "Transport & accompagnement",
        categorie: "service"
    },
    {
        nom: "Animaux de compagnie",
        categorie: "service"
    },
    {
        nom: "Adaptation logement",
        categorie: "service"
    },
    {
        nom: "Téléconsultation",
        categorie: "santé"
    },
    {
        nom: "Livraison de médicaments",
        categorie: "santé"
    },
    {
        nom: "Auxiliaires de vie",
        categorie: "santé"
    },
    {
        nom: "Transport médicalisé",
        categorie: "santé"
    },
    {
        nom: "Opticien à domicile",
        categorie: "santé"
    },
    {
        nom: "Appareil auditif",
        categorie: "santé"
    },
    {
        nom: "Soins à domicile",
        categorie: "santé"
    },
    {
        nom: "Prise de RDV médicaux",
        categorie: "santé"
    },
]

const list_sidebar_menus = [
    {
        id: "accueil",
        name: "Dashboard",
    },
    {
        id: "gestion_bacs",
        name: "Gestion des bacs",
    },
    {
        id: "tournées",
        name: "Gestion des tournées",
    },
    {
        id: "cartes",
        name: "Cartes & Géolocalisation",
    },
    {
        id: "alertes",
        name: "Alertes & Incidents",
    },
    {
        id: "maintenance",
        name: "Maintenance",
    },
]

export const locations = [
    {
      name: "lyon",
      latitude: 45.7578137,
      longitude: 4.8320114,
    },
    {
      name: "marseille",
      latitude: 43.2961743,
      longitude: 5.3699525,
    },
    {
      name: "mulhouse",
      latitude: 47.7467233,
      longitude: 7.3389937,
    },
    {
      name: "nantes",
      latitude: 47.218371,
      longitude: -1.553621,
    },
    {
      name: "toulouse",
      latitude: 43.6044622,
      longitude: 1.4442469,
    },
    {
      name: "valence",
      latitude: 39.4697065,
      longitude: -0.3763353,
    }
  ]

export {
    list_services,
    list_sidebar_menus
}