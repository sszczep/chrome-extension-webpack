![Chrome Extension Webpack](https://user-images.githubusercontent.com/21238816/147307879-a3cb179e-3368-412a-88db-284474183884.png)
Get started with Chrome extensions development using webpack, Typescript, Sass, and more.

## Announcements

*Nothing to see here yet.*

## Features

Chrome Extension Webpack is a simple boilerplate for fast extension development. It helps writing modern TypeScript code with SCSS support. 
It is meant to be lightweight and scalable, hence easily adaptable to your needs.

It features:
- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Webpack 5](https://webpack.js.org)
- [TypeScript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

If you need React support, please check this awesome boilerplate created by [Michael Xieyang Liu](https://github.com/lxieyang): [chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react).

## Getting started

### Installing and running

1. Clone the repository
2. Run ```npm install```
3. Run ```npm run start``` for development mode, ```npm run build``` for production build
4. Add the extension to Chrome:
    1. Go to ```chrome://extensions/```
    2. Enable the ```Developer mode```
    3. Click on ```Load unpacked```
    4. Choose the ```dist``` directory
5. You are good to go! You can also pin the extension to the toolbar for easy access.

### Project structure

All TypeScript files are placed in ```src``` directory. There are few files already prepared for you:
- ```contentScript.ts``` - the [content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) to be run in the context of selected web pages
- ```serviceWorker.ts``` - the [background script](https://developer.chrome.com/docs/extensions/mv3/service_workers/) usually used to initialize the extension and monitor events
- ```storage.ts``` - little helper utility to easily manage the extension's [storage](https://developer.chrome.com/docs/extensions/reference/storage/). In this particular project we are using *synced* storage area
- ```popup.ts``` and ```options.ts``` - per-page scripts

Style files are placed in ```styles``` directory. There you can find per-page stylesheets and ```common.scss``` with stylings common across the pages.
We also use [Normalize.css](https://necolas.github.io/normalize.css/) so your extensions look good and consistent wherever they are installed.

```static``` directory includes all the files to be copied over to the final build. It consists of ```manifest.json``` defining our extension, ```.html``` pages and icon set.

### Pages

Currently, there are two defined pages: ```popup``` and ```options```, for main extension's view (after clicking on the extension icon) and extension's options (*Options* in extension's context menu) correspondingly.

### Where to run content scripts

Content scripts are run on sites matching the defined URL patterns. Take a look at this entry in ```static/manifest.json``` file:

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["contentScript.js"]
  }
],
```

The content script will be injected on all sites by default. 

You can read more about match patterns [here](https://developer.chrome.com/docs/extensions/mv3/match_patterns/).

### Adding more content scripts

It is as simple as creating new TypeScript file in ```src``` directory, adding a corresponding entry in ```webpack.common.js```, and declaring new content script in ```manifest.json``` with desired match pattern (hey, look [above](#where-to-run-content-scripts)). 

## More resources

- [Welcome to Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [webpack documentation](https://webpack.js.org/concepts/)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Sass Basics](https://sass-lang.com/guide)
