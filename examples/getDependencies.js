
/**
 * get pug file dependencies includes or extends
 */

var pug = require('../')
    , path = __dirname + '/includes.pug'
    , str = require('fs').readFileSync(path, 'utf8')

console.time("l")
let options = {
    filename: path,
    pretty: true
}
var dependencies = pug.getDependencies(str, options);
console.log(dependencies)
console.timeEnd("l")