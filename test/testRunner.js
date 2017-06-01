const path = require('path');
const sassTrue = require('sass-true');

const bp = path.join(__dirname, 'bp.scss');
sassTrue.runSass({file: bp}, describe, it);

const square = path.join(__dirname, 'square.scss');
sassTrue.runSass({file: square}, describe, it);

const relUnits = path.join(__dirname, 'relative-unit.scss');
sassTrue.runSass({file: relUnits}, describe, it);

const mapExtras = path.join(__dirname, 'map-extras.scss');
sassTrue.runSass({file: mapExtras}, describe, it);

const typeScale = path.join(__dirname, 'type-scale.scss');
sassTrue.runSass({file: typeScale}, describe, it);
