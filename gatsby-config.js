module.exports = {
	siteMetadata: {
		title: `D E W Y N T E R S`,
		description: `Dewynters - We are the world's leading international advertising, marketing and design agency for the arts, sports and live entertainment, based in London's West End.`,
		author: `Dewynters`,
		siteUrl: `https://www.dewynters.com`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-resolve-src',
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/`,
            },
        },
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sharp`,
        {
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: 'https://www.dewynters.com'
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				// Exclude specific pages or groups of pages using glob parameters
				// See: https://github.com/isaacs/minimatch
				// The example below will exclude the single `path/to/page` and all routes beginning with `category`
				exclude: [],
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						edges {
							node {
								path
							}
						}
					}
				}`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Dewynters`,
				short_name: `Dewynters`,
				start_url: `/`,
				background_color: `#000000`,
                theme_color: `#00e4e1`,
				display: `minimal-ui`,
                icon: `src/images/Favicon.jpg`, // This path is relative to the root of the site.
			},
		},
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-3161258-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                // anonymize: true,
                // Setting this parameter is also optional
                // respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional create only fields (optional)
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
		// {
		// 	resolve: `gatsby-plugin-google-tagmanager`,
		// 	options: {
		// 		id: "GTM-NC55TTV",
		// 		includeInDevelopment: false,
		// 	},
		// },
		// {
		// 	resolve: `gatsby-plugin-google-tagmanager`,
		// 	options: {
        //         id: "GTM-W46RC9",

		// 		// Include GTM in development.
		// 		// Defaults to false meaning GTM will only be loaded in production.
		// 		includeInDevelopment: false,

		// 		// Specify optional GTM environment details.
		// 		// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
		// 		// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
		// 	},
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		'gatsby-plugin-offline',
	],
}
