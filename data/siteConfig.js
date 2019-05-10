const config = {
  siteTitle: "Slushman", // Site title.
  siteTitleShort: "GA Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "Slushman", // Alternative site title for SEO.
	siteAuthor: "Chris Wilcoxson",
  siteLogo: "/content/assets/slushman-animated.svg", // Logo used for SEO and manifest.
  siteUrl: "https://www.slushman.com", // Domain of your website without pathPrefix.
  siteDescription: "Software engineer at Church Community Builder in Colorado Springs, CO specializing in React, React Native, and PHP.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "News", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY.MM.DD", // Date format for display.
  userName: "slushman", // Username to display in the author segment.
  userEmail: "chris@slushman.com", // Email used for RSS feed's author segment
  userTwitter: "slushman", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Colorado Springs, CO", // User location to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
		facebook: {
      label: "Facebook",
      url: "https://www.facebook.com/slushman/",
      iconClassName: "fa fa-facebook"
		},
		github: {
      label: "GitHub",
      url: "https://github.com/slushman/",
      iconClassName: "fa fa-github"
		},
		twitter: {
      label: "Twitter",
      url: "https://twitter.com/slushman",
      iconClassName: "fa fa-twitter"
		},
		email: {
      label: "Email",
      url: "mailto:chris@slushman.com",
      iconClassName: "fa fa-envelope"
    }
	},
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
