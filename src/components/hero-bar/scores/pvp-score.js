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
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)

function InfoDetails (props) {
  const { tavernStats, heroId, rank } = props
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

  return (
    <Tooltip title={<InfoIcon />} identifier={`pvp-score-${heroId}`}>
      <div className='column'>
        <div className='tooltip-content-title row'>
          <span>Rank:</span>
          <span className='rank-number'>{rank.toLocaleString()}</span>
        </div>
        <div className='tooltip-content-table'>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>HP</td>
                <td>MP</td>
                <td>Stats</td>
              </tr>
              <tr>
                <td>Level 1</td>
                <td>{tavernStats.initStats.hp}</td>
                <td>{tavernStats.initStats.mp}</td>
                <td>{tavernStats.initStats.total}</td>
              </tr>
              <tr>
                <td>Level {tavernStats.currentStats.level}</td>
                <td>
                  {tavernStats.currentStats.hp}{' '}
                  <b>
                    (+
                    {tavernStats.currentStats.hp - tavernStats.initStats.hp})
                  </b>
                </td>
                <td>
                  {tavernStats.currentStats.mp}{' '}
                  <b>
                    (+
                    {tavernStats.currentStats.mp - tavernStats.initStats.mp})
                  </b>
                </td>
                <td>
                  {tavernStats.currentStats.total}{' '}
                  <b>
                    (+
                    {tavernStats.currentStats.total -
                      tavernStats.initStats.total}
                    )
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='tooltip-content-table'>
          <span>Stats</span>
          <Radar data={data} options={options} />
        </div>
      </div>
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
            <InfoDetails
              tavernStats={tavernStats}
              rank={rank}
              heroId={heroId}
            />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
