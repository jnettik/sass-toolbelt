const path = require('path');
const sassTrue = require('sass-true');

const bp = path.join(__dirname, 'bp.scss');
sassTrue.runSass({file: bp}, describe, it);
