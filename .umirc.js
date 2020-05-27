const path = require('path');

const server = 'http://localhost:3000';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      dll: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ]
      }
    }],
  ],
  alias:{
    components:path.resolve(__dirname,'src/components'),
        utils:path.resolve(__dirname,'src/utils'),
        services:path.resolve(__dirname,'src/services'),
        models:path.resolve(__dirname,'src/models'),
        // themes:path.resolve(__dirname,'src/themes'),
        images:path.resolve(__dirname,'src/assets'),
    static:path.resolve(__dirname,'src/static')
  },
  proxy: {
    "/api": {
      "target": 'http://120.79.79.93:10003',
      // "changeOrigin": true,
      // "pathRewrite": { "^/api" : "/api" }
    }
  },
  hash:true,
  // base:'',
  // runtimePublicPath: true,
  // publicPath: "http://yourcdn/0to/static/"
}
