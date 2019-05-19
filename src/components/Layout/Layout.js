import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from './GlobalStyles';

import {
  contentWidth,
  layoutWrap,
  styledMain,
} from './layout-styles';

const Layout = ( { children, location, title } ) => {
  return (
    <div css={ layoutWrap }>
      <GlobalStyles />
      <Header
        location={ location }
        title={ title }
      />
      <main css={ styledMain }>
        { children }
      </main>
      <Footer />
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
