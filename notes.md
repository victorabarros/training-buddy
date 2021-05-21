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

- backend with typescript and mongodb
- find for how deploy mobile app in a android/iphone simulator (does exist a docker container to this? https://snack.expo.io/ )
- remake web with [nextjs](https://nextjs.org/)
- deploy web on vercel
