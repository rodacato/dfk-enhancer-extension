import { DFK_ENHANCER_SERVICE_URL } from '../../constants'

export const fetchHeroTavernStats = async function (id) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/api/heroes/${id}/tavern_stats`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const fetchHero = async function (id) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/api/heroes/${id}`
  const response = await fetch(url)
  const data = await response.json()

  return data
}
