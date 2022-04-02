import { DFK_ENHANCER_SERVICE_URL } from '../../constants'
import {
  normalizeHero,
  normalizeTavernHero,
  normalizeTavernHeroStatsGrowth,
} from './schema'

const fetchHero = async function (id) {
  const url = `${DFK_ENHANCER_SERVICE_URL}/dfk-tavern/heroes/${id}`
  const response = await fetch(url)
  const data = await response.json()

  return normalizeHero(data[0])
}

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
  fetchHero,
  fetchHeroTavernStats,
  fetchHeroTavernStatsGrowth,
}
