module.exports = {
 "extends": "airbnb",
 "plugins": [
   "react",
   "jsx-a11y",
   "import"
 ],
 "rules": {
   "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
   "import/prefer-default-export": 0,
   "react/prefer-stateless-function": 0,
   "global-require": 0
 }
};