/**
 * SVG Loader
 * 
 * This will inject an SVG sprite at the top of the HTML
 * document at runtime. This way we can use the `xlink:href`
 * syntax either in normal HTML or in JS (Vue or React components).
 * 
 * Example:
 * 
 * ```html
 *  <svg>
 *      <use xlink:href="#twitter"></use>
 *  </svg>
 * ```
 * 
 * Where `#twitter` would correspond to the file name on
 * disk (ex: `twitter.svg`) when imported as a module in JavaScript/Webpack.
 * 
 * What is happening here?
 * 
 * 1. We are using require.context to generate a list of SVG files in the assets folder.
 * 2. We then iterate over this list and load all the files using the svg-sprite loader.
 * 3. The svg-sprite loader then generates the sprite sheet and injects it into DOM on run-time. Similar to how style-loader works.
 * 
 * http://varun.ca/icon-component/
 */
const files = require.context('!svg-sprite-loader!./../../static/images/svg', false, /.*\.svg$/);
files.keys().forEach(files);
