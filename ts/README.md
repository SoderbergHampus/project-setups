# Set up guide - TypeScript

## Main TypeScript project

### Step 1. Initialize the project:

```bash
npm init -y
```

### Step 2. Install typescript in project:

```bash
npm install typescript --save-dev
```

### Step 3. Generate tsconfig.json

```bash
npx tsc --init --rootdir src --outdir dist
```

Then add the following to the tsconfig.json file, outside of compileroptions:

```bash
"include": ["src"],
"exclude": ["node_modules"],
```

### Step 4.

Install:

```bash
npm install @tsconfig/recommended --save-dev
```

### Step 5.

Add scripts to package.json:

```bash
"scripts": {
	"build": "tsc",
	"build:watch": "tsc -w",
	"dev": "ts-node src/index.ts",
	"dev:watch": "npm run dev -- --watch src/*.ts",
	"test": "jest ./src/__tests__/*.ts",
	"test:watch": "npm t -- --watch",
	"lint": "eslint ./src/*.ts ./src/__tests__/*.ts",
	"start": "node dist/*.js"
},
```

## Jest

### Step 1.

Install jest:

```bash
npm install -D jest ts-jest @types/jest
```

Initialize it's config file:

```bash
npx ts-jest config:init
```

### Step 2.

I generally choose to place test in src folder. Make sure that the folder with
the test scripts is called '\_\_tests\_\_', unless you specify otherwise.
I.e path becomes '/src/\_\_tests\_\_', which can run with just "npm run jest".

## Eslint

### Step 1.

Install eslint and needed dependancies, also config for ignoring the rules that
prettier covers:

```bash
npm install --save-dev eslint typescript typescript-eslint eslint-config-prettier
```

### Step 2.

Create '.eslintrc' file and fill it with:

```bash
{
  "env": { // add this block
      "node": true
  },
  "extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "root": true
}
```

## Prettier

Create rc file for prettier:

```bash
touch .prettierrc
```

Prettier will use defaults for rules that aren't set in file, I presonally like overriding a couple of them:

```bash
{
  "useTabs": true,
  "tabWidth": 2,
  "singleQuote": true
}
```

## Git

Create '.gitignore'-file and fill with:

```bash
node_modules/
dist/
.idea/
```
