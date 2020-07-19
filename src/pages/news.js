'use strict';

import NavBar from './navbar';

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


export const getStaticProps = async () => {
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

export default News;
