// Configuración del selector de idiomas para 6 idiomas
const languageConfig = {
  // Idiomas originales
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
    displayName: "EN"
  },
  es: {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
    displayName: "ES"
  },
  pt: {
    code: "pt",
    name: "Português",
    flag: "🇧🇷",
    displayName: "PT"
  },
  // Idiomas oficiales de Suiza
  de: {
    code: "de",
    name: "Deutsch",
    flag: "🇨🇭",
    displayName: "DE"
  },
  fr: {
    code: "fr",
    name: "Français",
    flag: "🇨🇭",
    displayName: "FR"
  },
  it: {
    code: "it",
    name: "Italiano",
    flag: "🇨🇭",
    displayName: "IT"
  }
};

// Función para generar el HTML del selector de idiomas
function generateLanguageSelector(currentLang) {
  let html = '<div class="language-selector">';
  
  // Crear botones para cada idioma
  for (const lang in languageConfig) {
    const langInfo = languageConfig[lang];
    html += `
      <button 
        class="language-btn ${currentLang === lang ? 'active' : ''}" 
        onclick="changeLanguage('${lang}')" 
        title="${langInfo.name}"
      >
        ${langInfo.displayName}
      </button>
    `;
  }
  
  html += '</div>';
  return html;
}

// Agrupar idiomas por regiones para la interfaz
const languageGroups = {
  european: ["en", "de", "fr", "it"],
  latinAmerican: ["es", "pt"]
};
