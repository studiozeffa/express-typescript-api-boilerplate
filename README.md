# Express TypeScript API Boilerplate

This is a boilerplate for building APIs using Express and TypeScript for node.js.

## Installation

This boilerplate is intended as a starting point for building an API with Express.js and TypeScript.

You probably don't want to inherit all of the history of this boilerplate's repo. Instead, download a zip of this repo by [clicking here](https://github.com/studiozeffa/express-typescript-api-boilerplate/archive/master.zip) or using the big green 'Clone or download' button above. Unzip the folder to a place of your choosing.

Next, if you want the full experience of this boilerplate, you'll need to setup version control. Change into your folder and run:

```
git init
```

This will initialise the git repository, meaning that your code will be nicely formatted by the precommit hooks installed below.

Finally, run

```
npm install
```

to install all the dependencies that are needed.

## Usage

Use npm scripts to work with the boilerplate as follows:

- `npm run dev`: runs the express server in development mode, using [`nodemon`](https://nodemon.io) and [`ts-node`](https://github.com/TypeStrong/ts-node) to automatically restart the Express server as necessary.
- `npm run build`: compiles the TypeScript files from the `src/` folder into the `lib` folder.
- `npm start`: starts the Express server using the compiled files in `lib/`. Use this in production.

## Authoring

The boilerplate comes with [`tslint`](https://palantir.github.io/tslint/) and [`prettier`](https://prettier.io) pre-installed and configured. [`Husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) are also used to ensure that committed code has a consistent style.

If you'd like to setup your editor to check for tslint issues and/or format your code with prettier automatically, please refer to your editor's documentation. We prefer [VSCode](https://code.visualstudio.com).

## Troubleshooting

### Code is not being formatted on commit

Check that you followed the instructions in the Installation section in order. Specifically, you need to set up version control (`git init`) before running `npm install`. This is because the husky dependency automatically adds the necessary precommit hooks during the `npm install` stage.

## License

[ISC](https://choosealicense.com/licenses/isc/)