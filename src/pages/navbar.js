'use strict';

import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<Link href="/"><a>Index</a></Link> | <Link href="/news"><a>News</a></Link> | <Link href="/about"><a>About</a></Link>
		</nav>
	);
};

export default NavBar;
