import React from 'react';

import IconEmail from './Email';
import IconFacebook from './Facebook';
import IconLinkedIn from './Linkedin';
import IconPinterest from './Pinterest';
import IconStumbleupon from './Stumbleupon';
import IconTumblr from './Tumblr';
import IconTwitter from './Twitter';
import {
	link,
	round,
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
			<li key={ i }>
				<a
					className="link-shurl"
					css={ linkStyles }
					data-test={ link.dataTest }
					href={ link.url }
					target="_blank"
				>
					{ link.component }
				</a>
			</li>
		) )
	);
}

export default ShurlsList;
