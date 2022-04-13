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
  const { tavernStats, hero } = props
  const { heroesCount, profession, pvp, summoning } = props.tavernScore

  return (
    <div className='row'>
      <div className='column'>
        <ProfessionScore
          hero={hero}
          score={profession || {}}
          heroesCount={heroesCount}
        />
      </div>
      <div className='column'>
        <PvPScore
          hero={hero}
          score={pvp || {}}
          heroesCount={heroesCount}
          tavernStats={tavernStats}
        />
      </div>
      <div className='column'>
        <SummoningScore
          hero={hero}
          score={summoning || {}}
          heroesCount={heroesCount}
        />
      </div>
    </div>
  )
}

function HeroBar (props) {
  const { heroId } = props
  const [hero, setHero] = useState(null)
  const [tavernScore, setTavernScore] = useState({})
  const [tavernStats, setTavernStats] = useState({})

  const loadHero = function () {
    internalApi.getHero(heroId).then((response) => {
      setHero(response)
    })

    internalApi.getHeroDFKTavernStats(heroId).then((response) => {
      setTavernScore(response)
    })

    internalApi.getHeroDFKTavernStatsGrowth(heroId).then((response) => {
      setTavernStats(response)
    })
  }

  const resetHero = function () {
    setHero(null)
    setTavernScore({})
    setTavernStats({})
  }

  const reloadHero = function () {
    resetHero()
    loadHero()

    return false
  }

  useEffect(() => {
    loadHero()
  }, [])

  if (!hero) {
    return <Loading />
  }

  return (
    <div className='wrapper'>
      <div className='hero-title row'>
        <HeroTitle
          hero={hero}
          tavernStats={tavernStats}
          tavernScore={tavernScore}
        />
      </div>
      <hr className='separator' />
      <div className='hero-scores'>
        <TavernScores
          hero={hero}
          tavernScore={tavernScore}
          tavernStats={tavernStats}
        />
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
