Did you encounter `Error: Cannot define 'query' and multiple loaders in loaders list`?

You've come to the right place!

Usage:
BEFORE: (This won't work!)
```js
// ...

  module: {
    loaders: [
      {
        test: (absPath) => /\.tsx?$/.test(absPath),
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        query: {
          configFileName: `${clientPath}/tsconfig.json`
        }
      },
    ],

// ...
```

AFTER:
```js
import loaderWithQuery from 'webpack-query-creator'
// ...

  module: {
    loaders: [
      {
        test: (absPath) => /\.tsx?$/.test(absPath),
        loaders: [
          'react-hot-loader/webpack',
          loaderWithQuery('awesome-typescript-loader',
            {
              configFileName: `${clientPath}/tsconfig.json`
            }
          )
        ],
      },
  ],
  
// ...
```