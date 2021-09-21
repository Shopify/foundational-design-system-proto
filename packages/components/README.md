# @polaris/components

[Tokens](../tokens/README.md) | [Atoms](#atoms-shortcuts-helpers) | [Components](#component-api-reference)

## Atoms (shortcuts, helpers)

[Source code](https://github.com/Shopify/polaris/blob/master/packages/components/src/atoms/sprinkles.css.ts)

Atoms are the smallest functional elements of the design foundation system. Using Sprinkles, we apply the [design tokens](packages/tokens/README.md) to common CSS properties alongside their natively accepted values and convert them into atoms. These atoms encapsulate common CSS rules into global classes to reduce redundant styles. Atoms are available in your React code in two ways: through props on each of our components and through the atoms function for use in .css.ts files to create custom classes.

When an atomic prop is set on a component, the HTML renders with the corresponding atomic classes. For example, the `marginTop` prop accepts any of the spacing tokens. Setting the `marginTop` prop to `4` on a `Box` component sets a corresponding atomic class on the `div` it renders. That atomic class applies a custom CSS property that maps to a design token\*.

| React code              | HTML rendered                                     | CSS applied                                 |
| ----------------------- | ------------------------------------------------- | ------------------------------------------- |
| `<Box marginTop=”4” />` | `<div class=”sprinkles_marginTop_4_hspcdy2ha” />` | `margin-top: var(--spacing-4\_\_1tfgtc0c);` |

\*Note that atomic classes and custom CSS properties are partially obfuscated for performance. In future iterations, we plan to provide these atoms as their own resource to be consumed in non-React web projects and projects served on non-web platforms.

### Responsive syntax

Atomic props can be set responsively by passing an object having one, some, or all of the breakpoints as keys referencing the atomic values the prop accepts. This applies the atomic classes at the breakpoints you specify using media queries. For example:

Set different values at each breakpoint

```jsx
paddingY={{
  xs: '4',
  sm: '8',
  md: '12',
  lg: '16',
  xl: '20',
}}
```

Set different values for mobile and for tablet and above

```jsx
paddingY={{
  xs: '4',
  sm: '8',
}}
```

| Name   | Pixel width applied at             |
| ------ | ---------------------------------- |
| **xs** | _Mobile screen sizes (< 600px)_    |
| **sm** | _Tablet screen sizes (>= 600px)_   |
| **md** | _Laptop screen sizes (>= 960px)_   |
| **lg** | _Desktop screen sizes (>= 1280px)_ |
| **xl** | _4K screen sizes (>= 1920px)_      |

### Space and size values

The size atomic values below along with the [space atomic values](../tokens/README.md#spacing) are the accepted values for the [sizing](#sizing) and [spacing](#spacing) related atomic properties. For example, setting `width="1/2"` sets the class `sprinkles_width_1/2_xs__hspcdy40u` which applies the CSS rule `max-width: 50%;`.

#### Size

| Atomic value | CSS value  |
| ------------ | ---------- |
| auto         | auto       |
| 1/2          | 50%        |
| 1/3          | 33.333333% |
| 2/3          | 66.666667% |
| 1/4          | 25%        |
| 2/4          | 50%        |
| 3/4          | 75%        |
| 1/5          | 20%        |
| 2/5          | 40%        |
| 3/5          | 60%        |
| 4/5          | 80%        |
| 1/6          | 16.666667% |
| 2/6          | 33.333333% |
| 3/6          | 50%        |
| 4/6          | 66.666667% |
| 5/6          | 83.333333% |
| full         | 100%       |

### Atomic property reference

#### Interaction

| Prop name         | Values accepted                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------- |
| **cursor**        | “auto”, “default”, “pointer”, “grab”, “grabbing”                                            |
| **outlineStyle**  | “auto”, “none”, “dotted”, “dashed”, “solid”, “double”, “groove”, “ridge”, “inset”, “outset” |
| **pointerEvents** | “auto”, “none”                                                                              |
| **userSelect**    | “none”, “auto”, “text”, “contain”, “all”                                                    |

#### Borders

| Prop name       | Values accepted                                                                             |
| --------------- | ------------------------------------------------------------------------------------------- |
| **borderStyle** | “auto”, “none”, “dotted”, “dashed”, “solid”, “double”, “groove”, “ridge”, “inset”, “outset” |

#### Layout

| Prop name                       | Values accepted                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **position**                    | “absolute”, “relative”, “static”, “sticky”, “initial”, “fixed”                                           |
| **display**                     | “block”, “inline”, “inline-block”, “flex”, “inline-flex”, “grid”, “inline-grid”, “flow-root”, “contents” |
| **top / left / right / bottom** | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._       |
| **overflow**                    | “visible”, “hidden”, “clip”, “scroll”, “auto”, “initial”                                                 |
| **placeContent**                | “center”                                                                                                 |

#### Flexbox and Grid

| Prop name          | Values accepted                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **flex**           | “1”, “auto”, “initial”, “none”                                                                 |
| **flexDirection**  | “row”, “column”, “row-reverse”, “column-reverse”                                               |
| **flexGrow**       | “0”, “1”                                                                                       |
| **flexShrink**     | “0”, “1”                                                                                       |
| **flexWrap**       | “wrap, “nowrap”, “wrap-reverse”                                                                |
| **gap**            | Uses spacing                                                                                   |
| **justifyContent** | “flex-start”, “center”, “flex-end”, “stretch”, “space-around”, “space-evenly”, “space-between” |
| **justifySelf**    | “flex-start”, “center”, “flex-end”, “stretch”                                                  |
| **alignItems**     | “flex-start”, “center”, “flex-end”, “stretch”                                                  |
| **alignSelf**      | “flex-start”, “center”, “flex-end”, “stretch”                                                  |

#### Spacing

##### Margin

| Prop name        | Values accepted                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **margin**       | _Specifies margin to all sides. Accepts any [space atomic value](#space-and-size-values) value._ |
| **marginTop**    | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                 |
| **marginLeft**   | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                 |
| **marginBottom** | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                 |
| **marginRight**  | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                 |
| **marginY**      | _Top and bottom margin. Accepts any [space atomic value](../tokens/README.md#spacing)._          |
| **marginX**      | _Left and right margin. Accepts any [space atomic value](../tokens/README.md#spacing)._          |

##### Padding

| Prop name         | Values accepted                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| **padding**       | _Specifies padding for all sides. Accepts any [space atomic value](../tokens/README.md#spacing)._ |
| **paddingTop**    | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                  |
| **paddingLeft**   | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                  |
| **paddingBottom** | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                  |
| **paddingRight**  | _Accepts any [space atomic value](../tokens/README.md#spacing)._                                  |
| **paddingY**      | _Top and bottom padding. Accepts any [space atomic value](../tokens/README.md#spacing)._          |
| **paddingX**      | _Left and right padding. Accepts any [space atomic value](../tokens/README.md#spacing)._          |

#### Typography

| Prop name              | Values accepted                                                     |
| ---------------------- | ------------------------------------------------------------------- |
| **textAlign**          | “left”, “right”, “center”                                           |
| **textDecorationLine** | “none”, “underline”, “overline”, “line-through”, “blink”, “initial” |
| **textDecoration**     | Shorthand for textDecorationLine                                    |
| **whiteSpace**         | “normal”, “nowrap”, “pre”, “pre-wrap”, “pre-line”, “break-spaces”   |
| **wordBreak**          | “normal”, “break-all”, “break-word”, “keep-all”, “initial”          |

#### Sizing

| Prop name | Values accepted                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------- |
| height    | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._ |
| maxHeight | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._ |
| maxWidth  | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._ |
| minHeight | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._ |
| minWidth  | _Accepts any [size](#space-and-size-values) or [space](../tokens/README.md#spacing) atomic value._ |

## Component API reference

All components are polymorphic, which means they have an `as` prop that accepts a string HTML element name, like `"main"` or `"ul"` that specifies what element it will render. The `as` prop on most components defaults to `"div"` unless the component has a clear semantic purpose, in which case the default will be that semantic element. For example, `ButtonBase` and `Button` `as` props default to `"button"`, and `Link` defaults to `"a"`. Each component accepts all of the atomic props as well as any props native to the HTML element set on the `as` prop.

As this project is in constant iteration, prop interfaces are subject to change, so in lieu of a props table for each component we've linked directly to its source code of each component so you can reference the props interface directly.

| Name                                                | Visual example                                                                                                                                                                     | Description                                                                                                                                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Box](src/components/Box/Box.tsx)                   | ![](https://lh6.googleusercontent.com/1mzSaJxIZbTiXxVCVmOtqQT46hxBDKbAOjucJ64rQnKY_USzzLPMIOlg-ywX0NP7RXoHKURxMGAjor81kFLckREgUbUh0lxlKXShKVHTsBMrxGfvMHRR2pEh5AF4QCrNKCceKIrx=s0) | Use to create custom components. Can be anything from a custom layout container to a custom button to a decorative box, you decide. Gives you access to all atoms through props.                   |
| [Container](src/components/Container/Container.tsx) | ![](https://lh4.googleusercontent.com/D_KFJqoSp239E9KenIs07cj9UcN1IQcGhDzxJg38EY7JHXk-kh5xn3uvt6PsROobtAoDptk4n14OabuBQU4Ia5RviursV-SZwb2y-0tcoygfgHzCXVrlFkNhY3ndq1VBGpx0enx5=s0) | General content wrapper, likely a top level parent of several layout groups.                                                                                                                       |
| [Grid](src/components/Grid/Grid.tsx)                | ![](https://lh5.googleusercontent.com/PXfqXiiylmHCD93G5k97NFqbUyn8QJZ0J-kYno4iGu_V6mZZS4St8q9sGPWVpfPJVezxcwJz08iib5LEtXdbR38WeVfuIjN7HPPe4PM3nBp6rbjFCb-CxiVgBsWx7X_cDh9iHRpE=s0) | Groups content together in defined areas, columns, and or rows. Use for custom layouts of content containers as well as complex custom micro layouts within a content container.                   |
| [Flex](src/components/Flex/Flex.tsx)                | ![](https://lh3.googleusercontent.com/q6FBTc2e4ITXmrEl6YAH74IUdMZLIoxMcReUVdLwLUFJOBvitRaA8pgEbhIkr0eKG4WlzzkTSZEZtkQ6HVmJwF-db-Ug__ZYWx2ydjofTix7x9an20bE4ttcRW1VQE6jBU0-l2Y0=s0) | Groups content together in flexible columns and or rows, with or without wrapping. Use for simple custom layouts of content containers as well as simple micro layouts within a content container. |
| [Center](src/components/Center/Center.tsx)          | ![](https://lh5.googleusercontent.com/9DDf7QOIc0k7CJX_9XlOQHroOs_qjK4EUjQWO7SQ4Pp1Ayi9ugGy5zSflsBh-nQs8eRHIwGY65pIPFlE-nVu0zOKggkMRItn7JWD0qKQS8kognH3EMw7qDGYQDH2WBzSVQmadxH1=s0) | Groups content together in a center aligned and justified row                                                                                                                                      |
| [Inline](src/components/Inline/Inline.tsx)          | ![](https://lh5.googleusercontent.com/TehCOKYK4CQTEU5F6LwJZ6EF4XbooiJN3wQNfNmLhPzFk3PC0ZyQPVvHpo2x5j4ibpkhFm7vO2wlF78SqyCFeRK0djthOdRHPGZmV55n7nmjshTz6m4l2yhf2qXi17qPZT6kBEjo=s0) | Groups content together in a row                                                                                                                                                                   |
| [Stack](src/components/Stack/Stack.tsx)             | ![](https://lh5.googleusercontent.com/6w4rJRXwBNan8MO3oEB9Ers0td2c_EHOkwLjQk5hYuPYeEog-pYW7l4Y5Fp2EqLDrYOP_1_gBoyWfK5AIXuYzux7cx2YxA3HufRBJtSC1RaTnUjy9biPAH1B7g1olq6m2I8mNNBe=s0) | Groups content together in a column                                                                                                                                                                |
