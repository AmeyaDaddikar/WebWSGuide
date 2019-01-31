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
And remember about _this_
![This meme, credit: Nidhee](some/link/here "The misery of this")

4. require()
```
const http      = require('http'); // default Node module/ module inside node_modules folder
const myModule1 = require('path/to/file/relative/dir/myModule1.js'); 
const myModule2 = require('path/to/file/relative/dir/myModule2'); //No need to mention .js extension
const myModule3 = require('path/to/file/relative/dir/'); //No need to mention index.js for including index.js

```

## Restful API architecture
![Flowchart](some/link/here "Overall data flow")
1. Request is received by the server by the server.serve method (http.createServer())
2. _getRequestParams obtains the whole request object in the required format
3. We choose a handler from our existing set of handlers as per the url and method
4. We call the handler and let it handle the request
5. Handler makes additional DB/API requests if needed
6. Once the handler handles the request, it callbacks with an appropriate response object and status
7. _generateResponse() just writes the result object and status to HTTP response

#### Note:
1. _getRequestParams recieves payload in pieces, so that takes place over a period asynchronously. Thus _getRequestParams returns a Promise
2. the handler may make DB/API requests that happen in the background asynchronously. Thus every handler returns a Promise of handling the request

## HTTP Request parameters:
1. Method
  There are lot of HTTP methods
  a) GET : get data/resource
  b) POST: create new data/resource
  c) PUT : update existing data/resource
  d) DELETE: delete existing data/resource
  e) PATCH: partial update of data

##### NOTE: It is possible to interchangebly use these methods, and a lot of APIs actually end up doing that, these are just recommended standards

2. urlpath
```
  www.example.com/urlpath/for/some/task
  urlpath: /urlpath/for/some/task
```
  syntax wise it looks like linux's path syntax

##### NOTE: / is your root directory, like a starting point for your server
  
3. QueryParams
```
  www.example.com/urlpath/for/some/task?param1=val1&param2=val2
  queryParams: {param1: val1, param2 : val2}
```
  Additional parameters you can add to the overall url, used a lot in GET.
  Multiple params are separated by a '&'
  Sometimes the | is also used to pass a list of values like 
  for
  ```
  param1 : [val1,val2,val3]
  ?param1=val1|val2|val3
  ```
  However I found this syntax isn't widely used

## Recommended project structure

```
projectDir/
  .git
  .gitignore

  index.js
  lib/
    config/
      index.js  // Main config setup
      cert.pem  // http
      key.pem
    handlers/
      index.js // Main handler
    server.js
```
