import React from 'react'
import { round, at, map } from 'lodash'
import { HeartIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'

function InfoDetails (props) {
  const { hero, rank } = props
  const { stats } = hero.recessiveGenes

  const statsGenes = [
    {
      title: 'D',
      ...stats[0],
    },
    {
      title: 'R1 (~20%)',
      ...stats[1],
    },
    {
      title: 'R2 (~4%)',
      ...stats[2],
    },
    {
      title: 'R3 (~1%)',
      ...stats[3],
    },
  ]

  return (
    <Tooltip title={<InfoIcon />} identifier={`summoning-score-${hero.id}`}>
      <div className='column'>
        <div className='tooltip-content-title row'>
          <span>Rank:</span>
          <span className='rank-number'>{rank?.toLocaleString()}</span>
        </div>
        <div className='tooltip-content-table'>
          <span>Genes Basic</span>
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Main</th>
                <th>Sub</th>
                <th>Prof</th>
                <th className='greeneGene'>Stat Boost 1</th>
                <th className='blueGene'>Stat Boost 2</th>
              </tr>
              {map(statsGenes, (stat) => {
                return (
                  <tr>
                    <td>{stat.title}</td>
                    <td>{stat.class}</td>
                    <td>{stat.subClass}</td>
                    <td>{stat.profession}</td>
                    <td className='greeneGene'>{stat.statBoost1}</td>
                    <td className='blueGene'>{stat.statBoost2}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className='tooltip-content-table'>
          <span>Genes Ability</span>
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Active 1</th>
                <th>Active 2</th>
                <th>Passive 1</th>
                <th>Passive 2</th>
              </tr>
              {map(statsGenes, (stat) => {
                return (
                  <tr>
                    <td>{stat.title}</td>
                    <td>{stat.active1}</td>
                    <td>{stat.active2}</td>
                    <td>{stat.passive1}</td>
                    <td>{stat.passive2}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Tooltip>
  )
}

export default function SummoningScore (props) {
  const { heroesCount, score, hero } = props
  const { percentile, rank } = score

  const currentRank = (heroesCount && heroesCount - rank) || 0
  const minRank = heroesCount || 100000

  return (
    <div className='tavern-score summoning-score'>
      <Gauge current={currentRank} max={minRank}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <HeartIcon />
          </div>
          <div className='row score-info'>
            <div className='percentile'>
              {(percentile && round(percentile, 1)) || '--'}%
            </div>
            <InfoDetails hero={hero} rank={rank} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
