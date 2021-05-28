# Notes

personal notes

## steps

### root

- write `.gitignore` with https://www.toptal.com/developers/gitignore
- write `Makefile`
- write `.editorconfig`

### mobile

- install expo cli
- `expo init <project_name> -t expo-template-blank-typescript`
- rename project folder to `mobile`
- inside project folder:
  - remove `.git/` folder
  - install `yarn add --dev --exact prettier`
  - write `.prettierrc.json`
  - add script to package.json `"prettier": "prettier --write ."`
  - exec `yarn prettier`
- building app: https://docs.expo.io/distribution/building-standalone-apps/
  - exec `expo build:android -t apk`

### web

```sh
make debug
npx create-react-app 05-primeiro-projeto-react --template=typescript
```

- Remove unecessary files...

- Start with ./src./routes folder

```sh
yarn add react-router-dom
yarn add -D @types/react-router-dom
```

- To set identation and visuals (https://prettier.io/docs/en/install.html)

```sh
yarn add prettier
```

## TODO

- mobile
  - add a image to loading app
  - icon
  - build it and install pkg on smartphone
- backend
  - code it with typescript and mongodb
