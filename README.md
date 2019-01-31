# Web Dev Workshop

## Reference syntax
1. Promises

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