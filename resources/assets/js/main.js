/**
 * Polyfills
 * ---------
 * https://babeljs.io/docs/usage/polyfill/
 *
 */
import '@babel/polyfill';
require('smoothscroll-polyfill').polyfill();

// CSS
// import '../css/main.scss';

// SVG Spritesheet
import './utils/svg';

import App from './App';

const initApp = () => {
    // Extract data from DOM
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const currentLang = html.lang;
    //const lang = document.querySelector('#lng').value;
    //const viewName = body.getAttribute('data-view');
    //const app = new App(viewName, currentLang);
};

document.addEventListener('DOMContentLoaded', initApp, false);
