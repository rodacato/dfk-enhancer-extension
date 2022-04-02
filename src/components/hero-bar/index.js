import React, { useState, useEffect } from 'react'
import Loading from '../utils/loading'
import ProfessionScore from './scores/profession-score'
import PvPScore from './scores/pvp-score'
import SummoningScore from './scores/summoning-score'
import ProfessionSection from './profession-section'
import backgroundApi from '../../lib/api/background-script'
import { ExternalLinkIcon } from '../utils/icons/solid'

import './style.css'

function TavernScores (props) {
  const { tavernScore, tavernStats, hero } = props
  const { heroesCount } = tavernScore

  if (!heroesCount) {
    return <span> No data available.</span>
  }

  return (
    <div className='row'>
      <div className='column'>
        <ProfessionScore
          heroId={hero.id}
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.profession}
          stats={hero.stats}
        />
      </div>
      <div className='column'>
        <PvPScore
          heroId={hero.id}
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.pvp}
          tavernStats={tavernStats}
        />
      </div>
      <div className='column'>
        <SummoningScore
          heroId={hero.id}
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.summoning}
          statsGenes={hero.statsGenes}
        />
      </div>
    </div>
  )
}

function HeroTitle (props) {
  const { hero, tavernScore } = props

  return (
    <div>
      <div className='row'>
        <div className='column'>
          <ProfessionSection
            hero={hero}
            bestProfession={tavernScore.profession.best}
          />
        </div>
      </div>

      <div className='dfk-tavern-link'>
        <a
          href={`https://dfktavern.com/gokmachar-ranking?heroid=${hero.id}`}
          target='_blank'
        >
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}

function HeroBar (props) {
  const { heroId } = props
  const [hero, setHero] = useState(null)
  const [tavernScore, setTavernScore] = useState(null)
  const [tavernStats, setTavernStats] = useState(null)

  useEffect(() => {
    backgroundApi.getHero(heroId).then((response) => {
      setHero(response)
    })

    backgroundApi.getHeroDFKTavernStats(heroId).then((response) => {
      setTavernScore(response)
    })

    backgroundApi.getHeroDFKTavernStatsGrowth(heroId).then((response) => {
      setTavernStats(response)
    })
  }, [])

  if (!hero || !tavernScore) {
    return <Loading />
  }

  return (
    <div className='wrapper'>
      <div className='hero-title row'>
        <div className='hero-profession column'>
          <HeroTitle tavernScore={tavernScore} hero={hero} />
        </div>
        <div className='hero-awards column'>awards</div>
      </div>
      <hr className='separator' />
      <div className='hero-scores'>
        <TavernScores
          hero={hero}
          tavernScore={tavernScore}
          tavernStats={tavernStats}
        />
      </div>
    </div>
  )
}

export default HeroBar
