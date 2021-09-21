const withImages = require("next-images");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    rewrites: async function () {
      return [];
    },

    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    },
    ...withImages(defaultConfig),
  };
};
