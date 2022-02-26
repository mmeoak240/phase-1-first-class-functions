
function receivesAFunction(callBack) {
return callBack();
}

function spy() {
  return 'Pink Panther'
}

receivesAFunction(spy);

function returnsANamedFunction() {
return function named() {
  return 'Success'
  }
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
  return function () {
    return 'yay!'
    }
}