import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import Bio from './Bio';

const QueryBio = () => {
  const { avatar } = useStaticQuery( bioQuery );
  const { author } = useSiteMetadata();

  return (
    <Bio author={ author } avatar={ avatar } />
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

export default QueryBio;
