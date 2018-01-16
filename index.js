var csstree = require('css-tree')
var assert = require('assert')

module.exports = (src, done) => {
  assert.ok(typeof src === 'string' || Buffer.isBuffer(src) , 'css-top-import: src should be type string or buffer')
  assert.equal(typeof done, 'function', 'css-top-import: done should be type function')

  var ast = csstree.parse(src)
  var importstr = ``
  var astObj = csstree.toPlainObject(ast)

  astObj.children = astObj.children.filter(node => {
    if (node.type === 'Atrule' && node.name === 'import') {
      if (node.prelude.children[0].type === 'Url') {
        var url = node.prelude.children[0].value.value
        importstr += `@import url(${url});\n`
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  })

  ast = csstree.fromPlainObject(astObj)
  src = importstr + csstree.generate(ast)
  done(src)
}
