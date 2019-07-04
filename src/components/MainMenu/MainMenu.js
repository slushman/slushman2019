import React from 'react';
import { Link } from 'gatsby';

import {
	active,
	menuLink,
	menuList,
	menuWrap,
} from './main-menu-styles';

const MainMenu = () => {
	const isActive = false;
	const linkStyles = isActive ? [ active, menuLink ] : [ menuLink ];
	return (
		<nav css={ menuWrap }>
			<ul css={ menuList }>
				<li>
					<Link activeStyle={ active } css={ linkStyles } to="/now">Now</Link>
				</li>
				<li>
					<Link activeStyle={ active } css={ linkStyles } to="/blog">Blog</Link>
				</li>
			</ul>
		</nav>
	)
}

export default React.memo(MainMenu);
