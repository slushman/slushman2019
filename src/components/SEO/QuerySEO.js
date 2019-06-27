import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import SEO from './SEO';

const QuerySEO = ( { description, keywords, lang, meta, title } ) => {
  const data = useStaticQuery( seoQuery );
	const { author, siteDescription, siteTitle } = useSiteMetadata();
  const useDescription = description || siteDescription;

  return (
		<SEO
			author={ author }
			avatar={ data.avatar }
			description={ useDescription }
			keywords={ keywords }
			lang={ lang }
			meta={ meta }
			siteTitle={ siteTitle }
			title={ title }
		/>
  )
};

const seoQuery = graphql`
  query seoQuery {
    avatar: file(absolutePath: { regex: "/cjw-caricature.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  keywords: [],
  lang: `en`,
  meta: [],
};

export default QuerySEO;
