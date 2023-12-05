
# layouts

This library helps us to create simple components like Stack , Grid and mosaic grid.


## Installation

Install the package in your directory with

Npm
```bash
  npm install @techanzo-pvt-ltd/layouts
```
Yarn
```bash
  yarn add @techanzo-pvt-ltd/layouts
```    
## Usage

```javascript
import {Stack} from '@techanzo-pvt-ltd/layouts'

function App() {
  return (
      <Stack >
      {children}
      </Stack>
      )
}
```
You can use `Stack` for flex countainer properties.

```javascript
import {Stack} from '@techanzo-pvt-ltd/layouts'

function App() {
  return (
      <Stack >
        <Stack.Item>Test-1</Stack.Item>
        <Stack.Item>Test-2</Stack.Item>
        <Stack.Item>Test-3</Stack.Item>
      </Stack>
      )
}
```
You can use `Stack.Item` for flex clild properties or you can use your `components` or `div` etc...




## API Reference

`<Stack />`

Create flex container

`<Stack.Item />`

Create flex child container



## Properties from Stack

- gap
- direction
- flex-wrap
- justify-content
- justify-items
- align-items
- align-content

## Properties from Stack.Item

- order
- flex
- flex-grow
- flex-shrink
- flex-basis
- align-self
- justify-self


## License

[MIT](https://choosealicense.com/licenses/mit/)

