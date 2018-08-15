"use strict";

var promise = new Promise(function (resolve, reject) {
  var FLAG = 5;

  if (FLAG === 5) {
    setTimeout(resolve, 4000, 'Tudo pronto');
  } else {
    reject(Error('Algo deu errado!'));
  }
});
promise.then(function (response) {
  return console.log(response);
}).catch(function (reason) {
  return console.log(reason);
});
