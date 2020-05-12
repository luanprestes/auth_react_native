module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            Components: './src/Components',
            Config: './src/Config',
            Routes: './src/Routes',
            Screens: './src/Screens',
            Store: './src/Store',
          },
        },
      ],
    ]
  };
};
