import { DFK_ENHANCER_SERVICE_URL } from '../../constants'
import { normalizeTavernHero, normalizeTavernHeroStatsGrowth } from './schema'

const fetchHeroTavernStats = async function (id) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/dfk-tavern/heroes/${id}/stats`
  const response = await fetch(url)
  const data = await response.json()

  return normalizeTavernHero(data.profRanking[0])
}

const fetchHeroTavernStatsGrowth = async function (id) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/dfk-tavern/heroes/${id}/stats-growth`
  const response = await fetch(url)
  const data = await response.json()

  return normalizeTavernHeroStatsGrowth(data)
}

export default {
  fetchHeroTavernStats,
  fetchHeroTavernStatsGrowth,
}
