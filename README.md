# Static Base
My boilerplate for static sites built with Assemble, SASS, and Babel via Webpack.

## Todo
1. Output mirror directory structure for pages and posts.
2. Permalinks for posts.
3. Fix weird multiplication of compilation steps.
  - `onchage` of watched files, it runs compilations steps 4x, for both `.js` and `.scss` files.

## Getting Started
```bash
npm install
```
To watch for changes to templates, posts, styles and scripts:
```bash
npm start
```
