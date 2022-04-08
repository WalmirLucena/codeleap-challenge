module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest", "cypress"
    ],
    "rules": {
    },
    "extends": [
          "plugin:cypress/recommended"
    ],
    "globals": {
        "cy": true
    }    
}
