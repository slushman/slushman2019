import React from 'react';
import { Global, css } from '@emotion/core';

import { Normalize } from './normalize';

export const contentWidth = css`
  --pad: 1em;

  padding-left: var( --pad );
  padding-right: var( --pad );
 
  @media screen and (min-width: 50rem) {
    --pad: calc(100vw/2 - 50rem/2);
  }
`;

export const blueSection = css`
	${ contentWidth }

	background-color: var( --bgColor );

	.light & {
    --bgColor: #90C8E8;
    --linkColor: #023451;
	}

	.dark & {
    --bgColor: #03649C;
    --linkColor: #fff;
  }
  
  a {
    color: var( --linkColor );
  }
`;

const GlobalStyles = () => (
  <Global styles={ css`
    ${ Normalize }
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background-color: var( --bgColor );
      color: var( --textColor );
      display: grid;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      grid-template-columns: auto;
	    grid-template-areas: "header" "content" "footer";
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
      margin: 0 0 1.5em;
      padding-bottom: 0;
      padding-top: 0;
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
    div {
      max-width: 100vw;
    }
    p {
      margin: 0 0 1.5em;
    }
    .link-shurl path {
      fill: var( --fillColor );

      .light & {
        --fillColor: #023451;
      }

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
    .gallery {
      margin: 0;
    }
    .gallery-grid {
      display: grid;
      grid-gap: 20px;
    }
    .gallery-modal-overlay {
      .dark & {
        background-color: rgba( 255, 255, 255, 0.8 );
      }
      .light & {
        background-color: rgba( 2, 52, 81, 0.8 );
      }
    }
  ` } />
);

export default GlobalStyles;
