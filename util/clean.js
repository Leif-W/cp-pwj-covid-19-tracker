'use strict';

console.log('Clean started.');
const fse = require('fs-extra');
let BUILD_DIR = 'build';

try {
	fse.removeSync(BUILD_DIR);
	console.log(`Success: remove ${BUILD_DIR}`);
} catch (err) {
	console.error(`Error: remove ${BUILD_DIR}: ${err}`);
}

console.log('Clean completed.');
return 0;