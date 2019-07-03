module.exports = {
  siteMetadata: {
    author: 'Chris Wilcoxson',
    siteDescription: 'Software engineer at Church Community Builder in Colorado Springs, CO specializing in React, React Native, and PHP.',
    siteUrl: 'https://www.slushman.com',
    siteTitle: 'Slushman',
    userLocation: 'Colorado Springs, CO',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images-grid',
            options: {
              className: 'gallery',
              gridGap: '20px',
              margin: '20px auto',
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: '#023451',
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              // linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteTitle
                siteDescription
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ( { query: { allMdx } } ) => {
              return allMdx.edges.map( edge => {
                return Object.assign( {}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: 'https://www.slushman.com' + edge.node.fields.slug,
                  guid: 'https://www.slushman.com' + edge.node.fields.slug,
                  custom_elements: [ { 'content:encoded': edge.node.code.boy } ],
                } )
              } )
            },

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             **/
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    code {
                      body
                    }
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Slushman',
        short_name: 'slushman',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/slushman.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
