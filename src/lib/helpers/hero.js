import {
  HeroStatsGrowth,
  HeroProfessionStats,

  // For calculate OPER Score
  HeroProfessionChances,
  HeroRarityProfessionMultiplier,
  STAT_ABBR_MAP,
  BASE_CLASS_STATS_SUM,
} from '../constants'
import { compact, values, reduce, toPairs, includes } from 'lodash'

export function calculateOPERScore (hero) {
  return {
    mining: calculateOPERScorePercentage(hero, 'mining'),
    fishing: calculateOPERScorePercentage(hero, 'fishing'),
    gardening: calculateOPERScorePercentage(hero, 'gardening'),
    foraging: calculateOPERScorePercentage(hero, 'foraging'),
  }
}

export function hasEnhancements (hero) {
  let enhanced = false
  const enhancements = toPairs(STAT_ABBR_MAP).map((key) => {
    const { primaryValue, primaryBaseValue } = extractStatAffinity(hero, key[0])

    return primaryValue - primaryBaseValue
  })
  const enhancementsSum = reduce(enhancements, (sum, n) => {
    return sum + n
  })

  if (enhancementsSum > 2) {
    enhanced = true
  }

  if (hero.level === 1 && sumStats(hero) > BASE_CLASS_STATS_SUM[hero.rarity]) {
    enhanced = true
  }

  return enhanced
}

export function hasGoodOPERScore (hero) {
  const oper = calculateOPERScorePercentage(hero, hero.profession)

  return oper >= 60
}

export function hasBlueStatAffinity (profession, blueGene) {
  const statsOfInterest = HeroProfessionStats[profession]

  return includes(statsOfInterest, blueGene)
}

export function hasGoodProfessionAndClassAffinity (hero) {
  const heroClassProfessionAffinity = getHeroClassProfessionAffinity(hero)
  const max = heroClassProfessionAffinity.mainClass.max
  const current = heroClassProfessionAffinity.mainClass.value

  return current >= max * 0.8
}

export function sumStats (hero) {
  const stats = values(hero.stats)
  return reduce(stats, (sum, n) => {
    return sum + n
  })
}

export function extractStatAffinity (hero, stat) {
  const primaryBaseValue = getHeroPrimaryBaseStatsGrowth(hero.mainClass)[stat]
  const secondaryBaseValue = getHeroSecondaryBaseStatsGrowth(hero.subClass)[
    stat
  ]

  const primaryValue = hero.statsGrowth.primary[stat]
  const secondaryValue = hero.statsGrowth.secondary[stat]
  const boostedStat = hero.blueGene.toLowerCase() === stat.toLowerCase()

  return {
    primaryValue,
    primaryBaseValue,
    secondaryValue,
    secondaryBaseValue,
    boostedStat,
  }
}

export function getHeroPrimaryBaseStatsGrowth (heroClass) {
  const statsGrowth = HeroStatsGrowth[heroClass]

  return {
    strength: statsGrowth.strength.primary,
    dexterity: statsGrowth.dexterity.primary,
    agility: statsGrowth.agility.primary,
    vitality: statsGrowth.vitality.primary,
    endurance: statsGrowth.endurance.primary,
    intelligence: statsGrowth.intelligence.primary,
    wisdom: statsGrowth.wisdom.primary,
    luck: statsGrowth.luck.primary,
  }
}

export function getHeroSecondaryBaseStatsGrowth (heroClass) {
  const statsGrowth = HeroStatsGrowth[heroClass]

  return {
    strength: statsGrowth.strength.secondary,
    dexterity: statsGrowth.dexterity.secondary,
    agility: statsGrowth.agility.secondary,
    vitality: statsGrowth.vitality.secondary,
    endurance: statsGrowth.endurance.secondary,
    intelligence: statsGrowth.intelligence.secondary,
    wisdom: statsGrowth.wisdom.secondary,
    luck: statsGrowth.luck.secondary,
  }
}

export function getHeroClassProfessionAffinity (hero) {
  const statsOfInterest = HeroProfessionStats[hero.profession]
  const classGrowthStats = HeroStatsGrowth[hero.mainClass]
  const subclassGrowthStats = HeroStatsGrowth[hero.subClass]
  const maxChances = HeroProfessionChances[hero.profession]

  return {
    mainClass: {
      value:
        classGrowthStats[statsOfInterest[0]].primary +
        classGrowthStats[statsOfInterest[1]].primary,
      max: maxChances.mainClass.max,
      min: maxChances.mainClass.min,
    },
    subClass: {
      value:
        subclassGrowthStats[statsOfInterest[0]].secondary +
        subclassGrowthStats[statsOfInterest[1]].secondary,
      max: maxChances.subClass.max,
      min: maxChances.subClass.min,
    },
  }
}

// Extracted from https://www.youtube.com/watch?v=vXRK0vICsV4&ab_channel=wick
function calculateOPERScorePercentage (hero, profession) {
  const mainClassStatsTotal = sumStatsByClass(
    profession,
    hero.mainClass,
    'primary'
  )
  const subClassStatsTotal = sumStatsByClass(
    profession,
    hero.subClass,
    'secondary'
  )
  const rarityMultiplier =
    HeroRarityProfessionMultiplier[profession][hero.rarity]

  // if BLUE STAT is on a desired profession stat
  const baseBlueStatBoost = hasBlueStatAffinity(profession, hero.blueGene)
    ? 6
    : 0

  // if AFFINITY is on desired affinity
  const baseAffinityBoost = profession == hero.profession ? 28.57 : 0

  const statsTotal =
    mainClassStatsTotal +
    subClassStatsTotal -
    professionMinimumStats(profession) +
    baseBlueStatBoost

  const result = rarityMultiplier * statsTotal + baseAffinityBoost

  return result
}

function sumStatsByClass (profession, heroClass, statsType) {
  const statsOfInterest = HeroProfessionStats[profession]
  const classStats = HeroStatsGrowth[heroClass]

  return (
    classStats[statsOfInterest[0]][statsType] +
    classStats[statsOfInterest[1]][statsType]
  )
}

function professionMinimumStats (profession) {
  const classStats = HeroProfessionChances[profession]

  return classStats.mainClass.min + classStats.subClass.min
}
