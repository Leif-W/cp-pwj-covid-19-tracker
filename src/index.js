'use strict';

////////////////  BEGIN - INIT  ////////////////
const spa = {
	splash: { elm: null, timeout: null },
	nav: { elm: null },
	menu: { elm: null, },
	maps: { elm: null, },
	charts: { elm: null, },
	countries: { elm: null, },
	news: { elm: null, },
	symptoms: { elm: null, },
	prevention: { elm: null, },
	about: { elm: null, },
};

let vh;

const setVh = () => {
	vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const init = () => {
	//console.log('init()->begin');
	spa.splash.elm = document.getElementById('splash');
	spa.nav.elm = document.getElementById('nav');
	spa.menu.elm = document.getElementById('menu');
	spa.maps.elm = document.getElementById('maps');
	spa.charts.elm = document.getElementById('charts');
	spa.countries.elm = document.getElementById('countries');
	spa.news.elm = document.getElementById('news');
	spa.symptoms.elm = document.getElementById('symptoms');
	spa.prevention.elm = document.getElementById('prevention');
	spa.about.elm = document.getElementById('about');

	setVh();
	showSplash();
	//console.log('init()->end');
};

window.addEventListener('resize', setVh);
window.addEventListener('load', init);
////////////////  END - INIT  ////////////////


////////////////  BEGIN - SPLASH  ////////////////
const hideSplash = () => {
	//console.log('hideSplash()->begin');
	clearTimeout(spa.splash.timeout);
	spa.splash.elm.classList.remove('show');
	spa.splash.elm.style.height = '0';
	showNav();
	showMaps();
	//console.log('hideSplash()->end');
};

const showSplash = () => {
	//console.log('showSplash()->begin');
	spa.splash.elm.style.height = `${vh * 100}px`;
	spa.splash.elm.classList.add('show');
	spa.splash.timeout = setTimeout(() => {
		hideSplash();
	}, 3000);
	//console.log('showSplash()->end');
};
////////////////  END - SPLASH  ////////////////


////////////////  BEGIN - NAV  ////////////////
const hideNav = () => {
	//console.log('hideNav()->begin');
	spa.nav.elm.classList.remove('show');
	spa.nav.elm.style.height = '0';
	//console.log('hideNav()->end');
};

const showNav = () => {
	//console.log('showNav()->begin');
	spa.nav.elm.style.height = '4vh';
	spa.nav.elm.classList.add('show');
	//console.log('showNav()->end');
};
////////////////  END - NAV  ////////////////


////////////////  BEGIN - MENU  ////////////////
const hideMenu = () => {
	//console.log('hideMenu()->begin');
	spa.menu.elm.classList.remove('show');
	spa.menu.elm.style.height = '0';
	//console.log('hideMenu()->end');
};

const showMenu = () => {
	//console.log('showMenu()->begin');
	hideSplash();
	hideMaps();
	hideCharts();
	hideCountries();
	hideNews();
	hideSymptoms();
	hidePrevention();
	hideAbout();
	spa.menu.elm.style.height = `${vh * 100}px`;
	spa.menu.elm.classList.add('show');
	//console.log('showMenu()->end');
};
////////////////  END - MENU  ////////////////

////////////////  BEGIN - MAPS  ////////////////
const hideMaps = () => {
	//console.log('hideMaps()->begin');
	spa.maps.elm.classList.remove('show');
	spa.maps.elm.style.height = '0';
	//console.log('hideMaps()->end');
};

const showMaps = () => {
	//console.log('showMaps()->begin');
	spa.maps.elm.style.height = `${vh * 100}px`;
	spa.maps.elm.classList.add('show');
	//console.log('showMaps()->end');
};
////////////////  END - MAPS  ////////////////


////////////////  BEGIN - CHARTS  ////////////////
const hideCharts = () => {
	//console.log('hideCharts()->begin');
	spa.charts.elm.classList.remove('show');
	spa.charts.elm.style.height = '0';
	//console.log('hideCharts()->end');
};

const showCharts = () => {
	//console.log('showCharts()->begin');
	spa.charts.elm.style.height = `${vh * 100}px`;
	spa.charts.elm.classList.add('show');
	//console.log('showCharts()->end');
};
////////////////  END - CHARTS  ////////////////


////////////////  BEGIN - COUNTRIES  ////////////////
const hideCountries = () => {
	//console.log('hideCountries()->begin');
	spa.countries.elm.classList.remove('show');
	spa.countries.elm.style.height = '0';
	//console.log('hideCountries()->end');
};

const showCountries = () => {
	//console.log('showCountries()->begin');
	spa.countries.elm.style.height = `${vh * 100}px`;
	spa.countries.elm.classList.add('show');
	//console.log('showCountries()->end');
};
////////////////  END - COUNTRIES  ////////////////


////////////////  BEGIN - NEWS  ////////////////
const newsPosts = [
	{
		'title': 'News Article 1',
		'image': 'Image URL 1',
		'link': 'Link URL 1',
	},
	{
		'title': 'News Article 2',
		'image': 'Image URL 2',
		'link': 'Link URL 2',
	},
	{
		'title': 'News Article 3',
		'image': 'Image URL 3',
		'link': 'Link URL 3',
	},
];

const getNews = async () => {
	//console.log('getNews()->begin');
	//const res = await fetch('https://.../posts')
	//const posts = await res.json()

	//console.log('getNews()->end');
	return {
		props: {
			posts,
		},
	};
};

const makeNews = ({ posts }) => {
	//console.log('makeNews()->begin');
	/*
		posts.map((post, index) => (
			<li key={index}>{post.title}</li>
		)
	*/
	//console.log('makeNews()->end');
};

const hideNews = () => {
	//console.log('hideNews()->begin');
	spa.news.elm.classList.remove('show');
	spa.news.elm.style.height = '0';
	//console.log('hideNews()->end');
};

const showNews = () => {
	//console.log('showNews()->begin');
	spa.news.elm.style.height = `${vh * 100}px`;
	spa.news.elm.classList.add('show');
	//console.log('showNews()->end');
};
////////////////  END - NEWS  ////////////////


////////////////  BEGIN - SYMPTOMS  ////////////////
const hideSymptoms = () => {
	//console.log('hideSymptoms()->begin');
	spa.symptoms.elm.classList.remove('show');
	spa.symptoms.elm.style.height = '0';
	//console.log('hideSymptoms()->end');
};

const showSymptoms = () => {
	//console.log('showSymptoms()->begin');
	spa.symptoms.elm.style.height = `${vh * 100}px`;
	spa.symptoms.elm.classList.add('show');
	//console.log('showSymptoms()->end');
};
////////////////  END - SYMPTOMS  ////////////////


////////////////  BEGIN - PREVENTION  ////////////////
const hidePrevention = () => {
	//console.log('hidePrevention()->begin');
	spa.prevention.elm.classList.remove('show');
	spa.prevention.elm.style.height = '0';
	//console.log('hidePrevention()->end');
};

const showPrevention = () => {
	//console.log('showPrevention()->begin');
	spa.prevention.elm.style.height = `${vh * 100}px`;
	spa.prevention.elm.classList.add('show');
	//console.log('showPrevention()->end');
};
////////////////  END - PREVENTION  ////////////////


////////////////  BEGIN - ABOUT  ////////////////
const hideAbout = () => {
	//console.log('hideAbout()->begin');
	spa.about.elm.classList.remove('show');
	spa.about.elm.style.height = '0';
	//console.log('hideAbout()->end');
};

const showAbout = () => {
	//console.log('showAbout()->begin');
	spa.about.elm.style.height = `${vh * 100}px`;
	spa.about.elm.classList.add('show');
	//console.log('showAbout()->end');
};
////////////////  END - ABOUT  ////////////////