module.exports = {
  root: true,
  extends: "babel",
  plugins: ["prettier"],
  rules: {
    "no-var": 0,
    "max-len": 0,
    "prettier/prettier": "error",
  },
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "script",
  },
  overrides: [
    {
      files: ["test/**/*"],
      env: {
        mocha: true,
      },
    },
  ],
};
