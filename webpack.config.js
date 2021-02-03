const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
	  {
            loader: 'style-loader', 'css-loader', 'imports-loader',
	    option: {
	     imports: {
	       moduleName: '@github/jtml',
	       name: 'html', 'render',
	     },
	   },
         },
       ],
     },
   ],
};
