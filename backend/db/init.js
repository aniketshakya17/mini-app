import DUMMY_PRICE_LIST from "./dummyPriceList.js";

export const seedPriceListForUser = async (PriceList, userId) => {
  for (const item of DUMMY_PRICE_LIST) {
    const exists = await PriceList.findOne({
      where: {
        articleNo: item.articleNo,
        userId,
      },
    });

    if (!exists) {
      await PriceList.create({
        ...item,
        userId,
      });
    }
  }

  console.log("PriceList safely seeded for user:", userId);
};


export const seedTranslationsSafe = async (Translation) => {
  const translations = [
    { key: "login.title", lang: "en", value: "Login" },
    { key: "login.title", lang: "sv", value: "Logga in" },

    { key: "login.emailLabel", lang: "en", value: "Email address" },
    { key: "login.emailLabel", lang: "sv", value: "E-postadress" },

    { key: "login.email", lang: "en", value: "Email address" },
    { key: "login.email", lang: "sv", value: "E-postadress" },

    { key: "login.passwordLabel", lang: "en", value: "Password" },
    { key: "login.passwordLabel", lang: "sv", value: "Lösenord" },

    { key: "login.password", lang: "en", value: "Password" },
    { key: "login.password", lang: "sv", value: "Lösenord" },

    { key: "login.button", lang: "en", value: "Login" },
    { key: "login.button", lang: "sv", value: "Logga in" },

    { key: "login.register", lang: "en", value: "Register" },
    { key: "login.register", lang: "sv", value: "Registrera dig" },

    { key: "login.forgot", lang: "en", value: "Forgot password?" },
    { key: "login.forgot", lang: "sv", value: "Glömt lösenord?" },

    { key: "nav.home", lang: "en", value: "Home" },
    { key: "nav.home", lang: "sv", value: "Hem" },

    { key: "nav.order", lang: "en", value: "Order" },
    { key: "nav.order", lang: "sv", value: "Beställ" },

    { key: "nav.customers", lang: "en", value: "Customers" },
    { key: "nav.customers", lang: "sv", value: "Kunder" },

    { key: "nav.about", lang: "en", value: "About us" },
    { key: "nav.about", lang: "sv", value: "Om oss" },

    { key: "nav.contact", lang: "en", value: "Contact" },
    { key: "nav.contact", lang: "sv", value: "Kontakta oss" },

    { key: "footer.brand", lang: "en", value: "123 Fakturera" },
    { key: "footer.brand", lang: "sv", value: "123 Fakturera" },

    { key: "footer.home", lang: "en", value: "Home" },
    { key: "footer.home", lang: "sv", value: "Hem" },

    { key: "footer.order", lang: "en", value: "Order" },
    { key: "footer.order", lang: "sv", value: "Beställ" },

    { key: "footer.contact", lang: "en", value: "Contact" },
    { key: "footer.contact", lang: "sv", value: "Kontakta oss" },

    {
      key: "footer.copyright",
      lang: "en",
      value: "© 2025 All rights reserved",
    },
    {
      key: "footer.copyright",
      lang: "sv",
      value: "© 2025 Alla rättigheter förbehållna",
    },
  ];

  for (const t of translations) {
    const exists = await Translation.findOne({
      where: { key: t.key, lang: t.lang },
    });

    if (!exists) {
      await Translation.create(t);
    }
  }

  console.log("Translations safely seeded");
};
