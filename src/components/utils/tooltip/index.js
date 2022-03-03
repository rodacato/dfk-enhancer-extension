import React from 'react'

import './style.css'

export default function Tooltip (props) {
  const { title } = props

  return (
    <div className='popover__wrapper'>
      <div style={{ position: 'absolute' }}>
        <span>{title}</span>
        <div className='popover__content'>{props.children}</div>
      </div>
    </div>
  )
}
