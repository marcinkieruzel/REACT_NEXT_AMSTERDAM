### Lets start from scratch

1. Create package.json file with `npm init`. Courious about that? Feel free to ask questions.
2. Install main dapendencies: `npm install react react-dom`
3. Then install webpack `npm install --save-dev webpack webpack-cli`
4. We'll need some code transpilation. Lets use webpack `npm install --save-dev babel-loader` and some presets (they are like dictionaries) `npm install --save-dev @babel/core @babel/preset-react`
5. We can configure babel presets `in webpack.config.js` file but common way to do that is to create a separate file `.babelrc` with the content:

```json
{
  "presets": ["@babel/preset-react"]
}
```

6. Now is the time for `webpack.config.js` file.

```javascript
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
```

7. Lets create our HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React From Scratch</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- The bundle-name should be same as you defined in webpack config file -->
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

8. And the final React

```javascript

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello world!!!</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

```
Depends of the version of React you use. You may rather use React 18 render function. There is a small change in render function

```javascript
// Before – React 18
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After – React 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```
Further reading: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

add scripts to package.json

```json
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack --mode development"
  },
  ```

9. Add typescript `npm install --save-dev typescript ts-loader @types/node @types/react @types/react-dom @types/jest`

10. Add rules for typescript transpilation to webpack:

```javascript
 module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
```

and compiler options in tsconfig.json

```javascript
{
"compilerOptions": {
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true,
  "outDir": "./dist/",
  "noImplicitAny": true,
  "module": "es6",
  "target": "es5",
  "jsx": "react",
  "allowJs": true,
  "moduleResolution": "node"
}
}
```

11. Build you project with ```npm run build``` and visit ```index.html``` file


