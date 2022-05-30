import React, { useState, useEffect } from 'react'
import Loading from '../utils/loading'
import ProfessionScore from './scores/profession-score'
import PvPScore from './scores/pvp-score'
import SummoningScore from './scores/summoning-score'
import HeroTitle from './hero-title'
import internalApi from '../../lib/services/internal-api'
import { ExternalLinkIcon, ReloadIcon } from '../utils/icons/solid'

import './style.css'

function TavernScores (props) {
  const { hero, tavernScore } = props
  const { heroesCount, scores, stats } = tavernScore

  return (
    <div className='row'>
      <div className='column'>
        <ProfessionScore
          hero={hero}
          score={scores.profession}
          heroesCount={heroesCount}
        />
      </div>
      <div className='column'>
        <PvPScore
          hero={hero}
          score={scores.pvp}
          heroesCount={heroesCount}
          tavernStats={stats}
        />
      </div>
      <div className='column'>
        <SummoningScore
          hero={hero}
          score={scores.summoning}
          heroesCount={heroesCount}
        />
      </div>
    </div>
  )
}

const tavernScoreInitialState = {
  heroesCount: 0,
  scores: {
    profession: {},
    summoning: {},
    pvp: {},
  },
  stats: {
    initial: undefined,
    current: undefined,
  },
}

function HeroBar (props) {
  const { heroBase, section, network } = props
  const [hero, setHero] = useState({ ...heroBase })
  const [tavernScore, setTavernScore] = useState(tavernScoreInitialState)
  const [loading, setLoading] = useState({
    inProgress: true,
    loadingAttempts: 0,
  })

  const loadHero = function () {
    if (loading.inProgress === false || loading.loadingAttempts >= 5) {
      return
    }

    setLoading({ ...loading, loadingAttempts: loading.loadingAttempts + 1 })

    internalApi.getHero(hero.id, network).then((response) => {
      setHero({ ...response, id: heroBase.id })
      setLoading({ ...loading, inProgress: false })
    })
    internalApi.getHeroDFKTavernStats(hero.id, network).then((response) => {
      setTavernScore(response)
    })
  }

  const resetHero = function () {
    setHero({ ...heroBase })
    setLoading({ inProgress: true, loadingAttempts: 0 })
    setTavernScore(tavernScoreInitialState)
  }

  const reloadHero = function () {
    resetHero()
    loadHero()

    return false
  }

  useEffect(() => {
    loadHero()
  }, [])

  return (
    <div className='wrapper'>
      <div className='hero-title row'>
        <HeroTitle hero={hero} tavernScore={tavernScore} />
      </div>
      <hr className='separator' />
      <div className='hero-scores'>
        {loading.inProgress && <Loading />}
        {!loading.inProgress && (
          <TavernScores hero={hero} tavernScore={tavernScore} />
        )}
      </div>

      <div className='dfk-tavern-link'>
        <div className='column'>
          <a
            title='Open hero on DFK Tavern'
            href={`https://dfktavern.com/gokmachar-ranking?heroid=${hero.id}`}
            target='_blank'
          >
            <ExternalLinkIcon />
          </a>
          <span title='Reload hero data' onClick={reloadHero}>
            <ReloadIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroBar
