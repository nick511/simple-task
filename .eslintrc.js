module.exports = {
  extends: ['standard', 'react-app', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    /*
    "key-spacing": "off",
    "jsx-quotes": [1, "prefer-single"],
    "object-curly-spacing": [1, "always"],
    "semi": [1, "never"],
    "comma-dangle": "off",
    */
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}
