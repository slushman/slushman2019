import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Header from '../Header';
import { contentWidth } from './layout-styles';
import GlobalStyles from './GlobalStyles';

const Layout = ( { children, location, title } ) => {
  return (
    <div
      css={ css`
        ${ contentWidth }
        background-color: var( --bgColor );
        color: var( --textColor );
      ` }
    >
      <GlobalStyles />
      <Header
        location={ location }
        title={ title }
      />
      <main>
      { children }
      </main>
      <footer>
        © { new Date().getFullYear() } Slushman
      </footer>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
