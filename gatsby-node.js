const path = require( `path` );
const _ = require( 'lodash' );
const { createFilePath } = require( `gatsby-source-filesystem` );
const useSlugify = require( './src/hooks/slugifyModule' );

exports.createPages = ( { graphql, actions } ) => {
  const { createPage } = actions;

  const blogPost = path.resolve( `./src/templates/blog-post.js` );
  const categoryTemplate = path.resolve( `./src/templates/category.js` );

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                gallery
                category
              }
              code {
                scope
              }
            }
          }
        }
      }
    `
  ).then( result => {
    if ( result.errors ) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage( {
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      } )
    } )

    let categories = []
    _.each( posts, edge => {
      if ( _.get( edge, 'node.frontmatter.category' ) ) {
        categories = categories.concat( edge.node.frontmatter.category )
      }
    } )
    categories = _.uniq( categories );

    categories.forEach( category => {
      createPage( {
        path: `/category/${ useSlugify( category ) }/`,
        component: categoryTemplate,
        context: {
          category,
        },
      } )
    } )
  } )
};

exports.onCreateNode = ( { node, actions, getNode } ) => {
  const { createNodeField } = actions

  if ( node.internal.type === `Mdx` ) {
    const value = createFilePath( { node, getNode } );
    createNodeField( {
      name: `slug`,
      node,
      value: `/post${ value }`,
    } )
  }
};
