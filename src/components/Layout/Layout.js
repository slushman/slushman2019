import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from './GlobalStyles';

import {
  layoutWrap,
  postMain,
  styledMain,
} from './layout-styles';

const Layout = ( { children, isPost, location, title } ) => (
  <div css={ layoutWrap }>
    <GlobalStyles />
    <Header
      location={ location }
      title={ title }
    />
    <main css={ isPost ? postMain: styledMain }>
      { children }
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  isPost: PropTypes.bool,
  location: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  isPost: false,
  location: {
    pathname: '',
  },
};

export default React.memo(Layout);
