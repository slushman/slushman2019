import React from 'react';
import PropTypes from 'prop-types';

import ShurlsList from './ShurlsList';
import NativeShare from './NativeShare';
import { shurlWrap } from './shurls-styles';

import {
	shurlHeader,
	shurlList,
} from './shurls-styles';

const Shurls = ( { postNode, rounded } ) => {
	const post = postNode.frontmatter;
	const currentExcerpt = escape( post.excerpt );
	const currentMedia = post.media ? post.media : null;
	const currentUrl = window.location.href;
	const currentTitle = escape( post.title );
	let output;

	if (navigator.share) {
		output = (
			<NativeShare
				shareText={ currentExcerpt }
				shareTitle={ currentTitle }
				shareUrl={ currentUrl }
			/>
		);
	} else {
		output = (
			<ShurlsList
				shareMedia={ currentMedia }
				shareText={ currentExcerpt }
				shareTitle={ currentTitle }
				shareUrl={ currentUrl }
				rounded={ rounded }
			/>
		);
	}

	return (
		<section css={ shurlWrap }>
			<h2 css={ shurlHeader }>Share this post!</h2>
			<ul css={ shurlList }>
				{output}
			</ul>
		</section>
	);
};

Shurls.propTypes = {
	postNode: PropTypes.object.isRequired,
	rounded: PropTypes.bool,
};

Shurls.defaultProps = {
	rounded: false,
}

export default Shurls;
