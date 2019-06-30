import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns an string of URL parameters.
 * 
 * @param {array} parameters Array of parameter objects
 * @return {string}
 */
export const returnUrlParameterString = parameters => {
	if ( parameters.length < 1 ) return '';
	return parameters.map( ( parameter, i ) => {
		return `${ encodeURIComponent( parameter.name ) }=${ encodeURIComponent( parameter.value ) }`;
	} ).join('&');
};

export const defaultHeight = 315;
export const defaultIvLoadPolicy = 1;
export const listTypeOptions = ['PLAYLIST', 'SEARCH', 'USER_UPLOADS'];
export const defaultWidth = 560;

const Youtube = ( {
	autoplay,
	cc_load_policy,
	color,
	controls,
	disablekb,
	enablejsapi,
	end,
	fs,
	height,
	hl,
	iv_load_policy,
	list,
	listType,
	loop,
	modestbranding,
	playlist,
	playsinline,
	start,
	videoId,
	width,
} ) => {
	let sourceUrl = `https://www.youtube.com/embed/${ videoId }`;
	const urlParams = [];

	if (autoplay) {
		urlParams.push({ name: 'autoplay', value: 1 });
	}
	if (cc_load_policy) {
		urlParams.push({ name: 'cc_load_policy', value: 1 });
	}
	if (color !== '') {
		urlParams.push({ name: 'color', value: color });
	}
	if (controls) {
		urlParams.push({ name: 'controls', value: 1 });
	}
	if (disablekb) {
		urlParams.push({ name: 'disablekb', value: 1 });
	}
	if (enablejsapi) {
		urlParams.push({ name: 'enablejsapi', value: 1 });
	}
	if (end > 0) {
		urlParams.push({ name: 'end', value: end });
	}
	if (fs) {
		urlParams.push({ name: 'fs', value: 1 });
	}
	if (hl !== '') {
		urlParams.push({ name: 'hl', value: hl });
	}
	if (iv_load_policy !== 1) {
		urlParams.push({ name: 'iv_load_policy', value: iv_load_policy });
	}
	if (list !== '') {
		urlParams.push({ name: 'list', value: list });
		urlParams.push({ name: 'listType', value: listType });
	}
	if (loop) {
		urlParams.push({ name: 'loop', value: 1 });
	}
	if (modestbranding) {
		urlParams.push({ name: 'modestbranding', value: 1 });
	}
	if (playlist !== '') {
		urlParams.push({ name: 'playlist', value: playlist });
	}
	if (playsinline) {
		urlParams.push({ name: 'playsinline', value: 1 });
	}
	if (start > 0) {
		urlParams.push({ name: 'start', value: start });
	}

	const urlParameters = returnUrlParameterString( urlParams );
	if ( urlParameters !== '' ) {
		sourceUrl = `${ sourceUrl }?${ urlParameters }`;
	}
	return (
		<iframe
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			frameBorder="0"
			height={ height }
			src={ sourceUrl }
			width={ width }
		></iframe>
	)
};

Youtube.propTypes = {
	autoplay: PropTypes.bool,
	cc_load_policy: PropTypes.bool,
	color: PropTypes.oneOf(['red', 'white']),
	controls: PropTypes.bool,
	disablekb: PropTypes.bool,
	enablejsapi: PropTypes.bool,
	end: PropTypes.number,
	fs: PropTypes.bool,
	height: PropTypes.number,
	hl: PropTypes.string,
	iv_load_policy: PropTypes.oneOf([1, 3]),
	list: PropTypes.string,
	listType: PropTypes.oneOf(listTypeOptions),
	loop: PropTypes.bool,
	modestbranding: PropTypes.bool,
	playlist: PropTypes.string,
	playsinline: PropTypes.bool,
	start: PropTypes.number,
	videoId: PropTypes.string.isRequired,
	width: PropTypes.number,
};

Youtube.defaultProps = {
	autoplay: false,
	cc_load_policy: false,
	color: 'red',
	controls: true,
	disablekb: false,
	enablejsapi: false,
	end: 0,
	fs: true,
	height: defaultHeight,
	hl: '',
	iv_load_policy: defaultIvLoadPolicy,
	list: '',
	listType: listTypeOptions[1],
	loop: false,
	modestbranding: false,
	playlist: '',
	playsinline: false,
	start: 0,
	width: defaultWidth,
};

export default React.memo(Youtube);
