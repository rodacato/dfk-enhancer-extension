import React, { useState, useEffect } from 'react'
import { find } from 'lodash'
import internalApi from '../../lib/services/internal-api'
import { InfoIcon } from '../utils/icons/solid'
import Tooltip from '../utils/tooltip'
import { ITEMS } from '../../lib/constants'

import './style.css'

function getAddress (token) {
  return find(ITEMS, (item) => {
    return item.name.toLowerCase() == token.name.toLowerCase()
  })?.address
}

function InventoryItem (props) {
  const { token, network } = props
  const address = getAddress(token)
  const [tokenData, setTokenData] = useState({})
  const [loading, setLoading] = useState({
    inProgress: true,
    loadingAttempts: 0,
  })

  if (!address) {
    return ''
  }

  const getItem = function () {
    if (!loading.inProgress || loading.loadingAttempts >= 5) {
      return
    }

    setLoading({ ...loading, loadingAttempts: loading.loadingAttempts + 1 })

    internalApi.getItem(address, network).then((response) => {
      setTokenData({ ...response })
      setLoading({ ...loading, inProgress: false })
    })
  }

  useEffect(() => {
    getItem()
  }, [])

  if (loading.inProgress) {
    return ''
  }

  return (
    <div className='inventory-wrapper'>
      <Tooltip
        title={<InfoIcon />}
        identifier={`profession-score-${tokenData.symbol}`}
      >
        <div className='row'>
          <span>
            {tokenData.price} J ({tokenData.priceInUsd} USD)
          </span>
        </div>
      </Tooltip>
    </div>
  )
}

export default InventoryItem
