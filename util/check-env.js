'use strict';

import { existsSync, writeFileSync } from 'fs';
const path = '.env';
const news_api_regexp = /^[a-f0-9]{32}$/;
let error_flag = false;
let error_msg = '';

if (existsSync(path)) {
	console.log(`Found ${path}`);
	return 0;
} else if (process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY == undefined) {
	console.error('Error: No .env file and no GOOGLE_MAPS_JAVASCRIPT_API_KEY variable in process.env');
	return 1;
} else if (process.env.NEWS_API_KEY == undefined) {
	console.error('Error: No .env file and no NEWS_API_KEY variable in process.env');
	return 1;
} else if (process.env.NEWS_API_KEY.length < 32) {
	console.error(`Error: Invalid NEWS_API_KEY, too short.`);
	return 1;
} else if (!news_api_regexp.test(process.env.NEWS_API_KEY)) {
	console.error(`Error: NEWS_API_KEY contains invalid characters.`);
	return 1;
} else {
	writeFileSync(path,
		`NEWS_API_KEY=${process.env.NEWS_API_KEY}\n` +
		`GOOGLE_MAPS_JAVASCRIPT_API_KEY=${process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY}\n`
	);
	console.log(`Created file ${path}`);
	return 0;
}