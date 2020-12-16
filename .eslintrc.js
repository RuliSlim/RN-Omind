module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "react", "react-native"],
  rules: {
    "quotes": ["error", "double"],
    "indent": ["error", "tab"],
    "semi": ["error", "always"]
  }
};
