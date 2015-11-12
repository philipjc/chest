var expect = require('chai').expect;

var storeChest = require('./storeChest');
var MockBrowser = require('mock-browser').mocks.MockBrowser

console.log(storeChest.storeItem);

describe('Store Chest Tests', function () {

  beforeEach(function () {
    storeChest.storeItem('testing', 'isgreat');
  });

  it('Should set a chest item', function() {
  });
});
