(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.storeChest = factory();
  }
})(this, function() {

  'use strict';

  var storeChest = window.localStorage;

  function setChestItem(key, item) {
    if (key && item) {
      storeChest.setItem(key, item);
    }
  };

  function deleteStoreChestItem(key) {
    if (storeChest[key]) {
      storeChest.removeItem(key);
    }
  };

  function showStorageList() {
    if (storeChest === 'undefined') {
      console.log('No currnt items in chest');
    };

    for (var item in storeChest) {
      console.log(storeChest[item]);
    }
  };

  function clearStoreData() {
    storeChest.clear();
  };


  // API
  return {
    storeItem: setChestItem,
    deleteItem: deleteStoreChestItem,
    listItems: showStorageList,
    dropChest: clearStoreData
  };

});
