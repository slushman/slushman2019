import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						author
						siteDescription
						siteLogo
						siteUrl
						title
						userLinks {
							facebook {
								label
								url
								iconClassName
							}
							github {
								label
								url
								iconClassName
							}
							twitter {
								label
								url
								iconClassName
							}
							email {
								label
								url
								iconClassName
							}
						}
						userLocation
					}
				}
			}
		`
	)
	return site.siteMetadata;
}

export default useSiteMetadata;
