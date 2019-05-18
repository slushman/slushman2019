import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Bio = ( { author, avatar, isHome } ) => {
  const wrapMargBottom = isHome ? '0' : '1.5em';

  return(
    <div>
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
          Slushman is <strong>{ author }</strong>, a software engineer at Church Community Builder in Colorado Springs, CO specializing in React, React Native, and PHP.
        </p>
      </div>
    </div>
  )
};

Bio.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  isHome: PropTypes.bool,
};

Bio.defaultProps = {
  isHome: false,
};

export default Bio;
