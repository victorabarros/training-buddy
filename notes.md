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

- `yarn create next-app --example with-typescript training-buddy-web-app`
- install `yarn add --dev --exact prettier`
- add script to package.json `"prettier": "prettier --write ."`

## TODO

- mobile
  - add a image to loading app
  - icon
- backend
  - code it with typescript and mongodb
