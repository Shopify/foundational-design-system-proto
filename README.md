# Polaris

[About this repo](#about-this-repo) | [Projects](#projects) | [How to use this repo](#how-to-use-this-repo) | [Contribute to our explorations](#contribute-to-our-explorations) | [Technical details](#technical-details)

## About this repo

> The experience platform for Shopify. This repository is focused on centralizing systems, documentation and foundations.

| Current status | Owner                                                                       | Help                                                               |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ongoing        | [@polaris-team](https://github.com/orgs/Shopify/teams/polaris-team/members) | [#polaris](https://shopify.slack.com/app_redirect?channel=polaris) |

## Projects

A public version of our [Github Project](https://github.com/orgs/Shopify/projects/2250/views/5?type=beta) will be coming soon!

## How to use this repo

### polaris.shopify.com quick start guide

Make sure [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/) are installed on your computer then run the following commands to get started:

```shell
$ git clone https://github.com/Shopify/polaris.git    # git clone repository
$ cd polaris                                          # access the files
$ npm install                                         # install dependencies
$ npm run dev                                         # run polars.shopify.com locally
```

## Try out the experimental release

We have created an [initial release](https://www.npmjs.com/package/@shopify/layout-experimental) for sharing and testing layout components: Box, Grid, Flex, and more. You can check out examples of how they are used and try them out yourself at the [Layout Experimental CodeSandbox](https://codesandbox.io/s/layout-experimental-demo-wcxdj?file=/src/pages/index.js).

See [this discussion](https://github.com/Shopify/polaris/discussions/178) for how to use the experimental components in your own project.

## Contribute to our explorations

We'd love to hear what you think. Start a conversation in [Github Discussions](https://github.com/Shopify/polaris/discussions)!

## Technical details

As we continue to iterate and evolve, these technologies are subject to change. Currently, polaris.shopify.com is built using the following technologies:

- [Sprinkles](https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles), a CSS framework for vanilla-extract
- [vanilla-extract](https://vanilla-extract.style), a CSS-in-JS library
- [ViteJS](https://vitejs.dev), a frontend build tool

For questions about our tech stack, go to [#polaris](https://shopify.slack.com/app_redirect?channel=polaris)
