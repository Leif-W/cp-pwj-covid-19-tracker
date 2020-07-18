'use strict';

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			compress: false,
		}
	}

	return {
		/* config options for all phases except development here */
	}
};
