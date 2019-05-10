import React from 'react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FlexList from '../FlexList';
import Bio from '../Bio';
import Layout from '../Layout';
import SEO from '../SEO';

const BlogPost = ( { location, next, post, previous, siteTitle } ) => (
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
    <MDXRenderer data-test="postContent">{ post.code.body }</MDXRenderer>
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
  next: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  previous: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default BlogPost;
