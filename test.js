var test = require('tape')
var cssTopImport = require('./')
var src = `
pre {
  position: relative;
  line-height: 0 !important;
  border: 1px solid;
  border-left: 6px solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

@import url('http://fonts.googleapis.com/css?family=Lato');
`

var expect = `@import url('http://fonts.googleapis.com/css?family=Lato');
pre{position:relative;line-height:0!important;border:1px solid;border-left:6px solid;border-top-right-radius:4px;border-bottom-right-radius:4px}`

test('main', t => {
  t.plan(1)

  cssTopImport(src, actual => {
    t.equal(actual, expect)
  })
})
