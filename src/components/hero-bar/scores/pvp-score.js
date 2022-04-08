import React from 'react'
import { isEmpty, round, at, sum, values } from 'lodash'
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

const CHART_STATS = [
  'strength',
  'endurance',
  'vitality',
  'intelligence',
  'wisdom',
  'dexterity',
  'agility',
  'luck',
]

function InfoDetails (props) {
  const { hero, tavernStats, rank } = props
  let initStats
  let currentStats

  if (!isEmpty(tavernStats)) {
    initStats = tavernStats.initStats
    currentStats = tavernStats.currentStats
  } else {
    initStats = {
      strength: 0,
      endurance: 0,
      vitality: 0,
      intelligence: 0,
      wisdom: 0,
      dexterity: 0,
      agility: 0,
      luck: 0,
      total: 0,
    }
    currentStats = {
      ...at(hero.stats, CHART_STATS),
      total: sum(values(hero.stats)),
      level: hero.level,
    }
  }

  const data = {
    labels: CHART_STATS,
    datasets: [
      {
        label: 'Initial Stats',
        data: at(initStats, CHART_STATS),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
      },
      {
        label: 'Current Stats',
        data: at(currentStats, CHART_STATS),
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
    <Tooltip title={<InfoIcon />} identifier={`pvp-score-${hero.id}`}>
      <div className='column'>
        <div className='tooltip-content-title row'>
          <span>Rank:</span>
          <span className='rank-number'>{rank?.toLocaleString()}</span>
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
                <td>{initStats.hp}</td>
                <td>{initStats.mp}</td>
                <td>{initStats.total}</td>
              </tr>
              <tr>
                <td>Level {currentStats.level}</td>
                <td>
                  {currentStats.hp}{' '}
                  <b>
                    (+
                    {currentStats.hp - initStats.hp})
                  </b>
                </td>
                <td>
                  {currentStats.mp}{' '}
                  <b>
                    (+
                    {currentStats.mp - initStats.mp})
                  </b>
                </td>
                <td>
                  {currentStats.total}{' '}
                  <b>
                    (+
                    {currentStats.total - initStats.total})
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
  const { hero, heroesCount, score, tavernStats } = props
  const { percentile, rank } = score

  const currentRank = (heroesCount && heroesCount - rank) || 0
  const minRank = heroesCount || 100000

  return (
    <div className='tavern-score pvp-score'>
      <Gauge current={currentRank} max={minRank}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <SwordsIcon />
          </div>
          <div className='row score-info'>
            <div className='percentile'>
              {(percentile && round(percentile, 1)) || '--'}%
            </div>
            <InfoDetails hero={hero} rank={rank} tavernStats={tavernStats} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
