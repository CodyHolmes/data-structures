# Javascript Data Structures

A small library of data structures for javascript

## Installation

Using npm:

```shell
$ npm i @codyholmes/data-structures
```

Note: add --save if you are using npm < 5.0.0

In Node.js:

```js
const ds = require('@codyholmes/data-structures');

const request = async () => {
  const [err, res] = await tc(fetch('https://randomuser.me/api/'));

  if (err) {
    // handle error
  }

  const json = await res.json();
  console.log(json);
};

request();
```
