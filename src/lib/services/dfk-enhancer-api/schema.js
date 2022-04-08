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
