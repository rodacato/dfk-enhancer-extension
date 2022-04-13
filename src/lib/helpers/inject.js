import React from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import HeroBar from '../../components/hero-bar'

export const enhanceHeroCard = async (card) => {
  let cardWrapper = extractContainer(card)

  if (cardWrapper.querySelector('.dfk-hero-bar')) {
    return
  }

  const heroId = extractHeroId(cardWrapper)

  let div = document.createElement('div')
  div.className = 'dfk-hero-bar'
  cardWrapper.prepend(div)

  const selector = cardWrapper.querySelector('[class="dfk-hero-bar"]')

  ReactModal.setAppElement(selector)
  ReactDOM.render(<HeroBar heroId={heroId} />, selector)
}

const extractContainer = function (card) {
  let cardWrapper = card.closest('.buy-heroes-list-box')

  if (cardWrapper) {
    return cardWrapper
  }

  return card.parentElement
}

const extractHeroId = function (wrapper) {
  let heroId = wrapper
    .querySelectorAll('[class^=styles_heroID]')[0]
    .textContent.match(/\d+/)[0]

  if (heroId) {
    return heroId
  }

  return cardWrapper.querySelector('div').firstChild.textContent.match(/\d+/)[0]
}
