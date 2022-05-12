# webpack-typescript-sass-docker

<img src="./src/images/logo_webpack.svg"  height="100" /> &nbsp;
<img src="./src/images/logo_sass.svg"  height="100" /> &nbsp; <img src="./src/images/logo_ts.svg"  height="100" />

Ready made template and bundle for below goodies available for you to clone:

- [Webpack v5](https://webpack.js.org/)
- Typescript
- Sass/SCSS
- [Font Awesome](https://fontawesome.com/)
- Hotreload
- Eslint
- Prettier
- Javscript and CSS Sourcemaps
- Javscript and CSS minification

Coming soon:

- docker with (php, mysql, phpmyadmin, apache)

## Setup

### Install webpack

```
npm install webpack webpack-cli --save-dev
```

### Install packages

Available out of the box is Typesceipt, Sass, Eslint, Prettier, FontAwesome

```
npm install
```

## Development mode

```
npm run dev
```

Now just go to http://localhost:8080/ and you should see your screen

<img src="./src/images/welcome.jpg" alt="welcome screen">

## Production build

```
npm run prod
```

This will generate your live files in the `public/dist` folder.
