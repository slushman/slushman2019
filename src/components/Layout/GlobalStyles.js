import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global styles={ css`
    /* latin */
    @font-face {
      font-family: 'Source Code Pro';
      font-style: normal;
      font-weight: 400;
      src: local( 'Source Code Pro' ), local( 'SourceCodePro-Regular' ), url(https://fonts.gstatic.com/s/sourcecodepro/v7/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevWnsUnxg.woff2) format( 'woff2' );
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin */
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: local( 'Source Sans Pro Regular' ), local( 'SourceSansPro-Regular' ), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format( 'woff2' );
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin */
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      src: local( 'Source Sans Pro Bold' ), local( 'SourceSansPro-Bold' ), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2) format( 'woff2' );
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin */
    @font-face {
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: 700;
      src: local( 'Merriweather Bold' ), local( 'Merriweather-Bold' ), url(https://fonts.gstatic.com/s/merriweather/v5/neIXzD-0qpwxpaWvjeD0X88SAOeasc8btSyqxKcsdrM.woff2) format( 'woff2' );
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    body {
      background-color: var( --bgColor );
      color: var( --textColor );
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      line-height: 1.5;
      margin: 0;

      &.light {
        --bgColor: #eef8ff;
        --linkColor: #0374b5;
        --textColor: #023451;
      }

      &.dark{
        --bgColor: #023451;
        --linkColor: #41b7fb;
        --logoFilter: grayscale( 100 ) brightness( 100 );
        --textColor: #eef8ff;
      }
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Merriweather', serif;
    }
    pre {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
    pre:before {
      background-color: var( --textColor );
      bottom: 0px;
      content: "";
      left: 50%;
      margin-right: -50vw;
      margin-left: -50vw;
      position: absolute;
      right: 50%;
      top: 0px;
      width: 100vw;
      z-index: -1;
    }
    pre code {
      color: var(--bgColor);
      display: block;
      font-family: 'Source Code Pro', monospace;
      font-size: 1rem;
      overflow: scroll;
      padding: 1em 0;
    }
    a {
      color: var( --linkColor );
      transition: all 0.25s ease;
    }
    .link-shurl path {
      fill: var( --fillColor );

      .dark & {
        --fillColor: #eef8ff;
      }
    }
    [data-icon="email"] {
      --fillColor: #000;
    }
    [data-icon="facebook"] {
      --fillColor: #3b5998;
    }
    [data-icon="linkedin"] {
      --fillColor: #0077b5;
    }
    [data-icon="pinterest"] {
      --fillColor: #bd081c;
    }
    [data-icon="stumbleupon"] {
      --fillColor: #eb4924;
    }
    [data-icon="tumblr"] {
      --fillColor: #35465c;
    }
    [data-icon="twitter"] {
      --fillColor: #1da1f2;
    }
  ` } />
);

export default GlobalStyles;
