const whoisExpire = require('./index')

test('Get expiration for nitra.ai', async () => {
  expect(await whoisExpire('nitra.ai')).toBe(3)
})
