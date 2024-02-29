# Vite set-up guide

## Initialize project

Run commands to initialize a vite project and install basic dependencies:

```bash
npm create vite@latest
cd {project}
```

If you need global constants, also create a '.env'-file in the root directory
for them.

## eslint

Install needed packages:

```bash
npm install --save-dev eslint typescript typescript-eslint eslint-config-prettier
```

Create/edit eslint file. I prefer using a json (i.e '.eslintrc) with the
following content:

```json
{
  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {"ecmaVersion": "latest", "sourceType": "module"},
  "plugins": ["@typescript-eslint", "react-refresh"],
  "rules": {
    "react-refresh/only-export-components": "warn"
  },
  "root": true
}
```

## Configure prettier

Create '.prettierrc' file and add prefered configurations, I personally like:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxSingleQuote": true
}
```

## Reset the CSS

Like a lot in this guide, this is very subjective and has a lot of room for
improvement. But I like to remove the premade css in 'App.css' and 'index.css'.

Following this I like to create the following css-files.

'reset.css' for consistency:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

body {
  margin: 10px;
}
```

'constants.css' for global constants to import in multiple css-files:

```css
:root {
  --a--color: color;
  --another--color: color;
}
```

## javascript/typescript

I presonally like create a 'api.ts', for functions I want available globally. as
well as 'types.ts' for types I want available globally.
