import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier, 
    {
      settings: {
        react: {
          version: 'detect', 
        },
      },
      rules:{
        "@typescript-eslint/no-unused-vars": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-object-type": "off", 
      "no-prototype-builtins": "off", 
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
      }
     
    }
];