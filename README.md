# 360 Feedback App

## Requirements

- [`nvm`](https://github.com/creationix/nvm) or [`nvm-windows`](https://github.com/coreybutler/nvm-windows)
- [Node.js](https://nodejs.org/)
  - see `./.nvmrc` for what version is required
  - `nvm install THE_VERSION`
  - `nvm alias default THE_VERSION` (make it default system version)
- [`yarn`](https://yarnpkg.com/)
  - `npm install -g yarn`

## Run development version 

- `nvm use` (select Node.js version based on `./.nvmrc`)
- `yarn` (install/update dependencies)
- `yarn start` (run development server)

## Build For Production

- `yarn run build` 
