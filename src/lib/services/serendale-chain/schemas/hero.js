import { hexToNumber } from '@harmony-js/utils'
import {
  MainClass,
  Rarity,
  StatsGenesMap,
  VisualGenesMap,
  GenesMapping,
} from '../../../constants'

const STATS_NAMES = {
  STR: 'strength',
  DEX: 'dexterity',
  AGI: 'agility',
  VIT: 'vitality',
  END: 'endurance',
  INT: 'intelligence',
  WIS: 'wisdom',
  LCK: 'luck',
}

function kai2dec (kai) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
  return ALPHABET.indexOf(kai)
}

function genesToKai (genes) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
  // eslint-disable-next-line no-undef
  const BASE = BigInt(ALPHABET.length)

  let buf = ''
  while (genes >= BASE) {
    const mod = genes % BASE
    buf = ALPHABET[Number(mod)] + buf
    genes = (genes - mod) / BASE
  }

  // Add the last 4 (finally).
  buf = ALPHABET[Number(genes)] + buf

  // Pad with leading 0s.
  buf = buf.padStart(48, '1')

  return buf.replace(/(.{4})/g, '$1 ')
}

function convertGenes (_genes, genesMap) {
  // First, convert the genes to kai.
  // eslint-disable-next-line no-undef
  const rawKai = genesToKai(BigInt(_genes.toString()))
    .split(' ')
    .join('')

  const genes = [{}, {}, {}, {}]

  let geneType = 3
  // Remove spaces, and get every 4th character.
  for (const k in rawKai.split('')) {
    // eslint-disable-next-line no-prototype-builtins
    if (rawKai.hasOwnProperty(k)) {
      const trait = genesMap[Math.floor(Number(k) / 4)]

      const kai = rawKai[k]
      const valueNum = kai2dec(kai)

      genes[geneType--][trait] = GenesMapping[trait][valueNum]
      if (geneType < 0) geneType = 3
    }
  }

  return [genes[0], genes]
}

export function extractHeroData (hero) {
  const [statGenes, recessiveGenes] = convertGenes(
    hero.info.statGenes,
    StatsGenesMap
  )
  const [visualGenes, visualRecessiveGenes] = convertGenes(
    hero.info.visualGenes,
    VisualGenesMap
  )
  const heroData = {
    id: hero.id.toString(),
    mainClass: MainClass[hero.info.class].toLowerCase(),
    subClass: MainClass[hero.info.subClass].toLowerCase(),
    profession: statGenes.profession,
    rarity: Rarity[hero.info.rarity],
    level: hero.state.level * 1,
    greenGene: STATS_NAMES[statGenes.statBoost1],
    blueGene: STATS_NAMES[statGenes.statBoost2],
    generation: hero.info.generation * 1,
    xp: hero.state.xp * 1,
    hp: hero.stats.hp,
    mp: hero.stats.mp,
    statsGenes: statGenes,
    visualGenes: visualGenes,
    recessiveGenes: {
      stats: recessiveGenes,
      visual: visualRecessiveGenes,
    },
    professions_stats: {
      fishing: hero.professions.fishing,
      foraging: hero.professions.foraging,
      gardening: hero.professions.gardening,
      mining: hero.professions.mining,
    },
    stats: {
      dexterity: hero.stats.dexterity,
      endurance: hero.stats.endurance,
      intelligence: hero.stats.intelligence,
      vitality: hero.stats.vitality,
      wisdom: hero.stats.wisdom,
      strength: hero.stats.strength,
      agility: hero.stats.agility,
      luck: hero.stats.luck,
    },
  }

  // NOTE: Comment until know what to do with this data
  // heroData['stats'] = {}
  // heroData['pStatGrowth'] = {}
  // heroData['sStatGrowth'] = {}
  // for (const [stat, hexValue] of Object.entries(hero.primaryStatGrowth)) {
  //   heroData['pStatGrowth'][stat] = hexToNumber('0x' + hexValue)
  // }

  // for (const [stat, hexValue] of Object.entries(hero.secondaryStatGrowth)) {
  //   heroData['sStatGrowth'][stat] = hexToNumber('0x' + hexValue)
  // }

  // for (let stat of stats.values()) {
  //   heroData['stats'][stat] = hexToNumber('0x' + hero.stats[stat])
  // }

  return heroData
}
