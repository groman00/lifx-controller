# LIFX Controller
This project assumes that you are using LIFX light bulbs in my house.  You can update bulb IDs and groupings in `src/config/lighting.js`.

## Getting Started

1. [Generate an LIFX token](https://community.lifx.com/t/creating-a-lifx-http-api-token/25)
2. Create an env file `cp env/.env.example env/.env`, and update the `BEARER_TOKEN` with the result from step 1.
3. Run `npm install`

## Development
This project uses Create React App.  You can develop your react app with the included webpack dev server, but all LIFX methods are mocked, simply logging values to the console. To fully test your app, you must run it with Electron.

### Run dev server
`npm run react-start`

### Run electron in dev mode
`npm run start`

### Build electron app
`npm run dist`

---

## Notes
- Removed code splitting and cache groups from default CRA webpack, see `scripts/build-non-split.js`.
- `.env` files need to be in a subdirectory for some reason, otherwise electron does not include in `dist`.
- `npm run dist` will only bundle files listed in `package.json` under `build.files`.






