let translations = {};

export const loadTranslations = async (lang = "en") => {
  const res = await fetch(
    `http://localhost:8081/api/translations?lang=${lang}`
  );
  translations = await res.json();
};

export const t = (key) => {
  return translations[key] || key;
};
