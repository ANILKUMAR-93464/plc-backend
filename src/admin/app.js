import AuthLogo from './extensions/auth-logo.png';
import MenuLogo from './extensions/menu-logo.png';

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo: AuthLogo,
  },
  menu: {
    logo: MenuLogo,
  },
  head: {
    favicon: AuthLogo,
    title: 'PLC - Property Loss Consultants',
  },
  translations: {
    en: {
      'Auth.form.welcome.title': 'Welcome to PLC!',
      'Auth.form.welcome.subtitle': 'Log in to your PLC account',
    },
  },
};

const bootstrap = (app) => {
  // Customize admin panel branding
};

export default {
  config,
  bootstrap,
};

