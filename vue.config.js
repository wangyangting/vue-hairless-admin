const path = require("path");
const defaultSettings = require("./src/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || "Vue Hairless Admin"; // page title

const chainWebpack = config => {
  config.resolve.alias
    .set("@", resolve("src"))
    .set("@assets", resolve("src/assets"));
};

module.exports = {
  name: name,
  publicPath: process.env.NODE_ENV === "development" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  chainWebpack
};
