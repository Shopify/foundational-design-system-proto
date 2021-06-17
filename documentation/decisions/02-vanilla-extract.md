# Styling components with vanilla-extract

## Date

June 17, 2021

## Status

In progress

## Contributors

- Alex Page
- Aveline Thelen
- Kyle Durand
- Sam Rose

## Summary

The initial Polaris foundations will be styled using [vanilla-extract](https://vanilla-extract.style/).

## Problem space

The components in `polaris-react` where styled using Sass. We outlined some of the limitations and frustrations with approach in the [Sass, you no longer spark joy](https://docs.google.com/document/d/1kgzyuvqO8_A0DsgzVydG-whUzKj_2-HhYE8rE_KqGRU/edit?ts=60ba63e0#heading=h.sbgneadeldko) internal blog post.

We have documented our [alternative styling explorations](https://docs.google.com/document/d/1E9jWwngj2nfcmiEau0SaH3Sec7mVgAhQEalq91Qpipo/edit#) to narrow down to a better solution.

## Solution

vanilla-extract is a strong candidate for replacing Sass that we'd like to explore more for the following primary reasons:

- Very similar usage to how CSS/Sass Modules are being used at Shopify today
- TypeScript support for theme values and CSS properties
- Zero runtime cost (performance scales)
- Framework agnostic
- Theming support
- Variant support
