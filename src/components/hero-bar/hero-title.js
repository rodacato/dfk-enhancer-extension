import React from 'react'
import { hasBlueStatAffinity } from '../../lib/helpers/hero'

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
  const { tavernStats } = props

  if (!tavernStats) return ''

  return (
    <div className='hero-stat column'>
      <span className='title'>Total Stats</span>
      <span className='value'>
        {tavernStats.currentStats.total}{' '}
        {tavernStats.currentStats.level !== 1 && (
          <b>
            ({tavernStats.initStats.total}+
            {tavernStats.currentStats.total - tavernStats.initStats.total})
          </b>
        )}
      </span>
    </div>
  )
}

export default function HeroTitle (props) {
  const { hero, tavernScore, tavernStats } = props
  const bestProfession = tavernScore.profession.best

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
        </div>
      </div>
      <TotalStats tavernStats={tavernStats} />
    </div>
  )
}
