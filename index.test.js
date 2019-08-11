const whoisExpire = require('./index')

/* global test, expect */
test('Get expiration for nitra.ai', async () => {
  expect(await whoisExpire('nitra.ai')).toStrictEqual(new Date('2020-02-27T07:51:18.881Z'))
})

test('Get expiration for adv24.lt', async () => {
  expect(await whoisExpire('adv24.lt')).toStrictEqual(new Date('2019-09-17T00:00:00.000Z'))
})
