import globals from 'globals'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    files: ['*.ts', '*.vue'],
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
  },
  {
    files: ['*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  js.configs.recommended,
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    ...typescript.configs.recommended,
    ...typescript.configs['recommended-requiring-type-checking'],
  },
  {
    files: ['*.vue'],
    ...pluginVue.configs['essential'],
  },
]
