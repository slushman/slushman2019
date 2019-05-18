import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Codepen = ( {
	caption,
	height,
	id,
	tab,
	theme,
	user,
	width,
} ) => {
  const src  = `//codepen.io/${ user }/embed/${ id }/?height=${ height }&theme-id=${ theme }&default-tab=${ tab }`;
  const userUrl = `https://codepen.io/${ user }`;
  const pen  = `${ userUrl }/pen/${ id }/`;

  return (
		<figure
			css={ css`
				height: ${ height };
				margin: 0;
			` }
		>
			<div
				css={ css`
					height: 0;
					padding-bottom: 56.25%;
					position: relative;
					width: 100%;
				` }
			>
				<iframe
					allowFullScreen={true} 
					allowtransparency={true}
					css={ css`
						height: ${ height };
						left: 0;
						position: absolute;
						top: 0;
						width: ${ width };
					` }
					frameBorder="no" 
					height={ height } 
					scrolling="no" 
					src={ src }
					width={ width } 
				>
					<a href={ pen }>See this pen</a> by { user } (<a href={ userUrl }>@{ user }</a>) on <a href='http://codepen.io'>CodePen</a>.
				</iframe>
			</div>
			{ caption && <figcaption>{ caption }</figcaption> }
		</figure>
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
  user: PropTypes.string,
  width:  PropTypes.string,
};

Codepen.defaultProps = {
	caption: '',
  height: '268px',
  tab: 'result',
	theme: '0',
	user: 'slushman',
  width: '100%',
};

export default Codepen;
