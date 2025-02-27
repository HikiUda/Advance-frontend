module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    // When lint or commit, delete 'prettier/react'
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'fsd-layer-import', 'unused-imports'],

    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4, { SwitchCase: 1 }],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'implicit-arrow-linebreak': 'warn',
        'object-curly-newline': 'off',
        'wrap-iife': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/no-array-index-key': 'off',
        'function-paren-newline': 'off',
        'operator-linebreak': 'warn',
        'no-undef': 'off',
        'fsd-layer-import/path-checker': ['error', { alias: '@' }],
        'fsd-layer-import/public-api-import': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.ts', '**/*.stories.tsx', '**/StoreDecorator.tsx'],
            },
        ],
        'fsd-layer-import/layer-import': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 200 }],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'target',
                    'path',
                    'align',
                    'size',
                    'data-testid',
                    'name',
                    'to',
                    'fallback',
                    'direction',
                    'align',
                    'justify',
                    'gap',
                    'border',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },

    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
