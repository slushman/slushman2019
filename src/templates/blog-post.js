import React from 'react';
import { graphql } from 'gatsby';

import BlogPost from '../components/BlogPost';
import useSiteMetadata from '../hooks/UseSiteMetadata';

const BlogPostTemplate = ( { data, location, pageContext } ) => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <BlogPost
      location={ location }
      next={ pageContext.next }
      post={ data.mdx }
      previous={ pageContext.previous }
      siteTitle={ siteTitle }
    />
  )
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
