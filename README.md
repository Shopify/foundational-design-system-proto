# Shopify Design Foundations

[About this repo](#about-this-repo) | [Projects](#projects) | [How to use this repo](#how-to-use-this-repo) | [Technical details](#technical-details) | [Contribute to our explorations](#contribute-to-our-explorations) | [Resources](#resources)

---

## About this repo

The experience platform for Shopify. This repository is focused on centralizing foundational design system resources.

| Current status | Owner                                                                       | Help                                                               |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| paused         | [@polaris-team](https://github.com/orgs/Shopify/teams/polaris-team/members) | [#polaris](https://shopify.slack.com/app_redirect?channel=polaris) |

### Projects

A public version of our [Github Project](https://github.com/orgs/Shopify/projects/2250/views/5?type=beta) will be coming soon!

### Development

Make sure [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/) are installed on your computer, then run the following commands in your terminal to get started:

```shell
$ git clone https://github.com/Shopify/foundational-design-system-proto.git    # git clone repository
$ cd foundational-design-system-proto                                          # access the files
$ npm install                                                                  # install dependencies
$ npm run dev                                                                  # run locally
```

### Technical details

As we continue to iterate and evolve, these technologies are subject to change. Currently, the foundations are built using the following technologies as part of our React TypeScript stack:

- [Sprinkles](https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles), a CSS framework for vanilla-extract
- [vanilla-extract](https://vanilla-extract.style), a CSS-in-JS library
- [ViteJS](https://vitejs.dev), a frontend build tool

For questions about our tech stack, go to [#polaris](https://shopify.slack.com/app_redirect?channel=polaris)

### Contribute to our explorations

We'd love to hear what you think. Start a conversation in [Github Discussions](https://github.com/Shopify/polaris/discussions)!

---

## Resources

### Documentation

- [Design tokens](packages/tokens/README.md)
- [React components](packages/components/README.md)

### NPM packages

#### @shopify/layout-experimental

An NPM package of experimental React components for layout, including abstractions for flexbox and grid, built with Vanilla Extract and Sprinkles.

##### Install locally

1. Add the dependency:

NPM

```shell
npm install @shopify/layout-experimental
```

Yarn

```shell
yarn add @shopify/layout-experimental
```

2. Import the foundation styles at the base of your app:

```jsx
import '@shopify/layout-experimental/dist/style.css';
```

3. Read the [component API documentation](packages/components/README.md)

##### Explore the sandbox

We have created a [sandbox](https://codesandbox.io/s/layout-experimental-demo-wcxdj?file=/src/pages/index.js) utilizing the [experimental release](https://www.npmjs.com/package/@shopify/layout-experimental) of our foundational layout components: Box, Grid, Flex, and more. Check it out to see examples of how the components can be used and try them out yourself!
