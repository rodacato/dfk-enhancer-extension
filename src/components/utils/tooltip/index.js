import React from 'react'
import ReactTooltip from 'react-tooltip'

import './style.css'

export default function Tooltip (props) {
  const { title, identifier } = props

  return (
    <div className='tooltip-wrapper'>
      <span data-tip data-for={identifier}>
        {title}
      </span>

      <ReactTooltip
        id={identifier}
        aria-haspopup='true'
        type='dark'
        effect='solid'
        place='bottom'
        clickable={true}
      >
        {props.children}
      </ReactTooltip>
    </div>
  )
}
