import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import FlexList from '../FlexList';
import IconEmail from './Email';
import IconFacebook from './Facebook';
import IconLinkedIn from './Linkedin';
import IconPinterest from './Pinterest';
import IconStumbleupon from './Stumbleupon';
import IconTumblr from './Tumblr';
import IconTwitter from './Twitter';
import * as styles from './shurls-styles';

const Shurls = ( { postNode, rounded } ) => {
	const post = postNode.frontmatter;
	const currentUrl = window.location.href;
	const currentTitle = escape( post.title );
	const currentExcerpt = escape( post.excerpt );
	const currentMedia = post.media ? post.media : null;
	const linkStyles = rounded ? [ styles.round, styles.link ] : [ styles.link ];
	const shurlLinks = [
		{
			url: `mailto:?subject=${ currentTitle }&body=${ currentExcerpt }`,
			component: <IconEmail />,
		},
		{
			url: `https://www.facebook.com/sharer/sharer.php?u=${ currentUrl }`,
			component: <IconFacebook />,
		},
		{
			url: `https://www.linkedin.com/shareArticle?mini=true&url=${ currentUrl }&source=${ currentUrl }`,
			component: <IconLinkedIn />,
		},
		{
			url: `https://pinterest.com/pin/create/button/url=${ currentUrl }&description=${ currentExcerpt }&media=${ currentMedia}`,
			component: <IconPinterest />,
		},
		{
			url: `http://www.stumbleupon.com/submit?url=${ currentUrl }&title=${ currentTitle }`,
			component: <IconStumbleupon />,
		},
		{
			url: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${ currentUrl }&title=${ currentTitle }`,
			component: <IconTumblr />,
		},
		{
			url: `https://twitter.com/intent/tweet?url=${ currentUrl }`,
			component: <IconTwitter />,
		},
	];

	return (
		<section
			css={ css`
				margin-bottom: 1.5em;
			` }
		>
			<h2>Share this post!</h2>
			<FlexList spacing="space-around">
				{
					shurlLinks.map( ( link, i ) => (
						<li
							key={ i }
						>
							<a
								className="link-shurl"
								css={ linkStyles }
								href={ link.url }
								target="_blank"
							>
							{ link.component }
							</a>
						</li>
					) )
				}
			</FlexList>
		</section>
	);
};

Shurls.propTypes = {
	postNode: PropTypes.object.isRequired,
	rounded: PropTypes.boolean,
};

Shurls.defaultProps = {
	rounded: false,
}

export default Shurls;
