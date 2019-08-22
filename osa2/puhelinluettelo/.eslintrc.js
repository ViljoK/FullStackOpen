module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
			"error",
			4,
        ],
        "react/jsx-indent": [
            "error",
            4,
        ],
        "semi": [
			"error",
			"never"
        ],
        "react/jsx-curly-newline": "always",
        "react/state-in-constructor": [
            true,
            "always"
        ],
        "react/static-property-placement": "static public field",
        "react/jsx-props-no-spreading": [{
            "html": "enforce",
            "custom": "enforce"
        }],
        "no-alert": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-indent-props": [
            "error",
            4,
        ]
    }
};