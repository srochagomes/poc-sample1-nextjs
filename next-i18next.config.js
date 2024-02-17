module.exports = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR','en-US']
  },
  fallbackLng: {
    default: ['pt-BR']
  },  
  nonExplicitSupportedLngs: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
