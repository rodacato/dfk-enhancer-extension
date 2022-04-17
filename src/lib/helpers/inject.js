import React from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import HeroBar from '../../components/hero-bar'
import { STATS_NAMES_MAP } from '../../lib/constants'

export const enhanceHeroCard = async (card) => {
  const { cardWrapper } = extractContainerInfo(card)

  if (!cardWrapper || cardWrapper.querySelector('.dfk-hero-bar')) {
    return
  }

  const hero = extractHeroInfo(cardWrapper)

  let div = document.createElement('div')
  div.className = 'dfk-hero-bar'
  cardWrapper.prepend(div)

  const selector = cardWrapper.querySelector('[class="dfk-hero-bar"]')
  cardWrapper
    .querySelectorAll('.dfk-hero-bar + div > div')
    .forEach((e) => e.remove())

  ReactModal.setAppElement(selector)
  ReactDOM.render(<HeroBar heroBase={hero} />, selector)
}

const extractContainerInfo = function (card) {
  let cardWrapper = card.closest('.buy-heroes-list-box')

  if (cardWrapper) {
    return { cardWrapper }
  }

  return { cardWrapper: card.parentElement }
}

const extractHeroInfo = function (wrapper) {
  let heroId =
    wrapper.querySelector('[class*="heroID"]').childNodes[1].textContent * 1

  const statsGrid = wrapper.querySelectorAll('[class*="statList"] > div')
  const heroInfoGrid = wrapper.querySelector('[class*="heroInfo"]')
  const professionGrid = wrapper.querySelector('[class*="skillList"]')
  const professionLevels = professionGrid.querySelectorAll(
    '[class*="styles_skillLevel"]'
  )

  let statBoost1 = wrapper.querySelector('[class*="statBoost"]')?.textContent
  let statBoost2 = wrapper.querySelector('[class*="statBoost2"]')?.textContent
  const statBoostDouble = wrapper.querySelector('[class*="statBoostDouble"]')
    ?.textContent
  if (statBoostDouble) {
    statBoost1 = statBoostDouble
    statBoost2 = statBoostDouble
  }

  const heroData = {
    id: heroId,
    mainClass: heroInfoGrid
      .querySelector('[class*="class"]')
      .childNodes[0].textContent.toLowerCase(),
    subClass: heroInfoGrid
      .querySelector('[class*="class"]')
      .childNodes[1].textContent.toLowerCase(),
    profession: professionGrid
      .querySelector('[class*="styles_chosen"]')
      .childNodes[0].textContent.toLowerCase(),
    rarity: heroInfoGrid
      .querySelector('[class*="styles_cardRarity"]')
      .textContent.toLowerCase(),
    level:
      heroInfoGrid.querySelector('[class*="styles_level"]').childNodes[1] * 1,
    greenGene: STATS_NAMES_MAP[statBoost1.toUpperCase()],
    blueGene: STATS_NAMES_MAP[statBoost2.toUpperCase()],
    generation:
      heroInfoGrid.querySelector('[class*="styles_level"]').childNodes[2]
        .childNodes[1] * 1,
    xp:
      wrapper.querySelector('[class*="statXp"]').childNodes[2].childNodes[0]
        .textContent * 1,
    hp:
      wrapper.querySelector('[class*="heroHealth"]').childNodes[1].textContent *
      1,
    mp:
      wrapper.querySelector('[class*="heroMana"]').childNodes[1].textContent *
      1,
    statsGenes: '',
    visualGenes: '',
    recessiveGenes: {
      stats: {},
      visual: {},
    },
    professions_stats: {
      mining: professionLevels[0] * 1.0,
      gardening: professionLevels[1] * 1.0,
      fishing: professionLevels[2] * 1.0,
      foraging: professionLevels[3] * 1.0,
    },
    stats: {
      strength:
        statsGrid[0].querySelector('[class*="statPoint"]').textContent * 1,
      dexterity:
        statsGrid[1].querySelector('[class*="statPoint"]').textContent * 1,
      agility:
        statsGrid[2].querySelector('[class*="statPoint"]').textContent * 1,
      vitality:
        statsGrid[3].querySelector('[class*="statPoint"]').textContent * 1,
      endurance:
        statsGrid[4].querySelector('[class*="statPoint"]').textContent * 1,
      intelligence:
        statsGrid[5].querySelector('[class*="statPoint"]').textContent * 1,
      wisdom:
        statsGrid[6].querySelector('[class*="statPoint"]').textContent * 1,
      luck: statsGrid[7].querySelector('[class*="statPoint"]').textContent * 1,
    },
  }

  return heroData
}
