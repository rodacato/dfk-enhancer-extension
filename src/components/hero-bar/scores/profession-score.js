import React from 'react'
import { round } from 'lodash'
import { BookIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'

function InfoDetails (props) {
  const { heroId } = props

  return (
    <Tooltip title={<InfoIcon />} identifier={`profession-score-${heroId}`}>
      affinity, oper
    </Tooltip>
  )
}

export default function ProfessionScore (props) {
  const { heroesCount, score, heroId } = props
  const { percentile, rank } = score

  return (
    <div className='tavern-score profession-score'>
      <Gauge current={heroesCount - rank} max={heroesCount}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <BookIcon />
          </div>
          <div className='row score-info'>
            <div className='percentile'>{round(percentile, 1)}%</div>
            <InfoDetails heroId={heroId} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
