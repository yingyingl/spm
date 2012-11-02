define("relativeModule/0.9.1/core/a-debug", ["./b-debug"], function(require, exports) {
  var b = require('./b-debug');
  exports.say = function() {
    b.say();
  };
});

define("relativeModule/0.9.1/core/b-debug", [], function(require, exports){
  exports.say = function() {
    console.log('say!'); 
  };
});

define("relativeModule/0.9.1/lib/c-debug", ["../core/a-debug", "../core/b-debug"], function(require, exports) {
  var a = require('../core/a-debug');
  exports.hi = function() {
    a.say();
  };
});
