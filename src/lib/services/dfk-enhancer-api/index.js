import { DFK_ENHANCER_SERVICE_URL } from '../../constants'

export const fetchHeroTavernStats = async function (id, network) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/api/heroes/${id}/tavern_stats?network=${network}`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const fetchHero = async function (id, network) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/api/heroes/${id}?network=${network}`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const fetchItem = async function (address, network) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/api/items/${address}?network=${network}`
  const response = await fetch(url)
  const data = await response.json()
  debugger
  return data
}
