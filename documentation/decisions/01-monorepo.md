# One monorepo for Polaris foundations

## Date

May 25, 2021

## Status

In progress

## Contributors

- Alex Page
- Chloe Rice
- Emma Orhun
- Kyle Durand
- Sam Rose

## Summary

We are moving forward with using a monorepo to organize and manage our Polaris team deliverables. We are currently forgoing the build and monorepo management step while prototyping. This will allow the team to make package structure changes more flexibly and test how the packages will interact with each other. We will be using [Vite](https://vitejs.dev/) to build and develop the packages until we are more confident in an official package structure moving forward.

## Problem space

We are developing a prototype for enabling Polaris to be a tool for building design systems. We are working on breaking down components into foundational pieces for improved flexibility and greater reuse across all of Shopify, not just the Admin.

## Solution

Using a monorepo will allow us to package design system tools and assets individually, enabling developer to access only what they need. Developing the packages together in a monorepo will allow the Polaris team to work faster and avoid having to manage multiple repos.

This will also make it easier for contributors, creating a centralize location for Polaris projects.
