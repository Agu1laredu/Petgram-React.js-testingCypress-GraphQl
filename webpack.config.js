/* eslint-disable prefer-regex-literals */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Red social para mascotas',
      shortname: 'Petgram 🐶',
      description: 'Postea las mejores fotos de tus mascotas',
      background_color: '#fff',
      theme_color: '#9f2fff',
      icons: [
        {
          src: path.resolve(__dirname, 'public/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://petgram-server-roy-react.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 3006,
  },
};
