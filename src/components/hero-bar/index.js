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
    <div className='scores-summary'>
      <div className='wrapper'>
        <TavernScores tavernScore={tavernScore} />

        <hr className='separator' />

        <div className='row'>
          <div className='column'>
            <ProfessionSection hero={hero} />
          </div>
        </div>

        <div className='dfk-tavern-link'>
          <a
            href={`https://dfktavern.com/gokmachar-ranking?heroid=${heroId}`}
            target='_blank'
          >
            <ExternalLinkIcon />
          </a>
        </div>

        <div className='dfk-enhancer-about-link' style={{ display: 'none' }}>
          <Tooltip title={<QuestionIcon />}>Thanks everyone</Tooltip>
        </div>
      </div>
    </div>
  )
}

export default HeroBar
