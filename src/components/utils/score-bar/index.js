import React from 'react'
import { round } from 'lodash'

import './style.css'

export default function ScoreBar (props) {
  const { title, titleLegend, barTitle, current, max, color } = props
  const percentage = round((current * 100) / max, 2)
  const barStyle = {
    backgroundColor: color || '#3c6fd0',
    width: `${percentage}%`,
  }

  return (
    <div className='score-bar'>
      {title && (
        <span className='title' title={titleLegend}>
          {title}
        </span>
      )}
      <div className='bar-wrapper'>
        <span className='relative-score'>{barTitle}</span>
        <div className='bar'>
          <div className='bar-fill' style={barStyle}></div>
        </div>
      </div>
    </div>
  )
}
