import React from 'react'
import { isEmpty, at, sum, values } from 'lodash'
import {
  hasBlueStatAffinity,
  hasGoodProfessionAndClassAffinity,
  hasGoodOPERScore,
} from '../../lib/helpers/hero'

function BestProfession (props) {
  const { tavernScore } = props

  return (
    <div className='hero-awards column'>
      <span className='title'>Best profession</span>
      <span className='value'>{tavernScore.profession.best}</span>
    </div>
  )
}

export default function HeroTitle (props) {
  const { hero, tavernScore } = props
  const bestProfession = at(tavernScore, 'profession.best')

  return (
    <div className='hero-profession column'>
      <div className='profession-name row'>
        <div className='column' style={{ flex: 5 }}>
          <span style={{ fontSize: '14px' }}>
            #{hero.id} - {hero.profession}
            <div className='profession-awards'>
              {hero.profession === bestProfession && (
                <span title='Match profession'> 💎</span>
              )}
              {hasBlueStatAffinity(hero.profession, hero.blueGene) && (
                <span title='Blue stat match with profession'> ⭐️</span>
              )}
              {hasGoodOPERScore(hero) && (
                <span title='OPER Score is higher than 60%'> 🏆</span>
              )}
              {hasGoodProfessionAndClassAffinity(hero) && (
                <span title='Profession affinity is higher than 80%'> 🌡</span>
              )}
            </div>
          </span>
        </div>
        <div className='column'>
          <div className='hero-stat'>{sum(values(hero.stats))}</div>
        </div>
      </div>
    </div>
  )
}
