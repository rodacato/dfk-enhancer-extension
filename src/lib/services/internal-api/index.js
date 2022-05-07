const getHero = function (heroId, network) {
  const promise = new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { command: 'getHero', payload: { heroId, network } },
      (response) => {
        resolve(response)
      }
    )
  })

  return promise
}

const getHeroDFKTavernStats = function (heroId, network) {
  const promise = new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { command: 'getHeroDFKTavernStats', payload: { heroId, network } },
      (response) => {
        resolve(response)
      }
    )
  })

  return promise
}

export default {
  getHero,
  getHeroDFKTavernStats,
}
