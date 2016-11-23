# vue-ssr-boilerplate

A stripped down version of [vue-hackernews-2](https://github.com/vuejs/vue-hackernews-2.0)
for use as a boilerplate.

## Features

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
- [ESLint](http://eslint.org/) with Airbnb's base JS
- [i18next](http://i18next.com/) internationalization

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```
