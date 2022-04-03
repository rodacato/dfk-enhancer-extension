import React from 'react'
import { round } from 'lodash'
import { HeartIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'

function InfoDetails (props) {
  const { statsGenes, heroId, rank } = props

  return (
    <Tooltip title={<InfoIcon />} identifier={`summoning-score-${heroId}`}>
      <div className='column'>
        <div className='tooltip-content-title row'>
          <span>Rank:</span>
          <span className='rank-number'>{rank.toLocaleString()}</span>
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
                <th>Stat Boost 1</th>
                <th>Stat Boost 2</th>
              </tr>
              {Object.keys(statsGenes).map((key) => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{statsGenes[key].class}</td>
                    <td>{statsGenes[key].subClass}</td>
                    <td>{statsGenes[key].profession}</td>
                    <td>{statsGenes[key].statBoost1}</td>
                    <td>{statsGenes[key].statBoost2}</td>
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
              {Object.keys(statsGenes).map((key) => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{statsGenes[key].active1}</td>
                    <td>{statsGenes[key].active2}</td>
                    <td>{statsGenes[key].passive1}</td>
                    <td>{statsGenes[key].passive2}</td>
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
  const { heroesCount, score, statsGenes, heroId } = props
  const { percentile, rank } = score

  return (
    <div className='tavern-score summoning-score'>
      <Gauge current={heroesCount - rank} max={heroesCount}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <HeartIcon />
          </div>
          <div className='row score-info'>
            <div className='percentile'>{round(percentile, 1)}%</div>
            <InfoDetails statsGenes={statsGenes} rank={rank} heroId={heroId} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
