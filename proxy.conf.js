const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;

//ng serve --proxy-config proxy.conf.js 