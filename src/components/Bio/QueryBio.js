import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import Bio from './Bio';

const QueryBio = ( { isHeader } ) => {
  const { avatar } = useStaticQuery( bioQuery );
  const { author } = useSiteMetadata();

  return (
    <Bio
      author={ author }
      avatar={ avatar }
      isHeader={ isHeader }
    />
  )
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/cjw-caricature.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

QueryBio.propTypes = {
  isHeader: PropTypes.bool,
};

QueryBio.defaultProps = {
  isHeader: false,
};

export default QueryBio;
