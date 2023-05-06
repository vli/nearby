# Tonearby

This project was generated using `npx create-nx-workspace tonearby --packageManager=yarn` command.

It has `to-near-by` app and `to-near-by-e2e` for Cypress end to end test

## Pages

Each apps have all pages in `/pages` directory

Generated pages:
- `nx generate @nx/next:page --name=home --style=scss`
- `nx generate @nx/next:page --name=nature --style=scss`
- `nx generate @nx/next:page --name=events --style=scss`


## Libraries

Most code should live in libs - applications are as "containers" that link, bundle and compile functionality implemented in libraries for being deployed.As such, if we follow a 80/20 approach:
- place 80% of your logic into the libs/ folder
- and 20% into apps/


Generated libraries
`nx g @nx/next:lib react-ui --publishable --importPath=@tonearby/react-ui`

## Components

Shared react-ui components are divided based on Atomic Design levels,
Generated shared components:

- `nx g @nx/next:component icons --directory elements --project=react-ui --style=scss`
- `nx g @nx/next:component cards --directory patterns --project=react-ui --style=scss`
- `nx g @nx/next:component header --directory blocks --project=react-ui --style=scss`
- `nx g @nx/next:component layout --directory templates --project=react-ui --style=scss`

Application specific components:
Run `nx g @nx/next:component logo --project=to-near-by --style=scss`

## Development server

Run `nx serve to-near-by` for a dev server. 

Navigate to http://localhost:4800/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build to-near-by` to build the project. 

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test to-near-by` to execute the unit tests via [Jest](https://jestjs.io).
Run `nx test react-ui` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Note! Stop development server before running end-to-end tests as tests are setting up server in the same port

Run `nx e2e to-near-by-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Graph of workspace

Run `nx graph` to see a diagram of the dependencies of your projects.


## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.