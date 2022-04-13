import api from '../../lib/services/dfk-enhancer-api'
import serendale, { contracts } from '../../lib/services/serendale-chain'
import decoder from 'abi-decoder'

console.log('auction', contracts.auction)

contracts.auction.on(
  'AuctionCreated',
  (auctionId, address, tokenId, startingPrice) => {
    contracts.hero.getHero(tokenId).then((response) => {
      console.log(
        'auction',
        auctionId,
        tokenId,
        startingPrice.toString(),
        response
      )

      chrome.notifications.create(auctionId.toString(), {
        type: 'basic',
        iconUrl: './assets/icon-health.png',
        title: 'hero sale',
        message: 'notification message',
        priority: 2,
      })
    })
  }
)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender)

  if (request.command === 'getHeroDFKTavernStats') {
    api.fetchHeroTavernStats(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  if (request.command === 'getHeroDFKTavernStatsGrowth') {
    api.fetchHeroTavernStatsGrowth(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  if (request.command === 'getHero') {
    serendale.getHero(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  return true
})
