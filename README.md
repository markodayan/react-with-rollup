# React with rollup.js

> Setting up a React application using Rollup

[Live Preview](https://agitated-brattain-ed05b4.netlify.app/)
<br>

---

## Running this application

1. Install dependencies

```
npm install
```

2. Run the application with:

```
npm start
```

---

## How to build this simple app boilerplate

1. Install `react` and `react-dom`

```
  npm i react react-dom
```

2. Install `rollup` plus several plugins as dev dependencies

```
npm i -D rollup rollup-plugin-serve rollup-plugin-livereload @rollup/plugin-node-resolve @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-replace
```

3. Install `babel` dev dependencies:

```
npm i -D @babel/core @babel/preset-react
```

4. Install CSS and image rendering dependencies for rollup:

```
npm i -D @rollup/plugin-image rollup-plugin-postcss
```

5. Create a config file called `rollup_dev.config.js` in project root and populate with the following:

```javascript
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    image(),
    postcss({
      extensions: ['.css'],
    }),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
  ],
};
```

6. Create your React app in a `src` directory as you normally would and then run the application with:

```
rollup -c rollup_dev.config.js -w
```

7. Add this command as a start script in `package.json`.

8. You can optionally create a production rollup config file that will just do the build process without serving the app or offering hot reloads, just remove the `serve` and `livereload` plugins.
