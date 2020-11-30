# Setting up the Starter Pack
## Introduction
This start-up pack utilizes both Gulp4 and Webpack4 to compile code. By default it is setup to work building MERN stack applications, but can easily be setup to work with other frameworks such as Adonis and other templating engines (such as ejs) to build static websites.

Gulp runs a live-server. Webpack also provides a secondary live-server and creates the final build variant of the application for publishing online.

NOTE: Webpack is recommended for working with React projects (its  much more faster). Gulp is recommended for working with projects that involve vanillaJS and especially template engines. Gulp can be used for React projects however reloading the live-server is much slower.

P.S. Gulp seems to render twice, using Webpack for the second render. Will seperate Gulp and Webpack live-servers in order to acheive faster compiling and rendering.

## Setup for AdonisJS Framework
Create a new adonis project folder, then import the following files from the dev-startpack into the root directory of the adonis project folder: gulpfile.js, .babelrc, webpack.dev.js, webpack.prod.js, and copy the devDependencies and dependencies from the startup pack into the package.json file of the adonis project.

Then import the index.js file used to implement react from the startup into the resources/assets/js directory of the adonis project folder. Then in the welcome.edge file in the resources folder, make a script tag that links to the index.js file in the public folder (as it will appear there when compiling code in dev mode).

Run:
```
npm install
```

Then run:
```
adonis serve --dev
```
Adonis should run live-server in localhost:3333/

Now run:
```
npm run proxy
```
A proxy server runs in localhost:3000

## Begin Setup - For ExpressJS Framework Mern
Begin with the installation of node.

Once downloaded and installed into your machine download or clone this folder from the repo.

Download and install vsCode or Atom.

## Make sure Node and NPM are installed:

```bash
Node -v
NPM -v
```

## Install Node Packages Using NPM
Run the Following NPM Commands in a bash terminal of your choice, do so while in the root directory of the project folder:

```bash
    npm install gulp-cli -g
    npm install
```
The installation process should be simple as the packages.json file already contains the necessary package setup.

## Make sure Gulp and Webpack are installed:
```bash
    gulp -v    
    webpack -v
```

# Now Run the Starter Pack Development Server
## Development Mode
Gulp provides the live server. Webpack compiles our javascript code. This setup is for MERN applications. Gulp and Webpack run in development mode.

### Start the dev server
```bash
  npm run watch
```
Run default development mode. Compiles SASS to CSS, compiles JS with Webpack and Gulp runs Live Server at localhost 3000. 

### Start proxy dev server
localhost can run alongside another live server, such as when using live server provided by adonisJS (adonis serve --dev), use this instead of utilizing staticDev for better performance. Live-reload is provided. Can also run React components inside your adonisJs applications. Another loccalhost server must be active on 3333 before running this script command.

Have the index.html / welcome.edge file point to the public directory of the index.js file to enable react. Must also have a <div id="app">.</div> By default there should be a compiled index.html or welcome.html file in the public folder for the live-server to connect properly.
```bash
  npm run proxy
```
### Start static development
Run this mode instead if using another type of framework such as AdonisJS. This way templating engines and their files (such as ejs or edge) are compiled to make static oriented websites. If you get an error regarding not reading style function, in the index/welcome file erase the {{style('style')}} and instead use a <link href='style.css'>; it seems that manual linking way need to be used as adonis syntax may not be parsed properly.
```bash
  npm run staticDev
```

### Compile images using gulp
```bash
   npm run images
```

## Build Mode
### Build files for production
```bash
  npm run build
```

### Run webpack in build mode to compile all javascript assets and all other assets (images, html and scss included). For static webpages.
```bash
  npm run staticBuild
```

## Webpack Only Commands
### Webpack Live Server in Development Mode
```bash
npm run start-dev
```

### Run Webpack Live Server (config to dev mode)
```bash
npm run serve-webpack
```

### Run Webpack Development Mode and Compile JS Assets
```bash
npm run webpack-dev
```

### Run Webpack Build Mode and Compile all Project Assets into a Dist Folder
```bash
npm run webpack-build
```

## Nodemon Server
```bash
npm run server
```