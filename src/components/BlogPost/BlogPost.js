import React from 'react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';

import FlexList from '../FlexList';
import Bio from '../Bio';
import Layout from '../Layout';
import SEO from '../SEO';
import Shurls from '../Shurls';
import Gallery from '../Gallery';
import Codepen from '../Codepen';
import Youtube from '../Youtube';

import {
  postDate,
  postDivider,
} from './blogpost-styles';

const mdxComponents = {
  Codepen,
  Gallery,
  Youtube,
};

const BlogPost = ( { location, next, post, previous, scope, siteTitle } ) => (
  <Layout location={ location } title={ siteTitle }>
    <SEO description={ post.excerpt } title={ post.frontmatter.title } />
    <h1>{ post.frontmatter.title }</h1>
    <p
      css={ postDate }
      data-test="postDate"
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
    <hr css={ postDivider } />
    <Bio />

    <FlexList spacing="space-between">
      <li>
        { previous && (
          <Link
            data-test="previousLink"
            rel="prev"
            to={ previous.fields.slug }
          >
            ← { previous.frontmatter.title }
          </Link>
        ) }
      </li>
      <li>
        { next && (
          <Link
            data-test="nextLink"
            rel="next"
            to={ next.fields.slug }
          >
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
