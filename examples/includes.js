
/**
 * Module dependencies.
 */

var pug = require('../')
  , path = __dirname + '/includes.pug'
  , str = require('fs').readFileSync(path, 'utf8')

console.time("l")
let options = {
  filename: '/includes.pug',
  pretty: true,
  cache: true,
  loadFromStrArr:
    [
      { name: "includes/head.pug", content: "head\n  title My Site [[[ LOAD FROM STRING ARRAY ]]] \n  // including other pug works\n  include scripts.pug\n  // including .html, .css, etc works\n  include style.css\n" },
      { name: "/includes.pug", content: "\nhtml\n  include includes/head.pug\n  body\n    h1 My Site\n    p Welcome to my super lame site.\n    include includes/foot.pug\n" },
      { name: "includes/foot.pug", content: "#footer\n  p Copyright (c) foobar\n  each product in products\n    div=product" },
      { name: "includes/scripts.pug", content: "script(src=\'/javascripts/jquery.js\')\nscript(src=\'/javascripts/app.js\')\n" },
      { name: "includes/style.css", content: "<style>\n  body {\n    padding: 50px;\n  }\n</style>" }
    ],
  userData: { products: [1, 2, 4] }
}
console.log(pug.render(str, options, function (s, output) {
  console.log(output)
}))
console.timeEnd("l")