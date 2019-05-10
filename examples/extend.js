
/**
 * Module dependencies.
 */

var pug = require('../')
  , path = __dirname + '/extend.pug'
  , str = require('fs').readFileSync(path, 'utf8')

var options = {
  filename: path,
  pretty: true,
  loadFromStrArr: [
    { name: "extend-layout.pug", content: "html\n  head\n    h1 My Site [[[LOAD FROM STRING ARRAY]]]- #{title}\n    block scripts\n      script(src=\'/jquery.js\')\n  body\n    block content\n    block foot\n      #footer\n        p some footer content" }
  ]
}
var fn = pug.compile(str, options);

var tobi = { name: 'tobi', age: 2 };
var loki = { name: 'loki', age: 1 };
var jane = { name: 'jane', age: 5 };

console.log(fn({
  title: 'pets'
  , pets: [tobi, loki, jane]
}));