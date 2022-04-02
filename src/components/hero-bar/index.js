import React, { useState, useEffect } from 'react'
import ProfessionScore from './profession-score'
import PvPScore from './pvp-score'
import SummoningScore from './summoning-score'
import ProfessionSection from './profession-section'
import Loading from '../utils/loading'
import backgroundApi from '../../lib/api/background-script'
import { ExternalLinkIcon } from '../utils/icons/solid'
import Tooltip from '../utils/tooltip'
import { QuestionIcon } from '../utils/icons/solid'

import './style.css'

function TavernScores (props) {
  const { tavernScore } = props
  const { heroesCount } = tavernScore

  if (!heroesCount) {
    return <span> No data available.</span>
  }

  return (
    <div className='scores-section row'>
      <div className='column'>
        <ProfessionScore
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.profession}
        />
      </div>
      <div className='column'>
        <PvPScore
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.pvp}
        />
      </div>
      <div className='column'>
        <SummoningScore
          heroesCount={tavernScore.heroesCount}
          score={tavernScore.summoning}
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

  useEffect(() => {
    backgroundApi.getHero(heroId).then((response) => {
      setHero(response)
    })

    backgroundApi.getHeroDFKTavernStats(heroId).then((response) => {
      setTavernScore(response)
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
      <div className='hero-scores row'>
        <div className='column'>
          <TavernScores tavernScore={tavernScore} />
        </div>
      </div>
    </div>
  )
}

export default HeroBar
