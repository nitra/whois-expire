const whoiser = require('whoiser')
const log = require('loglevel-colored-level-prefix')()

/**
 * Get domain expiration date
 *
 * @param {string} domain - Domain name
 * @return {Promise<Date>} domain expiration date
 *
 * @example
 *
 *     whoisExpire('nitra.ai')
 */
async function whoisExpire (domain) {
  const domainInfo = await whoiser.domain(domain)

  const firstData = domainInfo[Object.keys(domainInfo)[0]]
  const whooisDate = firstData['Registry Expiry Date'] || firstData['Expires'] || firstData['expires'] || firstData['paid-till']
  if (whooisDate) {
    log.debug(whooisDate)
    return new Date(Date.parse(whooisDate))
  }

  log.debug(domainInfo)
}
module.exports = whoisExpire
