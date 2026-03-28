const isLangSet = window.localStorage.getItem('lang') !== null;

if (!isLangSet) {
  // Set english as the default language if not set
  window.localStorage.setItem('lang', 'en');
}

const lang = window.localStorage.getItem('lang') || 'en';
const script = document.createElement('script');

// Redirect to language specific page
switch (lang) {
  case "en":
    window.location.href = "./en/index.html";
    break;
  case "jp":
    window.location.href = "./jp/index.html";
    break;
  // Add more cases for other languages as needed
  default:
    window.location.href = "./en/index.html";
    break;
}
