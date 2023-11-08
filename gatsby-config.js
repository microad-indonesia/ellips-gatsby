module.exports = {
    siteMetadata: {
        title: 'Ellips FE',
        siteUrl: 'https://ellipshaircare.id/',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-176167941-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['G-K2JQT3W6B1'],
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-K8NW5MP',
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,
                // Defaults to null
                defaultDataLayer: { platform: 'gatsby' },
                // Defaults to false
                enableWebVitalsTracking: true,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                // add relative path to your layout component
                component: require.resolve('./src/components/Layout'),
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-ellips-client`,
                short_name: `ellips-client`,
                start_url: `/`,
                background_color: `#fd79ad`,
                theme_color: `#fd79ad`,
                display: `minimal-ui`,
                icon: `src/images/icons-and-logo/favicon-32x32.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-prettier-eslint',
            // this is the default configuration, override only what you need
            options: {
                cwd: process.cwd(), // path to a directory that should be considered as the current working directory
                watch: true, // format/lint on save
                initialScan: true, // if true, will format/lint the whole project on Gatsby startup
                onChangeFullScanLint: false, // if true, on file save always perform full scan lint
                onChangeFullScanFormat: false, // if true, on file save always perform full scan format
                prettierLast: false, // if true, will run Prettier after ESLint
                ignorePatterns: [
                    '**/node_modules/**/*',
                    '**/.git/**/*',
                    '**/dist/**/*',
                    '.cache/**/*',
                    'public/**/*',
                ], // string or array of paths/files/globs to ignore
                prettier: {
                    patterns: [], // string or array of paths/files/globs to include related only to Prettier
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
                    customOptions: {}, // see: https://prettier.io/docs/en/options.html
                },
                eslint: {
                    patterns: [], // string or array of paths/files/globs to include related only to ESLint
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
                    formatter: 'stylish', // set custom or third party formatter
                    maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
                    emitWarning: true, // if true, will emit lint warnings
                    failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
                    failOnWarning: false, // same as failOnError but for warnings
                    plugins: [], // an array of plugins to load for ESLint
                    customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
                },
            },
        },
    ],
}
