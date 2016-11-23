import i18next from 'i18next';

let instance = null;

export default class I18N {
  constructor() {
    if (!instance) {
      instance = this;
    }

    // Maintains the default locale from init
    this.defaultLocale = null;

    // Test whether instance is isInitialized
    this.isInitialized = false;

    // Maintains the supported locales that will be loaded
    this.registeredLocales = [];

    // Maintains the loaded implementation for i18n logic
    this.i18n = null;

    return instance;
  }

  static getInstance() {
    return new I18N();
  }

  translate(translationKey, overrides = {}) {
    let value = translationKey;

    /* eslint-disable no-param-reassign */
    overrides.lng = overrides.locale;
    /* eslint-enable no-param-reassign */

    if (this.i18n && translationKey) {
      value = this.i18n.t(translationKey, overrides);
    }

    return value;
  }

  init(allLocales, defaultLocale) {
    if (!this.isInitialized) {
      // Save provided settings
      this.registeredLocales = allLocales;
      this.defaultLocale = defaultLocale;

      // Build resource bundle of translations
      const resources = instance.loadAllTranslations();

      i18next.init({
        initImmediate: false,

        lng: this.defaultLocale,

        preload: this.registeredLocales,

        defaultNS: 'common',

        interpolation: {
          escapeValue: false,
        },

        resources,
      });

      // Add i18n implementation to service
      this.i18n = i18next;

      // Mark as initialized
      this.isInitialized = true;
    }
  }

  getResourceBundle() {
    let bundle = null;
    if (this.i18n && this.i18n.store) {
      bundle = this.i18n.store.data;
    }
    return bundle;
  }

  loadAllTranslations() {
    const resources = {};

    if (this.registeredLocales && this.registeredLocales.length > 0) {
      this.registeredLocales.map((locale) => {
        // Initialize tree for locale
        resources[locale] = {};

        /* eslint-disable global-require, import/no-dynamic-require */
        const common = require(`../locales/${locale}/common.js`);
        /* eslint-enable global-require, import/no-dynamic-require */
        resources[locale].common = common || {};

        return resources[locale].common;
      });
    }
    return resources;
  }
}
