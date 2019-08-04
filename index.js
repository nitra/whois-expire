const whoiser = require('whoiser');

/**
 * Get domain expiration date
 *
 * @param {string} domain - Domain name
 * @return {string} domain expiration date
 *
 * @example
 *
 *     whoisExpire('nitra.ai')
 */
async function whoisExpire(domain) {
        // WHOIS info with auto-discovering for WHOIS server
        let domainInfo = await whoiser.domain('nitra.ai')
 
        // OR with options for whois server and how many servers to check
        // let domainInfo2 = await whoiser.domain('blog.google', {host: 'whois.nic.google', follow: 3})
     
        console.log(domainInfo)

  return domain
}
module.exports = whoisExpire
