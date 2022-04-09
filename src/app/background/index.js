import api from '../../lib/services/dfk-enhancer-api'
import serendale from '../../lib/services/serendale-chain'

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
