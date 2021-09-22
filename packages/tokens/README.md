# @polaris/tokens

[Principles](#principles) | [Token reference](#token-reference) | [Token API](#token-api)

Design tokens are design decisions in the form of data. Tokens are an agnostic way to store variables such as typography, color, and spacing so that they can be shared across platforms like iOS, Android, and web.

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

Space tokens are anchored around a base value. Each token’s number represents a percentage relative to the base value. For example, `space-100` is 100% of the base value, `size-400` is 400%, and so on.

[Source code](/src/spacing.ts)

base value = 4px | 0.25rem

| Atomic value | px value | rem value |
| ------------ | -------- | --------- |
| \-100        | \-4      | \-0.25    |
| \-150        | \-6      | \-0.375   |
| \-200        | \-8      | \-0.5     |
| \-250        | \-10     | \-0.625   |
| \-300        | \-12     | \-0.75    |
| \-350        | \-14     | \-0.875   |
| \-400        | \-16     | \-1       |
| \-500        | \-20     | \-1.25    |
| \-600        | \-24     | \-1.5     |
| \-700        | \-28     | \-1.75    |
| \-800        | \-32     | \-2       |
| \-900        | \-36     | \-2.25    |
| \-1000       | \-40     | \-2.5     |
| 0            | 0        | 0         |
| 50           | 2        | 0.125     |
| 100 (base)   | 4        | 0.25      |
| 150          | 6        | 0.375     |
| 200          | 8        | 0.5       |
| 250          | 10       | 0.625     |
| 300          | 12       | 0.75      |
| 350          | 14       | 0.875     |
| 400          | 16px     | 1rem      |
| 500          | 20       | 1.25      |
| 600          | 24       | 1.5       |
| 700          | 28       | 1.75      |
| 800          | 32       | 2rem      |
| 900          | 36       | 2.25      |
| 1000         | 40       | 2.5       |
| 1100         | 44       | 2.75      |
| 1200         | 48       | 3         |
| 1400         | 56       | 3.5       |
| 1600         | 64       | 4         |
| 2000         | 80       | 5         |
| 2400         | 96       | 6         |
| 2800         | 112      | 7         |
| 3200         | 128      | 8         |
| 3600         | 144      | 9         |
| 4000         | 160      | 10        |
| 4400         | 176      | 11        |
| 4800         | 192      | 12        |
| 5200         | 208      | 13        |
| 5600         | 224      | 14        |
| 6000         | 240      | 15        |
| 6400         | 256      | 16        |
| 7200         | 288      | 18        |
| 8000         | 320      | 20        |
| 9600         | 384      | 24        |

## Token API

Coming soon...
