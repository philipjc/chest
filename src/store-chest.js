(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.vault = factory();
  }
})(this, function() {

  'use strict';

  var chest;

  function privateGet() {
    chest = window.localStorage;
  }

  function privateGetTemp() {
    chest = window.sessionStorage;
  }

  function privateSet(key, item) {
    chest.setItem(key, item);
  }

  function privateDelete(key) {
    chest.removeItem(key);
  }

  function showList() {
    if (chest === 'undefined') {
      console.log('No currnt items in chest');
    }

    for (var item in chest) {
      console.log(chest[item]);
    }
  }

  // API Interface to Private
  function getLocalChest() {
    privateGet();
  }

  function getSessionChest() {
    privateGetTemp();
  }

  function setChest(key, item) {
    privateSet(key, item);
  }

  function deleteChest(key) {
    privateDelete(key);
  }

  // API
  return {
    get: getLocalChest,
    getTemp: getSessionChest,
    set: setChest,
    delete: deleteChest,
    reveal: showList
  };

});
