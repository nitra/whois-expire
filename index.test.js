const whoisExpire = require('./index')

test('Get expiration for nitra.ai', async () => {
  expect(await whoisExpire('nitra.ai')).toStrictEqual(new Date('2020-02-27T07:51:18.881Z'))
})
