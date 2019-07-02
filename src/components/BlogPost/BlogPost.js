import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';

import FlexList from '../FlexList';
import Layout from '../Layout';
import SEO from '../SEO';
import Shurls from '../Shurls';
import Gallery from '../Gallery';
import Codepen from '../Codepen';
import Youtube from '../Youtube';
import CategoryMeta from '../CategoryMeta';
import ImageCredit from '../ImageCredit';

import {
  alignRight,
  half,
  imageWrap,
  postDate,
  postImage,
  postLinks,
  postMeta,
  postTitle,
  postWrap,
} from './blogpost-styles';

const mdxComponents = {
  Codepen,
  Gallery,
  Youtube,
};

const BlogPost = ( { location, next, post, previous, scope, siteTitle } ) => (
  <Layout isPost={ true } location={ location } title={ siteTitle }>
    <SEO description={ post.excerpt } title={ post.frontmatter.title } />
    <div css={ postWrap }>
      <section css={ imageWrap }>
        <Image css={ postImage } sizes={ post.frontmatter.featuredImage.childImageSharp.sizes } />
        <ImageCredit
          account={ post.frontmatter.featuredImageAccount }
          photographer={ post.frontmatter.featuredImagePhotographer }
        />
        <h1 css={ postTitle }>{ post.frontmatter.title }</h1>
      </section>
      <section css={ postMeta }>
        <p
          css={ postDate }
          data-test="postDate"
        >
          Published { post.frontmatter.date }
        </p>
        <CategoryMeta categories={ post.frontmatter.category } />
      </section>
      <MDXRenderer
        className="postContent"
        data-test="postContent"
        scope={ { ...mdxComponents, ...scope } }
      >
        { post.code.body }
      </MDXRenderer>
      <Shurls location={ location } postNode={ post } />
      <section css={ postLinks }>
        <h2>Read more posts!</h2>
        <FlexList spacing="space-between">
          <li css={ half }>
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
          <li css={ [alignRight, half] }>
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
      </section>
    </div>
  </Layout>
);

BlogPost.propTypes = {
  location: PropTypes.object.isRequired,
  next: PropTypes.object,
  post: PropTypes.shape( {
    node: PropTypes.shape( {
      frontmatter: PropTypes.shape( {
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.object.isRequired,
        featuredImageAccount: PropTypes.string.isRequired,
        featuredImagePhotographer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      } ),
      fields: PropTypes.shape( {
        slug: PropTypes.string.isRequired,
      } ),
    } ),
  } ).isRequired,
  previous: PropTypes.object,
  scope: PropTypes.object,
  siteTitle: PropTypes.string.isRequired,
};

BlogPost.defaultProps = {
  next: {},
  previous: {},
  scope: {},
};

export default React.memo(BlogPost);
