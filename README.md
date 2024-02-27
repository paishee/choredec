# choredec
choredec is a JavaScript package that adds a new chore declaration type letting you create variables from literals
```js
const chore = require('choredec');

// normal declaration
chore `ex1 = "a"`;

// using literal to define the value
chore `ex2 = ${ "b" }`;

// using literal to define the name
chore `${ "ex3" } = "c"`;

// using literal to define both the name and value
chore `${ "ex4" } = ${ "d" }`;
```
