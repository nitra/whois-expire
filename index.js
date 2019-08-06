const whoiser = require('whoiser');

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
async function whoisExpire(domain) {
        const domainInfo = await whoiser.domain(domain)
        const firstData = domainInfo[Object.keys(domainInfo)[0]]
        const whooisDate = firstData['Registry Expiry Date'] || firstData['Expires'] || firstData['expires']|| firstData['paid-till'] 
        const result = new Date(Date.parse(whooisDate))

  return result
}
module.exports = whoisExpire
