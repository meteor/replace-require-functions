'use strict'

var test = require('tape')
var replace = require('./')

test(function tests (t) {
  t.equal(replace('require("foo")', {foo: 'bar'}), 'bar("foo")')
  t.equal(replace('require("foo");require("bar")', {foo: 'bar', bar: 'baz'}), 'bar("foo");baz("bar")')
  t.equal(replace('require("foo")', {}), 'require("foo")')

  t.equal(replace('require("foo/bar")', {'foo/bar': 'baz'}), 'baz("foo/bar")')

  t.end()
})
