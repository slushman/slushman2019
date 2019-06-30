import React from 'react';

import IconEmail from '../SVGs/Email';
import IconFacebook from '../SVGs/Facebook';
import IconLinkedIn from '../SVGs/Linkedin';
import IconPinterest from '../SVGs/Pinterest';
import IconStumbleupon from '../SVGs/Stumbleupon';
import IconTumblr from '../SVGs/Tumblr';
import IconTwitter from '../SVGs/Twitter';
import {
	link,
	round,
	shurlsListItem,
} from './shurls-styles';

const ShurlsList = ( { shareMedia, shareText, shareTitle, shareUrl, rounded } ) => {
	const linkStyles = rounded ? [ round, link ] : [ link ];
	const shurlLinks = [
		{
			component: <IconEmail />,
			dataTest: 'email',
			url: `mailto:?subject=${ shareTitle }&body=${ shareText }`,
		},
		{
			component: <IconFacebook />,
			dataTest: 'facebook',
			url: `https://www.facebook.com/sharer/sharer.php?u=${ shareUrl }`,
		},
		{
			component: <IconLinkedIn />,
			dataTest: 'linkedin',
			url: `https://www.linkedin.com/shareArticle?mini=true&url=${ shareUrl }&source=${ shareUrl }`,
		},
		{
			component: <IconPinterest />,
			dataTest: 'pinterest',
			url: `https://pinterest.com/pin/create/button/url=${ shareUrl }&description=${ shareText }&media=${ shareMedia }`,
		},
		{
			component: <IconStumbleupon />,
			dataTest: 'stumbleupon',
			url: `http://www.stumbleupon.com/submit?url=${ shareUrl }&title=${ shareTitle }`,
		},
		{
			component: <IconTumblr />,
			dataTest: 'tumblr',
			url: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${ shareUrl }&title=${ shareTitle }`,
		},
		{
			component: <IconTwitter />,
			dataTest: 'twitter',
			url: `https://twitter.com/intent/tweet?url=${ shareUrl }`,
		},
	];

	return (
		shurlLinks.map( ( link, i ) => (
			<li css={ shurlsListItem } key={ i }>
				<a
					className="link-shurl"
					css={ linkStyles }
					data-test={ link.dataTest }
					href={ link.url }
					rel="noopener noreferrer"
					target="_blank"
				>
					{ link.component }
				</a>
			</li>
		) )
	);
}

export default React.memo(ShurlsList);
