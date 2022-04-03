import {
  extractSkillGenes,
  extractHeroClass,
  extractHeroRarity,
} from '../../helpers/hero-genes'

const STAT_ABBR_TO_NAME_MAP = {
  STR: 'strength',
  DEX: 'dexterity',
  AGI: 'agility',
  VIT: 'vitality',
  END: 'endurance',
  INT: 'intelligence',
  WIS: 'wisdom',
  LCK: 'luck',
}

export const normalizeHero = function (data) {
  return {
    id: data.id,
    mainClass: extractHeroClass('class', data.mainclass),
    subClass: extractHeroClass('subClass', data.subclass),
    profession: data.profession.toLowerCase(),
    rarity: extractHeroRarity(data.rarity),
    level: data.level,
    greenGene: STAT_ABBR_TO_NAME_MAP[data.statboost1],
    blueGene: STAT_ABBR_TO_NAME_MAP[data.statboost2],
    statsGenes: extractSkillGenes(data.statgenes),
    visualgenes: data.visualgenes,
    professions_stats: {
      fishing: data.fishing,
      foraging: data.foraging,
      gardening: data.gardening,
      mining: data.mining,
    },
    stats: {
      dexterity: data.dexterity,
      endurance: data.endurance,
      intelligence: data.intelligence,
      vitality: data.vitality,
      wisdom: data.wisdom,
      strength: data.strength,
      agility: data.agility,
      luck: data.luck,
    },
  }
}

export const normalizeTavernHero = function (data) {
  const score = data.scoreV2_0 || {}

  return {
    id: data.id,
    heroesCount: score.total_hero,
    profession: {
      current: data.profession,
      best: score.bestProf,
      score: score.profRankScore,
      percentile: score.bestProfPercentile,
      rank: score.profession_rank_leaderboard,
    },
    summoning: {
      score: score.summoningScore,
      rank: score.summoning_rank_leaderboard,
      percentile: score.summoningRank,
    },
    pvp: {
      score: score.pvp_score,
      rank: score.pvp_rank_leaderboard,
      percentile: score.pvp_ranking,
    },
  }
}

export const normalizeTavernHeroStatsGrowth = function (data) {
  return {
    initStats: data.initStats,
    currentStats: data.currentStats,
  }
}
