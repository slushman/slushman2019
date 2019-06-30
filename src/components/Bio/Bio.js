import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import {
  avatarStyle,
  bioDescription,
  bioWrap,
  headerWrap,
} from './bio-styles';

const Bio = ( { author, avatar, isHeader } ) => (
  <section css={ isHeader ? headerWrap : bioWrap }>
    <Image
      alt={ author }
      css={ avatarStyle }
      fixed={ avatar.childImageSharp.fixed }
    />
    <p css={ bioDescription }>
      Slushman is <strong>{ author }</strong>, a software engineer at Church Community Builder in Colorado Springs, CO specializing in React, React Native, and PHP.
    </p>
  </section>
);

Bio.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  isHeader: PropTypes.bool,
};

Bio.defaultProps = {
  isHeader: false,
};

export default React.memo(Bio);
