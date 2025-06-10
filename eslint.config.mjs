import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/**", "dist/**"],
    plugins: { js },
    extends: ["js/recommended"],// базовый набор правил
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement"
      ],
      "no-unused-vars": ["error"],
      "indent": ["error", 2],
      "no-multi-spaces": ["error"],
      "no-mixed-spaces-and-tabs": "error",
    },
  },
]);
