import React from 'react';

import {
	linkStyle,
	menuItem,
	menuList,
	navStyle,
} from './social-menu-styles';
import Facebook from '../SVGs/Facebook';
import Github from '../SVGs/Github';
import LinkedIn from '../SVGs/Linkedin';
import RSS from '../SVGs/RSS';
import Twitter from '../SVGs/Twitter';

const SocialMenu = () => (
	<nav css={ navStyle }>
		<ul css={ menuList }>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://github.com/slushman">
					<Github />
					<p>GitHub</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://twitter.com/slushman">
					<Twitter />
					<p>Twitter</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.facebook.com/slushmandesign">
					<Facebook />
					<p>Facebook</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.linkedin.com/in/chriswilcoxson/">
					<LinkedIn />
					<p>LinkedIn</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.slushman.com/rss.xml">
					<RSS />
					<p>RSS</p>
				</a>
			</li>
		</ul>
	</nav>
);

export default SocialMenu;
