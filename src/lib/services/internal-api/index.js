const getHero = function (heroId) {
  const promise = new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { command: 'getHero', payload: { heroId } },
      (response) => {
        resolve(response)
      }
    )
  })

  return promise
}

const getHeroDFKTavernStats = function (heroId) {
  const promise = new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { command: 'getHeroDFKTavernStats', payload: { heroId } },
      (response) => {
        resolve(response)
      }
    )
  })

  return promise
}

const getHeroDFKTavernStatsGrowth = function (heroId) {
  const promise = new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { command: 'getHeroDFKTavernStatsGrowth', payload: { heroId } },
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
  getHeroDFKTavernStatsGrowth,
}
