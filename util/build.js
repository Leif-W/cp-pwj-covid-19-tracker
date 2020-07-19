'use strict';

console.log('Build started.');
const fse = require('fs-extra');
let SRC_DIR = 'src',
	BUILD_DIR = 'build';

const buildFilter = (src, dst) => {
	let src_stat = fse.statSync(src),
		dst_stat,
		status;

	try {
		dst_stat = fse.statSync(dst);
	} catch (err) {
		dst_stat = undefined;
	}

	if (dst_stat && dst_stat.isFile) {
		if (src_stat.mtime > dst_stat.mtime) {
			status = true;
		} else {
			status = false;
		}
	} else {
		status = true;
	}
	/*
		console.log(`
			src: ${src}
			dst: ${dst}
			dst_stat: ${dst_stat ? true : false}
			src_mtime: ${src_stat.mtime}
			dst_mtime: ${dst_stat ? dst_stat.mtime : null}
		`);
	*/
	return status;
};

fse.copySync(SRC_DIR, BUILD_DIR, {
	preserveTimestamps: true,
	filter: buildFilter,
});

console.log('Build completed.');
return 0;