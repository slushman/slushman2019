import React from 'react';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import Footer from './Footer';

const QueryFooter = () => {
	const { siteTitle } = useSiteMetadata();

  return (
    <Footer title={ siteTitle } />
  )
};

export default QueryFooter;
