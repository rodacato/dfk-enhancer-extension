import React from 'react'
import ReactDOM from 'react-dom'
import HeroBar from '../../components/hero-bar'

export const enhanceHeroCard = async (card) => {
  const cardWrapper = card.closest('.buy-heroes-list-box')

  if (cardWrapper.querySelector('.dfk-hero-bar')) {
    return
  }

  let div = document.createElement('div')
  div.className = 'dfk-hero-bar'

  const heroId = cardWrapper
    .querySelector('div')
    .firstChild.textContent.match(/\d+/)[0]

  cardWrapper.prepend(div)
  ReactDOM.render(
    <HeroBar heroId={heroId} />,
    cardWrapper.querySelector('[class="dfk-hero-bar"]')
  )
}
