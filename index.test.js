const whoisExpire = require('./index')

test('Get expiration for nitra.ai', () => {
  expect(whoisExpire('nitra.ai')).toBe(3)
})
