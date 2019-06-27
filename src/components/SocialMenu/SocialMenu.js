import React from 'react';

import Facebook from '../SVGs/Facebook';
import Github from '../SVGs/Github';
import LinkedIn from '../SVGs/Linkedin';
import RSS from '../SVGs/RSS';

import {
	linkLabel,
	linkStyle,
	menuItem,
	menuList,
} from './socialmenu-styles';

const sizeProps = {
	height: 36,
	width: 36,
};

const SocialMenu = () => (
	<nav>
		<ul css={ menuList }>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://github.com/slushman">
					<Github {...sizeProps} />
					<p css={ linkLabel }>GitHub</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.linkedin.com/in/chriswilcoxson/">
					<LinkedIn {...sizeProps} />
					<p css={ linkLabel }>LinkedIn</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.slushman.com/rss.xml">
					<RSS {...sizeProps} />
					<p css={ linkLabel }>RSS</p>
				</a>
			</li>
		</ul>
	</nav>
);

export default SocialMenu;
