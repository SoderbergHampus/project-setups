# Setting up a JavaScript project

At this time, this guide is only test for running in node and not browser.

## Initialize project

Use the command below to initialize project:

```bash
npm init
```

Then add following to package.json:

```bash
"type": "module"
```

## Eslint

### Step 1.

Initialize eslint config, I choose json format:

```bash
npm init @eslint/config
```

### Step 2. (optional preference)

(optional preference) Install google rules for linter:

```bash
npm install --save-dev eslint eslint-config-google
```

Add it to the to the eslint config file:

```bash
“extends”: ["eslint:recommended", "google"]
```

### Step 3.

Make sure you have test, start and lint commands set-up in the package.json:

```bash
"scripts": {
	"test": "jest",
	"start": "node ./src/index.js",
	"lint": "eslint './src/**/*.js'"
},
```

## Jest

### Step 1.

Install the dependancy:

```bash
npm install --save-dev jest
```

### Step 2.

Add it to the eslint env:

```bash
“jest”: true
```

## Babel

### Step 1.

Install dependancy:

```bash
npm install --save-dev @babel/plugin-transform-modules-commonjs
```

### Step 2.

Create '.babelrc'-file and fill with content:

```bash
{
	"env": {
	  "test": {
			"plugins": ["@babel/plugin-transform-modules-commonjs"]
	  }
	}
}
```

## .gitignore

Make sure to add 'node_modules/' to '.gitignore'
