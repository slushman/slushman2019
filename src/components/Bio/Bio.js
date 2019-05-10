import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import useSiteMetadata from '../../hooks/UseSiteMetadata';

const Bio = ( { avatar, isHome } ) => {
  const { author, userLinks } = useSiteMetadata();
  const wrapMargBottom = isHome ? '0' : '1.5em';

  return(
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
        { ` ` }
        <a href={ userLinks.github.url }>
          You should follow him on GitHub.
        </a>
      </p>
    </div>
  )
};

Bio.propTypes = {
  avatar: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
  social: PropTypes.object.isRequired,
};

Bio.defaultProps = {
  isHome: false,
};

export default Bio;
