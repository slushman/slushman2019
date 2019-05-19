import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import {
  avatarStyle,
  bioDescription,
  bioWrap,
} from './bio-styles';

const Bio = ( { author, avatar } ) => {

  return(
    <div css={ bioWrap }>
      <Image
        alt={ author }
        css={ avatarStyle }
        fixed={ avatar.childImageSharp.fixed }
      />
      <p css={ bioDescription }>
        Slushman is <strong>{ author }</strong>, a software engineer at Church Community Builder in Colorado Springs, CO specializing in React, React Native, and PHP.
      </p>
    </div>
  )
};

Bio.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
};

export default Bio;
