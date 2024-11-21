const { strictEqual } = require('assert')

const join_path = (base, appender) => {
  if (appender.startsWith('/')) // absolute path
    return appender

  let back_num = 0
  while(appender.startsWith('../')) {
    back_num ++
    appender = appender.slice(3)
  }

  let bases = base.split('/')
  if (back_num)
    bases = bases.slice(0, -back_num)
  return [...bases, ...appender.split('/')].join('/')
}

strictEqual(join_path('foo/bar', 'baz'), 'foo/bar/baz')
strictEqual(join_path('foo', 'bar'), 'foo/bar')

strictEqual(join_path('foo/bar', '/baz'), '/baz')
strictEqual(join_path('some/path', '/absolute/path'), '/absolute/path')

strictEqual(join_path('foo/bar/baz', '../qux'), 'foo/bar/qux')
strictEqual(join_path('foo/bar/baz', '../../qux'), 'foo/qux')
strictEqual(join_path('a/b/c/d', '../../../x'), 'a/x')

strictEqual(join_path('foo/bar', '../baz/qux'), 'foo/baz/qux')
strictEqual(join_path('a/b/c', '../../x/y/z'), 'a/x/y/z')
