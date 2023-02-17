// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            atoms: './src/atoms',
            components: './src/components',
            config: './src/config',
            globalStyles: './src/globalStyles',
            hooks: './src/hooks',
            models: './src/models',
            molecules: './src/molecules',
            pages: './src/pages',
            services: './src/services',
            store: './src/store',
            templates: './src/templates',
            utils: './src/utils'
          },
          extensions: ['.ts', '.tsx']
        }
      ]
    ],
    presets: ['babel-preset-expo']
  };
};
