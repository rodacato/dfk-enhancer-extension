import React from 'react'
import { round, includes } from 'lodash'
import { BookIcon, InfoIcon } from '../../utils/icons/solid'
import Gauge from '../../utils/gauge'
import Tooltip from '../../utils/tooltip'
import ScoreBar from '../../utils/score-bar'
import {
  calculateOPERScore,
  getHeroClassProfessionAffinity,
  extractStatAffinity,
  getHeroPrimaryBaseStatsGrowth,
  getHeroSecondaryBaseStatsGrowth,
} from '../../../lib/helpers/hero'
import { STAT_ABBR_MAP, HeroProfessionStats } from '../../../lib/constants'

function OPERScoreBar (props) {
  const { hero, profession } = props
  const professionScores = calculateOPERScore(hero)
  const professionRelativeScore = round(professionScores[profession], 2)

  return (
    <ScoreBar
      color='#b44d94'
      titleLegend='Overall Profession Efficiency Scoring'
      barTitle={`${professionRelativeScore}%`}
      current={professionRelativeScore}
      max={100}
    />
  )
}

function AffinityScoreBar (props) {
  const { hero } = props

  const heroClassProfessionAffinity = getHeroClassProfessionAffinity(hero)
  const max = heroClassProfessionAffinity.mainClass.max
  const current = heroClassProfessionAffinity.mainClass.value

  return (
    <ScoreBar
      color='#b44d94'
      barTitle={`${current}/${max}`}
      current={current}
      max={max}
    />
  )
}

function AffinityStatRow (props) {
  const { hero, stat } = props
  const {
    primaryValue,
    primaryBaseValue,
    secondaryValue,
    secondaryBaseValue,
    boostedStat,
  } = extractStatAffinity(hero, stat)
  const extraClasses = includes(HeroProfessionStats[hero.profession], stat)
    ? 'profession-stat-affin'
    : ''
  const color = boostedStat ? '#b44d94' : '#3c6fd0'
  const primaryDiff = primaryValue - primaryBaseValue
  const secondaryDiff = secondaryValue - secondaryBaseValue

  return (
    <tr className={extraClasses}>
      <td>{STAT_ABBR_MAP[stat]}</td>
      <td>
        {primaryValue}% {primaryDiff > 0 && `(+${primaryDiff}%)`}
      </td>
      <td collspan='3'>
        <ScoreBar color={color} current={primaryValue} max={100} />
      </td>
      <td>
        {secondaryValue}% {secondaryDiff > 0 && `(+${secondaryDiff}%)`}
      </td>
    </tr>
  )
}

function InfoDetails (props) {
  const { hero, rank } = props

  return (
    <Tooltip title={<InfoIcon />} identifier={`profession-score-${hero.id}`}>
      <div className='column'>
        <div className='tooltip-content-title row'>
          <span>Rank:</span>
          <span className='rank-number'>{rank?.toLocaleString()}</span>
        </div>
        <div className='tooltip-content-table'>
          <span>OPER Score</span>
          <OPERScoreBar hero={hero} profession={hero.profession} />
        </div>
        <div className='tooltip-content-table'>
          <span>Main Class Affinity</span>
          <table>
            <tbody>
              <tr key='affin-total'>
                <td colSpan='6'>
                  <AffinityScoreBar hero={hero} />
                </td>
              </tr>
              <tr key='affin-titles'>
                <td></td>
                <td>Primary</td>
                <td collspan='3'></td>
                <td>Seconday</td>
              </tr>
              <AffinityStatRow key='affin-str' hero={hero} stat='strength' />
              <AffinityStatRow key='affin-dex' hero={hero} stat='dexterity' />
              <AffinityStatRow key='affin-agi' hero={hero} stat='agility' />
              <AffinityStatRow key='affin-vit' hero={hero} stat='vitality' />
              <AffinityStatRow key='affin-end' hero={hero} stat='endurance' />
              <AffinityStatRow
                key='affin-int'
                hero={hero}
                stat='intelligence'
              />
              <AffinityStatRow key='affin-wis' hero={hero} stat='wisdom' />
              <AffinityStatRow key='affin-lck' hero={hero} stat='luck' />
            </tbody>
          </table>
        </div>
      </div>
    </Tooltip>
  )
}

export default function ProfessionScore (props) {
  const { heroesCount, score, hero } = props
  const { percentile, rank } = score

  const currentRank = (heroesCount && heroesCount - rank) || 0
  const minRank = heroesCount || 100000

  return (
    <div className='tavern-score profession-score'>
      <Gauge current={currentRank} max={minRank}>
        <div className='column align-center'>
          <div className='profession-icon-wrapper'>
            <BookIcon />
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
