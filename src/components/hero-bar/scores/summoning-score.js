import React from 'react'
import { round } from 'lodash'
import { HeartIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'

function InfoDetails (props) {
  const { statsGenes, heroId } = props

  return (
    <Tooltip title={<InfoIcon />} identifier={`summoning-score-${heroId}`}>
      <div className='column'>
        <div>
          <span>Genes Basic</span>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Main</td>
                <td>Sub</td>
                <td>Prof</td>
                <td>Stat Boost 1</td>
                <td>Stat Boost 2</td>
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

        <div>
          <span>Genes Ability</span>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Active 1</td>
                <td>Active 2</td>
                <td>Passive 1</td>
                <td>Passive 2</td>
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
            <InfoDetails statsGenes={statsGenes} heroId={heroId} />
          </div>
        </div>
      </Gauge>
    </div>
  )
}
