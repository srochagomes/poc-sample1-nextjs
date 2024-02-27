const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: false,
  i18n,
  webpack: (config, { dev, isServer }) => {
    // Adiciona TerserPlugin e CssMinimizerPlugin apenas para produção
    if (!dev) {
      // Adiciona TerserPlugin para minimizar arquivos JS
      config.optimization.minimizer.push(new TerserPlugin());

      // Adiciona CssMinimizerPlugin para minimizar arquivos CSS
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }

    // Configura o worker-loader para carregar e executar módulos de Worker
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' }
    });   
    
    
    //Analise de dependencia do projeto
    // if (!isServer) {
    //   config.plugins.push(new BundleAnalyzerPlugin({
    //     analyzerMode: 'static',
    //     reportFilename: 'webpack-bundle-analyzer.html',
    //   }));
    // }

    return config;
  },
};
