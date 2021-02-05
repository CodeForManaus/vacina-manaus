module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['build/', 'public/'],
  plugins: ['react', 'prettier'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
    ],
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
}
