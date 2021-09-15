# @polaris/tokens

[Principles](#principles) | [Token reference](#token-reference) | [Token API](#token-api)

Design tokens are design decisions in the form of data. Tokens are an agnostic way to store variables such as typography, color, and spacing so that they can be shared across platforms like iOS, Android, and web.d

## Principles

### Scale design decisions

We believe that by documenting our design decisions, we can up-level design quality and encourage cohesion over sameness. To do this, every design decision needs guidance on what problems they are solving and when to apply them.

### Platform agnostic

We believe that people should have a high quality experience that scales across platforms. People work across many different products and often need to context switch. To ensure a cohesive quality experience across devices, consider scale, legibility of type, and UI interactions.

### Cohesive

We believe in creating a sense of cohesion through a shared set of foundational values. Audiences and their unique contexts impact the decisions we make. We recognize that certain audiences have different needs. We need to provide our users with a flexible foundation that enables them to solve audience specific problems while keeping a sense of cohesion across Shopify experiences.

## Token reference

### Breakpoints

[Source code](/src/breakpoints.ts)

| Atomic value | px value |
| ------------ | -------- |
| xs           | 0        |
| sm           | 600px    |
| md           | 960px    |
| lg           | 1280px   |
| xl           | 1920px   |

### Spacing

[Source code](/src/spacing.ts)

base value = 4px | 1rem = 16px

Formula
token x base value = px value
token / base value = rem value

| Atomic value | px value | rem value |
| ------------ | -------- | --------- |
| \-1          | \-4      | \-0.25    |
| \-1.5        | \-6      | \-0.375   |
| \-2          | \-8      | \-0.5     |
| \-2.5        | \-10     | \-0.625   |
| \-3          | \-12     | \-0.75    |
| \-3.5        | \-14     | \-0.875   |
| \-4          | \-16     | \-1       |
| \-5          | \-20     | \-1.25    |
| \-6          | \-24     | \-1.5     |
| \-7          | \-28     | \-1.75    |
| \-8          | \-32     | \-2       |
| \-9          | \-36     | \-2.25    |
| \-10         | \-40     | \-2.5     |
| 0            | 0        | 0         |
| 0.5          | 2        | 0.125     |
| 1            | 4        | 0.25      |
| 1.5          | 6        | 0.375     |
| 2            | 8        | 0.5       |
| 2.5          | 10       | 0.625     |
| 3            | 12       | 0.75      |
| 3.5          | 14       | 0.875     |
| 4 (base)     | 16px     | 1rem      |
| 5            | 20       | 1.25      |
| 6            | 24       | 1.5       |
| 7            | 28       | 1.75      |
| 8            | 32       | 2rem      |
| 9            | 36       | 2.25      |
| 10           | 40       | 2.5       |
| 11           | 44       | 2.75      |
| 12           | 48       | 3         |
| 14           | 56       | 3.5       |
| 16           | 64       | 4         |
| 20           | 80       | 5         |
| 24           | 96       | 6         |
| 28           | 112      | 7         |
| 32           | 128      | 8         |
| 36           | 144      | 9         |
| 40           | 160      | 10        |
| 44           | 176      | 11        |
| 48           | 192      | 12        |
| 52           | 208      | 13        |
| 56           | 224      | 14        |
| 60           | 240      | 15        |
| 64           | 256      | 16        |
| 72           | 288      | 18        |
| 80           | 320      | 20        |
| 96           | 384      | 24        |

## Token API

Coming soon...
