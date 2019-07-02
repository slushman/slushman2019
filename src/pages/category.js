import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/UseSiteMetadata';
import CategoryPage from '../components/CategoryPage';

const QueryCategory = ( { data: { allMdx: { group } } } ) => {
  const { siteTitle } = useSiteMetadata();
  
	return (
		<CategoryPage
      categories={ group }
			title={ siteTitle }
		/>
	)
};

QueryCategory.propTypes = {
  data: PropTypes.shape( {
    allMdx: PropTypes.shape( {
      group: PropTypes.arrayOf(
        PropTypes.shape( {
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        } ).isRequired
      ),
    } ),
  } ),
};

export default QueryCategory;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
