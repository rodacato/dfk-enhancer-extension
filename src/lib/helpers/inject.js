import React from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import HeroBar from '../../components/hero-bar'
import InventoryItem from '../../components/inventory-item'
import { STATS_NAMES_MAP } from '../../lib/constants'
import {
  getHeroPrimaryBaseStatsGrowth,
  getHeroSecondaryBaseStatsGrowth,
} from '../../lib/helpers/hero'

export const detectNetwork = function () {
  if (document.querySelector('a[href*="subnets.avax.network"]')) {
    return 'crystalvale'
  }

  return 'serendale'
}

export const enhanceInventoryItem = async (item, network) => {
  if (item.querySelector('.dfk-inventory-bar')) {
    return
  }
  const token = extractItemInfo(item)
  if (!token || !token.quantity) {
    return
  }

  let div = document.createElement('div')
  div.className = 'dfk-inventory-bar'
  item.prepend(div)

  const selector = item.querySelector('.dfk-inventory-bar')
  ReactDOM.render(<InventoryItem token={token} network={network} />, selector)
}

export const enhanceHeroCard = async (card, network) => {
  if (card.classList.contains('dfk-enhancer-loaded')) {
    return
  }

  card.classList.add('dfk-enhancer-loaded')

  const { cardWrapper, section } = extractContainerInfo(card)

  // Note: Dont display hero enhancements if the section is unknown
  if (!cardWrapper || cardWrapper.querySelector('.dfk-hero-bar')) {
    return
  }

  const hero = extractHeroInfo(cardWrapper)

  let div = document.createElement('div')
  div.className = 'dfk-hero-bar'
  cardWrapper.prepend(div)

  const selector = cardWrapper.querySelector('[class="dfk-hero-bar"]')

  ReactModal.setAppElement(selector)
  ReactDOM.render(
    <HeroBar heroBase={hero} section={section} network={network} />,
    selector
  )
}

const extractContainerInfo = function (card) {
  let section
  let cardWrapper
  let sectionTitle = card
    .closest('.modal-overlay')
    .querySelector('.dk-modal--header h4')
    .textContent.toLowerCase()
    .trim()

  console.log(sectionTitle)

  switch (sectionTitle) {
    case 'your heroes':
      cardWrapper = card.closest('.buy-heroes-list-box')
      section = 'your_heroes'
      break
    case 'view hero':
      cardWrapper = card.closest('.cardContainer').parentElement
      section = 'view_heroe'
      break
    case 'buy heroes':
      cardWrapper = card.closest('.buy-heroes-list-box')
      section = 'buy_heroes'
      break
    case 'sell heroes':
      cardWrapper = card.closest('.buy-heroes-list-box')
      section = 'sell_heroes'
      break
    case 'hire a hero':
      cardWrapper = card.closest('.buy-heroes-list-box')
      section = 'hire_heroes'
      break
    case 'select your hero':
      cardWrapper = card.closest('.buy-heroes-list-box')
      section = 'select_your_heroes'
      break
    default:
  }

  return { cardWrapper, section }
}

const extractHeroInfo = function (wrapper) {
  let heroId =
    wrapper.querySelector('[class*="heroID"]').childNodes[3].textContent * 1

  const statsGrid = wrapper.querySelectorAll('[class*="statList"] > div')
  const heroInfoGrid = wrapper.querySelector('[class*="heroInfo"]')
  const professionGrid = wrapper.querySelector('[class*="skillList"]')
  const professionLevels = professionGrid.querySelectorAll(
    '[class*="skillLevel"]'
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
      .querySelector('[class*="chosen"]')
      .childNodes[0].textContent.toLowerCase(),
    rarity: heroInfoGrid
      .querySelector('[class*="cardRarity"]')
      .textContent.toLowerCase(),
    level:
      heroInfoGrid.querySelector('[class*="level"]').childNodes[1].textContent *
      1,
    greenGene: STATS_NAMES_MAP[statBoost1.toUpperCase()],
    blueGene: STATS_NAMES_MAP[statBoost2.toUpperCase()],
    generation:
      heroInfoGrid.querySelector('[class*="level"]').childNodes[2].childNodes[1]
        .textContent * 1,
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
      mining: professionLevels[0].textContent * 1.0,
      gardening: professionLevels[1].textContent * 1.0,
      fishing: professionLevels[2].textContent * 1.0,
      foraging: professionLevels[3].textContent * 1.0,
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

  heroData.statsGrowth = {
    primary: getHeroPrimaryBaseStatsGrowth(heroData.mainClass),
    secondary: getHeroSecondaryBaseStatsGrowth(heroData.subClass),
  }

  return heroData
}

const extractItemInfo = function (itemWrapper) {
  let quantity =
    itemWrapper.querySelector('[class*="InventoryBlock_quantity"]')
      ?.textContent * 1
  quantity ||=
    itemWrapper.querySelector('[class*="RewardBlock_quantity"]')?.textContent *
    1

  return {
    quantity: quantity,
    name: itemWrapper.querySelector('img')?.alt,
  }
}
