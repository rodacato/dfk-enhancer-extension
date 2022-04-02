const STAT_MAP = [
  'strength',
  'dexterity',
  'agility',
  'vitality',
  'endurance',
  'intelligence',
  'wisdom',
  'luck',
]
const STAT_ABBR_MAP = {
  STR: 'strength',
  DEX: 'dexterity',
  AGI: 'agility',
  VIT: 'vitality',
  END: 'endurance',
  INT: 'intelligence',
  WIS: 'wisdom',
  LCK: 'luck',
}
export const SKILL_MAP = ['mining', 'gardening', 'fishing', 'foraging']

export function extractHeroStats (cardWrapper, card) {
  const stats = {}

  const id = cardWrapper
    .querySelector('div')
    .firstChild.textContent.match(/\d+/)[0]

  const statGrid = card.querySelector('[class*="styles_statList"]')
  const statValues = statGrid.querySelectorAll('[class*="styles_statPoint"]')
  let statTotal = 0
  statValues.forEach((stat, i) => {
    const statVal = parseInt(stat.textContent, 10)
    stats[STAT_MAP[i]] = statVal
    statTotal += statVal
  })

  const statBoosts = []
  const statBoost1 =
    STAT_ABBR_MAP[
      statGrid.querySelector('[class*="styles_statBoost_"]')?.textContent
    ]
  if (statBoost1) statBoosts.push(statBoost1)
  const statBoost2 =
    STAT_ABBR_MAP[
      statGrid.querySelector('[class*="styles_statBoost2_"]')?.textContent
    ]
  if (statBoost2) statBoosts.push(statBoost2)
  const statBoostDouble =
    STAT_ABBR_MAP[
      statGrid.querySelector('[class*="styles_statBoostDouble_"]')?.textContent
    ]
  if (statBoostDouble) statBoosts.push(statBoostDouble)

  const professions = {}
  const professionGrid = card.querySelector('[class*="styles_skillList"]')
  const professionLevels = professionGrid.querySelectorAll(
    '[class*="styles_skillLevel"]'
  )

  professionLevels.forEach(
    (profession, i) =>
      (professions[SKILL_MAP[i]] = parseFloat(profession.textContent))
  )
  const profession = professionGrid
    .querySelector('[class*="styles_chosen"]')
    .childNodes[0].nodeValue.toLowerCase()

  const classElem = card.querySelector('[class*="styles_class"]')
  const mainClass = classElem.childNodes[0].nodeValue.toLowerCase()
  const subClass = classElem.children[0].textContent.toLowerCase()

  const level = parseInt(
    card.querySelector('[class*="styles_level"]').textContent.split(' ')[1]
  )

  const rarity = card.querySelector('[class*="styles_cardRarity"]').textContent

  const statsHeader = card.querySelectorAll('h3')[0]
  statsHeader.innerHTML = `${statsHeader.innerText} <span style="font-size: 14px">(${statTotal})</span>`

  return {
    id,
    stats,
    professions,
    level,
    blueGene: statBoost2 || statBoostDouble,
    greenGene: statBoost1 || statBoostDouble,
    profession,
    mainClass,
    subClass,
    rarity,
  }
}
