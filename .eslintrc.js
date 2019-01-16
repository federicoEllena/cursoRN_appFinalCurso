module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended"
  ],
  "globals": {
    "__DEV__": true,
  },
  "rules": {
    "no-invalid-this": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] } ],
    "import/order": ["error", {"newlines-between": "always"}],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/extensions": ["error", { js: "never" }],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "react/no-typos": "off"
  }
};