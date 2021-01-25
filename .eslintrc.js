module.exports = {
    'root': true,
    'env': {
        'es6': true,
        'commonjs': true
    },
    'extends': [
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true
        },
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-var': ['error'],
        'prefer-const': ['error'],
        'complexity': ['error', { 'max': 21 }],
        'no-console': ['error', { 'allow': ['warn', 'error'] }],
        'no-unused-vars': ['error']
    },
    'overrides': [
        {
            'files': ['test/**/*'],
            'env': { 'mocha': true }
        }
    ],
    'globals': {
        'process': true,
        'window': true
    }
};
