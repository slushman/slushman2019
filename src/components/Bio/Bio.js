import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Bio = ( { author, avatar, social } ) => (
  <div
    css={ css`
      display: flex;
      margin-bottom: ${ wrapMargBottom };
    ` }
  >
    <Image
      alt={ author }
      css={ css`
        margin-right: 0.5em;
        margin-bottom: 0;
        min-width: 50px;
        border-radius: 100%;
      ` }
      fixed={ avatar.childImageSharp.fixed }
    />
    <p
      css={ css`
        margin-bottom: 0;
        margin-top: 0;
      ` }
    >
      Written by <strong>{ author }</strong> who lives and works in
      Minneapolis building silly things.
      { ` ` }
      <a href={ `https://twitter.com/${ social.twitter }` }>
        You should follow him on Twitter
      </a>
    </p>
  </div>
);

Bio.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default Bio;
