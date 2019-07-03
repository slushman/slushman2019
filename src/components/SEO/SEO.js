import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ( { author, description, keywords, lang, meta, siteTitle, title } ) => (
  <Helmet
    htmlAttributes={ { lang } }
    title={ title }
    titleTemplate={ `%s | ${ siteTitle }` }
    meta={ [
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join( `, ` ),
            }
          : []
      )
      .concat( meta ) }
  />
);

SEO.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  siteTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  keywords: [],
  lang: `en`,
  meta: [],
};

export default SEO;
