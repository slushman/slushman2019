import React from 'react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FlexList from '../FlexList';
import Bio from '../Bio';
import Layout from '../Layout';
import SEO from '../SEO';
import Shurls from '../Shurls';
import Gallery from '../Gallery';
import Codepen from '../Codepen';

const mdxComponents = {
  Codepen,
  Gallery,
};

const BlogPost = ( { location, next, post, previous, scope, siteTitle } ) => (
  <Layout location={ location } title={ siteTitle }>
    <SEO title={ post.frontmatter.title } description={ post.excerpt } />
    <h1>{ post.frontmatter.title }</h1>
    <p
      data-test="postDate"
      css={ css`
        display: block;
        margin-bottom: 1.5em;
        margin-top: 1em;
      ` }
    >
      { post.frontmatter.date }
    </p>
    <MDXRenderer
      data-test="postContent"
      scope={ { ...mdxComponents, ...scope } }
    >
      { post.code.body }
    </MDXRenderer>
    <Shurls postNode={ post } />
    <hr
      css={ css`
        margin-bottom: 1.5em;
      ` }
    />
    <Bio />

    <FlexList spacing="space-between">
      <li>
        { previous && (
          <Link data-test="previousLink" to={ previous.fields.slug } rel="prev">
            ← { previous.frontmatter.title }
          </Link>
        ) }
      </li>
      <li>
        { next && (
          <Link data-test="nextLink" to={ next.fields.slug } rel="next">
            { next.frontmatter.title } →
          </Link>
        ) }
      </li>
    </FlexList>
  </Layout>
);

BlogPost.propTypes = {
  location: PropTypes.object.isRequired,
  next: PropTypes.object,
  post: PropTypes.object.isRequired,
  previous: PropTypes.object,
  scope: PropTypes.object,
  siteTitle: PropTypes.string.isRequired,
};

BlogPost.defaultProps = {
  next: {},
  previous: {},
  scope: {},
};

export default BlogPost;
