'use strict';

console.log('Build started.');

//
//  BUILD
//
//  INIT - set variables
//  COPY FILES - declare file copying functions
//  FETCH DATA - declare fetch data functions
//  BUILD - call fetch data then copy file functions
//  

////////////////  BEGIN - INIT  ////////////////
const fse = require('fs-extra');

let STATIC_SRC_DIR = 'src',
    DATA_SRC_DIR = 'data',
    BUILD_DIR = 'build',
    COVID19_API_URL = 'https://disease.sh/v3/covid-19/countries?yesterday=true&allowNull=true', // -H accept: application/json;
	NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=${ country }&pageSize=5&apiKey=${ process.env.NEWS_API_KEY }`;
////////////////  END - INIT  ////////////////


////////////////  BEGIN - COPY STATIC FILES  ////////////////
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
////////////////  END - COPY STATIC FILES  ////////////////


////////////////  BEGIN - FETCH DATA  ////////////////
const fetchData = (api_url, json_file) => {
	let json_stat,
		status,
		date_now = new Date();

	console.log(date_now);
	date_now.setMinutes(date_now.getMinutes() - 10);
	console.log(date_now);
 

	try {
		json_stat = fse.statSync(json_file);
	} catch (err) {
		json_stat = undefined;
	}

	if (json_stat && json_stat.isFile) {


		if ((Now - json_stat.mtime) > 10 minutes) {
			status = true;
		} else {
			status = false;
		}
	} else {
		status = true;
	}

	fetch(url)
		.then(res => res.json())
		.then(json => {
        fse.writeJsonSync('build/poop.json', { toilet: 'flush' });
        //fs.writeJsonSync('build/test.json', json)
    })
		.then(() => {
			console.log(json);
		})
		.catch(err => console.error(err));
};

// API - COVID-19 - NEWS
// COVID19_API_URL
//NEWS_API_URL

const getNews = async country => {
    const news_url = `https://newsapi.org/v2/top-headlines?country=${ country }&pageSize=5&apiKey=${ process.env.NEWS_API_KEY }`;

    try {
        const response = await axios.get( news_url );
        return {
	    'country': country,
            'articles': response.data.articles,
	}
    } catch ( error ) {
	console.error( error );
    }
};

////////////////  END - FETCH DATA  ////////////////


console.log('Build completed.');
return 0;