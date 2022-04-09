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

function TotalStats (props) {
  const { hero, tavernStats } = props
  let initStats
  let currentStats

  if (!isEmpty(tavernStats)) {
    initStats = tavernStats.initStats
    currentStats = tavernStats.currentStats
  } else {
    initStats = undefined
    currentStats = { total: sum(values(hero.stats)), level: hero.level }
  }

  return (
    <div className='hero-stat column'>
      <span className='title'>Total Stats</span>
      <span className='value'>
        {currentStats.total}{' '}
        {initStats && currentStats.level !== 1 && (
          <b>
            ({initStats.total}+{currentStats.total - initStats.total})
          </b>
        )}
      </span>
    </div>
  )
}

export default function HeroTitle (props) {
  const { hero, tavernScore, tavernStats } = props
  const bestProfession = at(tavernScore, 'profession.best')

  return (
    <div className='hero-profession row'>
      <div className='profession-name row'>
        {hero.profession}

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
      </div>
      <TotalStats hero={hero} tavernStats={tavernStats} />
    </div>
  )
}
