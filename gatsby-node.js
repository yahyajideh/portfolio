const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@fonts': path.resolve(__dirname, 'src/fonts'),
      },
    },
  });
};
