import React from 'react'
import { round } from 'lodash'
import {
  calculateOPERScore,
  getHeroClassProfessionAffinity,
} from '../../lib/helpers/hero'
import ScoreBar from '../utils/score-bar'

function OPERScoreBar (props) {
  const { hero, profession } = props
  const professionScores = calculateOPERScore(hero)
  const professionRelativeScore = round(professionScores[profession], 2)

  return (
    <ScoreBar
      title='OPER'
      color='#b44d94'
      titleLegend='Overall Profession Efficiency Scoring'
      barTitle={`${professionRelativeScore}%`}
      current={professionRelativeScore}
      max={100}
    />
  )
}

function AffinityScoreBar (props) {
  const { hero } = props

  const heroClassProfessionAffinity = getHeroClassProfessionAffinity(hero)
  const max = heroClassProfessionAffinity.mainClass.max
  const current = heroClassProfessionAffinity.mainClass.value

  return (
    <ScoreBar
      title='Affinity'
      color='#b44d94'
      barTitle={`${current}/${max}`}
      current={current}
      max={max}
    />
  )
}

export default function ProfessionSection (props) {
  const { hero } = props

  return (
    <div className='profession-section row'>
      <div className='column'>
        <div className='row'>
          <div className='column profession-title'>{hero.profession}</div>
        </div>
        {/* 
        <div className='row profession-scores'>
          <div className='column'>
            <AffinityScoreBar hero={hero} />
            <OPERScoreBar hero={hero} profession={hero.profession} />
          </div>
        </div> */}
      </div>
    </div>
  )
}
