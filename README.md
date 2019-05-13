<a href="https://pugjs.org"><img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="200" align="right"></a>
# Pug

Full documentation is at [pugjs.org](https://pugjs.org/)
## load src of template that included or extended from cache
example 

[examples/includes.js](https://github.com/Tseian/pug/blob/master/packages/pug/examples/includes.js) 

[examples/includes.pug](https://github.com/Tseian/pug/blob/master/packages/pug/examples/includes.pug)
```js

/**
 * Module dependencies.
 */

var pug = require('../')
  , path = __dirname + '/includes.pug'
  , str = require('fs').readFileSync(path, 'utf8')

console.time("l")
let options = {
  filename: "includes.pug",
  pretty: true,
  loadFromStrArr:
    [
      { name: "head.pug", content: "head\n  title My Site [[[ LOAD FROM STRING ARRAY ]]] \n  // including other pug works\n  include scripts.pug\n  // including .html, .css, etc works\n  include style.css\n" },
      { name: "includes.pug", content: "\nhtml\n  include includes/head.pug\n  body\n    h1 My Site\n    p Welcome to my super lame site.\n    include includes/foot.pug\n" },
      { name: "foot.pug", content: "#footer\n  p Copyright (c) foobar\n  each product in products\n    div=product" },
      { name: "scripts.pug", content: "script(src=\'/javascripts/jquery.js\')\nscript(src=\'/javascripts/app.js\')\n" },
      { name: "style.css", content: "<style>\n  body {\n    padding: 50px;\n  }\n</style>" }
    ],
  userData: { products: [1, 2, 4] }
}
var fn = pug.compile(str, options);
console.log(fn({ products: [1, 2, 4] }));
console.timeEnd("l")
/* <html>
  <head>
    <title>My Site [[[ LOAD FROM STRING ARRAY ]]] </title>
    <!-- including other pug works-->
    <script src="/javascripts/jquery.js"></script>
    <script src="/javascripts/app.js"></script>
    <!-- including .html, .css, etc works--><style>
  body {
    padding: 50px;
  }
</style>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my super lame site.</p>
    <div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
*/
```


## License

MIT
