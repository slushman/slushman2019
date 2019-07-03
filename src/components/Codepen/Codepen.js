import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import {
	frameWrap,
	StyledFigure,
	StyledIframe
} from './codepen-styles';

export const defaultHeight = '268px';
export const defaultWidth = '100%';

const Codepen = ( {
	caption,
	height,
	id,
	tab,
	theme,
	title,
	user,
	width,
} ) => {
  const src  = `//codepen.io/${ user }/embed/${ id }/?height=${ height }&theme-id=${ theme }&default-tab=${ tab }`;
  const userUrl = `https://codepen.io/${ user }`;
  const pen  = `${ userUrl }/pen/${ id }/`;

  return (
		<StyledFigure height={ height }>
			<div css={ frameWrap }>
				<StyledIframe
					allowFullScreen={true} 
					allowtransparency={true}
					frameBorder="no" 
					height={ height } 
					scrolling="no" 
					src={ src }
					title={ title }
					width={ width } 
				>
					<a href={ pen }>See this pen</a> by { user } (<a href={ userUrl }>@{ user }</a>) on <a href='http://codepen.io'>CodePen</a>.
				</StyledIframe>
			</div>
			{ caption && <figcaption>{ caption }</figcaption> }
		</StyledFigure>
  )
};

const isValidTab = ( props, propName, componentName ) => {
  // Valid tab props: `result`; `html`; `result,js`; `css,html`
  // Invalid: `result,result`; `js,js`; `html`; `foo`
  const TAB_REGEX = /^(result|js|css|html)(,(?!\1)(result|js|css|html)|)?$/gm;

  if ( ! TAB_REGEX.test( props[ propName ] ) ) {
    return new Error(
      `Invalid prop \`${ propName }\` supplied to \`${ componentName }\`. Validation failed.`
    );
  }
};

Codepen.propTypes = {
	caption: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  tab: isValidTab,
	theme: PropTypes.string,
	title: PropTypes.string.isRequired,
  user: PropTypes.string,
  width:  PropTypes.string,
};

Codepen.defaultProps = {
	caption: '',
  height: defaultHeight,
  tab: 'result',
	theme: '0',
	user: 'slushman',
  width: defaultWidth,
};

export default Codepen;
