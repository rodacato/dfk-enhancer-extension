import {
  fetchHeroTavernStats,
  fetchHero,
} from '../../lib/services/dfk-enhancer-api'

// console.log('auction', contracts.auction)

// contracts.auction.on(
//   'AuctionCreated',
//   (auctionId, address, tokenId, startingPrice) => {
//     contracts.hero.getHero(tokenId).then((response) => {
//       console.log(
//         'auction',
//         auctionId,
//         tokenId,
//         startingPrice.toString(),
//         response
//       )

//       chrome.notifications.create(auctionId.toString(), {
//         type: 'basic',
//         iconUrl: './assets/icon-health.png',
//         title: 'hero sale',
//         message: 'notification message',
//         priority: 2,
//       })
//     })
//   }
// )

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender)

  if (request.command === 'getHeroDFKTavernStats') {
    fetchHeroTavernStats(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  if (request.command === 'getHero') {
    fetchHero(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  return true
})
