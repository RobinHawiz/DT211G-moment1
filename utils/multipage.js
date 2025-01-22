const HtmlWebpackPlugin = require("html-webpack-plugin");

const generateHtmlPlugin = (pageName) => {
  if (pageName == "index") {
    return new HtmlWebpackPlugin({
      title: pageName,
      filename: `index.html`,
      template: `./src/pages/index.html`,
    });
  } else {
    return new HtmlWebpackPlugin({
      title: pageName,
      filename: `${pageName}/index.html`,
      template: `./src/pages/${pageName}/index.html`,
    });
  }
};

const populateHtmlPlugins = (pageNames) => {
  let output = [];
  pageNames.forEach((pageName) => {
    output.push(generateHtmlPlugin(pageName));
  });
  return output;
};

module.exports = { populateHtmlPlugins };
