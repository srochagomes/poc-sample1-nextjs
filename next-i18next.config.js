module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt','en-US']
  },
  fallbackLng: {
    default: ['pt']
  },  
  nonExplicitSupportedLngs: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}