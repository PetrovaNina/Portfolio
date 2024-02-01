module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: { grid: false, flexbox: "no-2009" },
      stage: 0,
      features: {
        "custom-properties": {
          warnings: true,
        },
      },
    },
  },
};

