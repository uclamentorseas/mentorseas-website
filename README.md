# MentorSEAS Website

## Set-up

1. Make sure you have [yarn](https://yarnpkg.com/en/) installed on your computer.
2. In the project directory, run `yarn install` to install all project dependencies.
3. You're all set!

## Commands

`yarn start`: Start the local development server.

`yarn build`: Build the application bundle using parcel-bundler to the `build` folder that is ready to be published to the web.

`yarn transfer`: Transfers the built app (from `yarn build`) to SEASnet to be served from mentorship.seas.ucla.edu. This is currently authenticated through Simon Zhou's SEASnet account so you'll need his SEASnet password to authorize this action.

`yarn deploy`: Runs `yarn build` then `yarn transfer`


## Project Structure
*I've only listed files/directories that are particularly important to understanding the overall project*
```
config/
  webpack.config.dev.js
  webpack.config.prod.js
public/
scripts/
src/
  components/
  pages/
    HomePage/
    StaffPage/
  views/
  app.js
  index.js
```

There is a three-tiered hierarchy of React components, in order from smallest to largest.
1. **components** -- small & reusable React components used to build other components
2. **views** -- specific features/views that are composed of the smaller components
3. **pages** -- the pages that are rendered at different routes, composed of views and components


* `src/app.js` default exports a `Switch` component that routes between the site's pages, which are exported as `{ pages }` from `src/app.js` as well. As such, the following import is possible.

```js
import App, { pages } from 'app'
```

* `src/index.js` imports the `Switch` from `src/app.js` and renders it into the DOM

* The contents of a page directory should be absolutely minimal. For example,  `src/pages/HomePage` should be limited to:
  * index.js
  * HomePage.js
  * HomePage.scss
  * a very limited number of other items directly pertinent to the page

### Other Notes

* We are using Parcel's aboslute module resolution feature, allowing us to declare our `import` statements relative to the project entry folder, meaning that no matter which file you are in, you can write clean imports like:

```js
import Foo from '/components/Foo'
```

instead of

```js
import Foo from '../../../../components/Foo'
```
