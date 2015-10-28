# gulp-bootstrap
works with gulp, but does nothing. Use it to bootstrap your own gulp plugin with TypeScript, Travis and npm.

### Buildstatus/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/gulp-bootstrap.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-bootstrap)
[![devDependency Status](https://david-dm.org/pushrocks/gulp-bootstrap/dev-status.svg)](https://david-dm.org/pushrocks/gulp-bootstrap#info=devDependencies)

### Usage
This npm package comes with everything you need to start your own gulp plugin.
This package doesn't require global gulp (just local -> simply do npm install`) to compile TypeScript.

to compile TypeScript do `npm test`
to setup release do `npm run setup`
to release a patch do `npm run release`

We recommend using travis for npm releasing and test integration.

#### The structure

```
ts/
|- compile/
|  |- compile.js **** contains gulp task`
|- index.ts **** Your main TypeScript file. 
```

