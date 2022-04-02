import React from 'react'
import { round, at } from 'lodash'
import { SwordsIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Legend)

// {
//   "initStats": {
//       "strength": 7,
//       "intelligence": 9,
//       "wisdom": 6,
//       "luck": 8,
//       "agility": 7,
//       "vitality": 6,
//       "endurance": 7,
//       "dexterity": 12,
//       "hp": 135,
//       "mp": 40,
//       "total": 62,
//       "level": 1
//   },
//   "currentStats": {
//       "strength": 7,
//       "intelligence": 9,
//       "wisdom": 6,
//       "luck": 8,
//       "agility": 7,
//       "vitality": 6,
//       "endurance": 7,
//       "dexterity": 12,
//       "hp": 135,
//       "mp": 40,
//       "total": 62,
//       "level": 1
//   }
// }

function InfoDetails (props) {
  const { tavernStats, heroId } = props
  const labels = [
    'strength',
    'endurance',
    'vitality',
    'intelligence',
    'wisdom',
    'dexterity',
    'agility',
    'luck',
  ]

  if (!tavernStats) {
    return ''
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Initial Stats',
        data: at(tavernStats.initStats, labels),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
      },
      {
        label: 'Current Stats',
        data: at(tavernStats.currentStats, labels),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        suggestedMin: 1,
      },
    },
  }

  console.log(
    heroId,
    at(tavernStats.initStats, labels),
    at(tavernStats.currentStats, labels)
  )

  return (
    <Tooltip title={<InfoIcon />} identifier={`pvp-score-${heroId}`}>
      <Radar data={data} options={options} />
    </Tooltip>
  )
}

export default function PvPScore (props) {
  const { heroesCount, score, tavernStats, heroId } = props
  const { percentile, rank } = score

  return (
    <div className='tavern-score pvp-score'>
      <Gauge current={heroesCount - rank} max={heroesCount}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <SwordsIcon />
          </div>
          <div className='row score-info'>
            <div className='percentile'>{round(percentile, 1)}%</div>
            <InfoDetails tavernStats={tavernStats} heroId={heroId} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
