import React, { useState } from 'react'
import ReactModal from 'react-modal'

import './style.css'

export default function Modal (props) {
  const { label } = props
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = function () {
    setShowModal(true)
  }

  const handleCloseModal = function () {
    setShowModal(false)
  }

  return (
    <div className='modal'>
      <span className='modal-label' onClick={handleOpenModal}>
        {label}
      </span>

      <ReactModal
        isOpen={showModal}
        className='modal-content'
        overlayClassName='modal-overlay'
      >
        <button onClick={handleCloseModal}>Close Modal</button>

        {props.children}
      </ReactModal>
    </div>
  )
}
