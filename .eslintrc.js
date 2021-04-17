module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    // prettier
    'prettier/prettier': ['error'],

    // TypeScript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    // React
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': ['off', {}]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
