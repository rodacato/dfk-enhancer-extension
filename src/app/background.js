import api from '../lib/api/dfk-enhancer-service'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender)

  if (request.command === 'getHeroDFKTavernStats') {
    api.fetchHeroTavernStats(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  if (request.command === 'getHero') {
    api.fetchHero(request.payload.heroId).then((heroData) => {
      sendResponse(heroData)
    })
  }

  return true
})
