import React from 'react'
import { round } from 'lodash'
import { HeartIcon } from '../utils/icons/solid'
import ScoreBar from '../utils/score-bar'

export default function SummoningScore (props) {
  const { heroesCount, score } = props
  const { percentile, rank } = score

  return (
    <div className='tavern-score summoning-score'>
      <div className='row'>
        <div className='column'>
          <span className='percentile'>{round(percentile, 2)}</span>
        </div>
        <div className='column'>
          <div className='profession-icon-wrapper'>
            <HeartIcon />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <span className='ranking'>
            <ScoreBar
              barTitle={`${rank}/${heroesCount}`}
              current={heroesCount - rank}
              max={heroesCount}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
