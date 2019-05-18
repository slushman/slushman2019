import React from 'react';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import Footer from './Footer';

const QueryFooter = () => {
	const { title } = useSiteMetadata();

  return (
    <Footer title={ title } />
  )
};

export default QueryFooter;
