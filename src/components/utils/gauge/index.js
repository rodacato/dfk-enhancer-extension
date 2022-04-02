import React from 'react'
import { round } from 'lodash'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'

import './style.css'

export default function Gauge (props) {
  const { current, max } = props
  const percentage = round((current * 100) / max, 2)

  return (
    <div className='gauge'>
      <CircularProgressbarWithChildren
        value={percentage}
        circleRatio={0.5}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: 'butt',
          rotation: 0.75,
          pathColor: '#3c6fd0',
          trailColor: '#fff3',
        })}
      >
        {props.children}
      </CircularProgressbarWithChildren>
    </div>
  )
}
