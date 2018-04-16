module.exports = {
  entry: {
    'index': './config/dev/index.tsx'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.css?$/, use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[sha1:hash:hex:4]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')(),
                require('postcss-url')(),
                require('postcss-cssnext')(),
                require('postcss-reporter')()
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    libraryTarget: 'umd'
  },
  devServer: {
    index: './config/dev/index.html',
    contentBase: './config/dev'
  }
};
