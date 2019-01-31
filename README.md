# Web Dev Workshop

## Key Syntax reference
1. const vs var vs let

const : block scope, constant value in block
let   : block scope
var   : function scope


2. Arrow functions
```
let arrFunc1 = (arg1, arg2, arg3) => {

}

// OR
let arrFunc2 = arg1 => console.log('Some one line code instead of console.log');

// OR
let arrFunc2 = (arg1, arg2) => console.log('Some one line code instead of console.log');

```
3. Promises

```(javascript)
let somePromise = new Promise((resolve, reject) => {

  // if successful execution
  resolve(result);

  // else
  reject(err);

});

somePromise
.then((result) => {
  // todo next step after getting result
})
.catch((error) => {
  // handle error
});
;

```
And remember
# this meme comes here

4. require()
```
const http      = require('http'); // default Node module/ module inside node_modules folder
const myModule1 = require('path/to/file/relative/dir/myModule1.js'); 
const myModule2 = require('path/to/file/relative/dir/myModule2'); //No need to mention .js extension
const myModule3 = require('path/to/file/relative/dir/'); //No need to mention index.js for including index.js

```

