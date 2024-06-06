# Rafflebox ESLint

This is a monorepo containing configurations for our code linting.

## Installation

To use our configs in the project, install and configure the correct package depending on the type of project.

Add a lint script to the project's package.json

```json
"scripts": {
  "lint": "eslint .",
}
```

### Node/Typescript project

First you will need to have `eslint` and `typescript` as dev dependencies of the project

Then you can add our config as a dev dependency

```sh
yarn add -D @rafflebox-technologies-inc/eslint-config-rafflebox-ts
```

Add/Update your eslint config file at the root of the project

```ts
// eslint.config.js
import raffleboxTSConfig from '@rafflebox-technologies-inc/eslint-config-rafflebox-ts';

export default raffleboxTSConfig;
```

### Vue project

First you will need to have `eslint` and `typescript` as dev dependencies of the project

Then you can add our config as a dev dependency

```sh
yarn add -D @rafflebox-technologies-inc/eslint-config-rafflebox-ts
```

Add/Update your eslint config file at the root of the project

```ts
// eslint.config.js
import raffleboxVueConfig from '@rafflebox-technologies-inc/eslint-config-rafflebox-vue';

export default raffleboxVueConfig;
```
