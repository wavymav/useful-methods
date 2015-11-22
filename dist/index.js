'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factorial = require('./lib/factorial');

Object.defineProperty(exports, 'factorial', {
  enumerable: true,
  get: function get() {
    return _factorial.factorial;
  }
});

var _findLong = require('./lib/findLong');

Object.defineProperty(exports, 'findLong', {
  enumerable: true,
  get: function get() {
    return _findLong.findLong;
  }
});

var _checkPalin = require('./lib/checkPalin');

Object.defineProperty(exports, 'checkPalin', {
  enumerable: true,
  get: function get() {
    return _checkPalin.checkPalin;
  }
});

var _reverseStr = require('./lib/reverseStr');

Object.defineProperty(exports, 'reverseStr', {
  enumerable: true,
  get: function get() {
    return _reverseStr.reverseStr;
  }
});