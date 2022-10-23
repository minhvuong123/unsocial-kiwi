module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
