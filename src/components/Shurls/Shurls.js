import React from 'react';
import PropTypes from 'prop-types';

import ShurlsList from './ShurlsList';
import { shurlWrap } from './shurls-styles';

import {
	shurlHeader,
	shurlList,
} from './shurls-styles';

const Shurls = ( { location, postNode, rounded } ) => {
	const currentExcerpt = escape( postNode.excerpt );
	const currentMedia = postNode.media ? postNode.media : null;
	const currentUrl = location.href;
	const currentTitle = escape( postNode.title );

	return (
		<section css={ shurlWrap }>
			<h2 css={ shurlHeader }>Share this post!</h2>
			<ul css={ shurlList }>
				<ShurlsList
					shareMedia={ currentMedia }
					shareText={ currentExcerpt }
					shareTitle={ currentTitle }
					shareUrl={ currentUrl }
					rounded={ rounded }
				/>
			</ul>
		</section>
	);
};

Shurls.propTypes = {
	location: PropTypes.shape({
		ancestorOrigins: PropTypes.object,
		assign: PropTypes.func,
		hash: PropTypes.string,
		host: PropTypes.string,
		href: PropTypes.string,
		key: PropTypes.string,
		origin: PropTypes.string,
		pathname: PropTypes.string,
		port: PropTypes.string,
		protocol: PropTypes.string,
		reload: PropTypes.func,
		replace: PropTypes.func,
		search: PropTypes.string,
		state: PropTypes.object,
		toString: PropTypes.func,
	}).isRequired,
	postNode: PropTypes.shape({
		code: PropTypes.shape({
			body: PropTypes.string,
		}),
		excerpt: PropTypes.string,
		frontmatter: PropTypes.object,
		id: PropTypes.string,
	}).isRequired,
	rounded: PropTypes.bool,
};

Shurls.defaultProps = {
	rounded: false,
}

export default React.memo(Shurls);
