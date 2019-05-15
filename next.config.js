// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/gallery': { page: '/gallery' },
        '/projects': { page: '/projects' },
        '/single-project/': { page: '/single-project', query: { current: 0 } },
        '/single-site/': { page: '/single-site', query: { current: 0 } },
        '/sites': { page: '/sites' },
      };
    },
  });
