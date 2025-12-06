const translations = {
  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    hero_title: "Empowering communities",
    hero_subtitle: "Innovative solutions for sustainable growth",
    hero_button: "View services",

    about_title: "Empowering communities",
    about_subtitle: "Innovative solutions for growth",
    about_text:
      "TA Global Initiative is a dynamic company dedicated to driving sustainable development across various sectors, including general trade, sanitation, construction, public works, resource exploitation, and potable water systems.",
    about_button: "Get in touch",

    services_title: "Empowering solutions",
    services_subtitle: "Innovative projects for sustainable growth",

    service1_title: "Sustainable trade solutions",
    service1_text: "Innovative approaches to enhance global trading practices.",

    service2_title: "Water resource management",
    service2_text: "Ensuring access to clean water for communities.",

    service3_title: "Innovative sanitation solutions",
    service3_text: "Transforming sanitation systems for healthier communities.",

    services_button: "Get in touch",

    gallery_title: "Our Work in Action",

    contact_title: "We're here to support you!",

    form_name_label: "Name *",
    form_email_label: "Email address *",
    form_phone_label: "Phone number *",
    form_message_label: "Message",
    form_checkbox_text:
      "I allow this website to store my submission so they can respond to my inquiry.",
    form_button: "Submit",

    contact_info_title: "Get in touch",
    contact_location_label: "Location:",
    contact_hours_label: "Hours:",
    contact_hours_text:
      "Monday – Friday: 8:00am – 5:00pm\nSaturday: Closed\nSunday: Closed",

    footer_text: "© 2025 TA Global Initiative. All rights reserved."
  },

  fr: {
    nav_about: "À propos",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",

    hero_title: "Autonomiser les communautés",
    hero_subtitle: "Des solutions innovantes pour une croissance durable",
    hero_button: "Voir les services",

    about_title: "Autonomiser les communautés",
    about_subtitle: "Des solutions innovantes pour la croissance",
    about_text:
      "TA Global Initiative est une entreprise dynamique dédiée au développement durable dans divers secteurs, notamment le commerce général, l’assainissement, la construction, les travaux publics, l’exploitation des ressources et les systèmes d’eau potable.",
    about_button: "Contactez-nous",

    services_title: "Solutions autonomisantes",
    services_subtitle: "Projets innovants pour une croissance durable",

    service1_title: "Solutions commerciales durables",
    service1_text:
      "Approches innovantes pour améliorer les pratiques commerciales globales.",

    service2_title: "Gestion des ressources en eau",
    service2_text: "Garantir l'accès à l'eau potable pour les communautés.",

    service3_title: "Solutions sanitaires innovantes",
    service3_text: "Transformer les systèmes d'assainissement pour des communautés en meilleure santé.",

    services_button: "Contactez-nous",

    gallery_title: "Notre travail en action",

    contact_title: "Nous sommes là pour vous aider !",

    form_name_label: "Nom *",
    form_email_label: "Adresse e-mail *",
    form_phone_label: "Numéro de téléphone *",
    form_message_label: "Message",
    form_checkbox_text:
      "J'autorise ce site à stocker mes informations afin de répondre à ma demande.",
    form_button: "Envoyer",

    contact_info_title: "Contactez-nous",
    contact_location_label: "Adresse :",
    contact_hours_label: "Heures :",
    contact_hours_text:
      "Lundi – Vendredi : 8h00 – 17h00\nSamedi : Fermé\nDimanche : Fermé",

    footer_text: "© 2025 TA Global Initiative. Tous droits réservés."
  }
};


function changeLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const texts = translations[lang];
  for (const id in texts) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = texts[id];
    }
  }
}

// Load saved language or default to English
const savedLang = localStorage.getItem("siteLanguage") || "en";
applyTranslations(savedLang);
