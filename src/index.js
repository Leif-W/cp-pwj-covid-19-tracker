'use strict';

const NavBar = () => {
	return (
		<nav>
			<Link href="/"><a>Index</a></Link> | <Link href="/news"><a>News</a></Link> | <Link href="/about"><a>About</a></Link>
		</nav>
	);
};

const Index = () => {
	return (
		<div>
			<NavBar />
			<div>
				Welcome!
			</div>
		</div>
	);
};

const News = ({ posts }) => {
	return (
		<div>
			<NavBar />
			<ul>
				{posts.map((post, index) => (
					<li key={index}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

const getStaticProps = async () => {
	//const res = await fetch('https://.../posts')
	//const posts = await res.json()

	const posts = [
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

	return {
		props: {
			posts,
		},
	};
};

const About = () => {
	return (
		<div>
			<NavBar />
			<div>About</div>
		</div>
	);
};
