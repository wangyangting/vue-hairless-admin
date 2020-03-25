const path = require('path');
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const name = defaultSettings.title || 'Vue Hairless Admin' // page title
const port = process.env.port || process.env.npm_config_port || 9110; // dev port

const chainWebpack = config => {
  config.resolve.alias
    .set('@', resolve('src'));
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before(app) {
      app.get('/api/user/login', (req, res, next) => {
        res.json({ 'code': 20000, 'data': { 'token': 'admin-token-xxx' }});
      });
      app.get('/api/user/info', (req, res, next) => {
        res.json({ 'code': 20000, 'data': {
          roles: ['admin'],
          introduction: 'I am a super administrator',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Super Admin'
        }});
      });
    }
    /*,
    before: require('./mock/mock-server.js')*/
  },
  chainWebpack
};
