export const extractHeroClass = function (classType, value) {
  const className = GenesMapping[classType][value]

  return className && className.toLowerCase()
}

export const extractHeroRarity = function (value) {
  return Rarity[value]
}

export const extractSkillGenes = function (genesString) {
  // First, convert the genes to kai.
  const rawKai = genesToKai(BigInt(genesString.toString()))
    .split(' ')
    .join('')

  const genes = {}
  const Dominant = {}
  const R1 = {}
  const R2 = {}
  const R3 = {}
  const genePoolArray = []

  // Remove spaces, and get every 4th character.
  for (const k in rawKai.split('')) {
    if (rawKai.hasOwnProperty(k)) {
      const trait = StatsGenesMap[Math.floor(Number(k) / 4)]

      const kai = rawKai[k]
      const valueNum = kai2dec(kai)

      genes[trait] = GenesMapping[trait][valueNum]
      genePoolArray.push(genes[trait])

      for (let i = 0; i < genePoolArray.length; i++) {
        if (
          i == 0 ||
          i == 4 ||
          i == 8 ||
          i == 12 ||
          i == 16 ||
          i == 20 ||
          i == 24 ||
          i == 28 ||
          i == 32 ||
          i == 36 ||
          i == 40
        ) {
          R3[trait] = genePoolArray[i]
        } else if (
          i == 1 ||
          i == 5 ||
          i == 9 ||
          i == 13 ||
          i == 17 ||
          i == 21 ||
          i == 25 ||
          i == 29 ||
          i == 33 ||
          i == 37 ||
          i == 41
        ) {
          R2[trait] = genePoolArray[i]
        } else if (
          i == 2 ||
          i == 6 ||
          i == 10 ||
          i == 14 ||
          i == 18 ||
          i == 22 ||
          i == 26 ||
          i == 30 ||
          i == 34 ||
          i == 38 ||
          i == 42
        ) {
          R1[trait] = genePoolArray[i]
        } else if (
          i == 3 ||
          i == 7 ||
          i == 11 ||
          i == 15 ||
          i == 19 ||
          i == 23 ||
          i == 27 ||
          i == 31 ||
          i == 35 ||
          i == 39 ||
          i == 43
        ) {
          Dominant[trait] = genePoolArray[i]
        }
      }
    }
  }
  var result = {
    d: Dominant,
    r1: R1,
    r2: R2,
    r3: R3,
  }
  return result
}

function kai2dec (kai) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
  return ALPHABET.indexOf(kai)
}

function genesToKai (genes) {
  const ALPHABET = '123456789abcdefghijkmnopqrstuvwx'
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

const StatsGenesMap = {
  0: 'class',
  1: 'subClass',
  2: 'profession',
  3: 'passive1',
  4: 'passive2',
  5: 'active1',
  6: 'active2',
  7: 'statBoost1',
  8: 'statBoost2',
  9: 'statsUnknown1',
  10: 'element',
  11: 'statsUnknown2',
}

const VisualGenesMap = {
  0: 'gender',
  1: 'headAppendage',
  2: 'backAppendage',
  3: 'background',
  4: 'hairStyle',
  5: 'hairColor',
  6: 'visualUnknown1',
  7: 'eyeColor',
  8: 'skinColor',
  9: 'appendageColor',
  10: 'backAppendageColor',
  11: 'visualUnknown2',
}

const Rarity = ['common', 'uncommon', 'rare', 'legendary', 'mythic']

const GenesMapping = {
  gender: { 1: 'male', 3: 'female' },
  background: {
    0: 'desert',
    2: 'forest',
    4: 'plains',
    6: 'island',
    8: 'swamp',
    10: 'mountains',
    12: 'city',
    14: 'arctic',
  },
  class: {
    0: 'Warrior',
    1: 'Knight',
    2: 'Thief',
    3: 'Archer',
    4: 'Priest',
    5: 'Wizard',
    6: 'Monk',
    7: 'Pirate',
    16: 'Paladin',
    17: 'DarkKnight',
    18: 'Summoner',
    19: 'Ninja',
    24: 'Dragoon',
    25: 'Sage',
    28: 'DreadKnight',
  },
  skinColor: {
    0: 'c58135',
    2: 'f1ca9e',
    4: '985e1c',
    6: '57340c',
    8: 'e6a861',
    10: '7b4a11',
    12: 'e5ac91',
    14: 'aa5c38',
  },
  hairColor: {
    0: 'ab9159',
    1: 'af3853',
    2: '578761',
    3: '068483',
    4: '48321e',
    5: '66489e',
    6: 'ca93a7',
    7: '62a7e6',
    16: 'd7bc65',
    17: '9b68ab',
    18: '8d6b3a',
    19: '566377',
    24: '880016',
    25: '353132',
    28: '8f9bb3',
  },
  eyeColor: {
    0: '203997',
    2: '896693',
    4: 'bb3f55',
    6: '0d7634',
    8: '8d7136',
    10: '613d8a',
    12: '2494a2',
    14: 'a41e12',
  },
  appendageColor: {
    0: 'c5bfa7',
    1: 'a88b47',
    2: '58381e',
    3: '566f7d',
    4: '2a386d',
    5: '3f2e40',
    6: '830e18',
    7: '6f3a3c',
    16: '6b173c',
    17: 'a0304d',
    18: '78547c',
    19: '352a51',
    24: 'c29d35',
    25: '211f1f',
    28: 'd7d7d7',
  },
  backAppendageColor: {
    0: 'c5bfa7',
    1: 'a88b47',
    2: '58381e',
    3: '566f7d',
    4: '2a386d',
    5: '3f2e40',
    6: '830e18',
    7: '6f3a3c',
    16: '6b173c',
    17: 'a0304d',
    18: '78547c',
    19: '352a51',
    24: 'c29d35',
    25: '211f1f',
    28: 'd7d7d7',
  },
  hairStyle: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  backAppendage: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  headAppendage: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  subClass: {
    0: 'Warrior',
    1: 'Knight',
    2: 'Thief',
    3: 'Archer',
    4: 'Priest',
    5: 'Wizard',
    6: 'Monk',
    7: 'Pirate',
    16: 'Paladin',
    17: 'DarkKnight',
    18: 'Summoner',
    19: 'Ninja',
    24: 'Dragoon',
    25: 'Sage',
    28: 'DreadKnight',
  },
  profession: {
    0: 'mining',
    2: 'gardening',
    4: 'fishing',
    6: 'foraging',
  },
  passive1: {
    0: 'Basic1',
    1: 'Basic2',
    2: 'Basic3',
    3: 'Basic4',
    4: 'Basic5',
    5: 'Basic6',
    6: 'Basic7',
    7: 'Basic8',
    16: 'Advanced1',
    17: 'Advanced2',
    18: 'Advanced3',
    19: 'Advanced4',
    24: 'Elite1',
    25: 'Elite2',
    28: 'Transcendent1',
  },
  passive2: {
    0: 'Basic1',
    1: 'Basic2',
    2: 'Basic3',
    3: 'Basic4',
    4: 'Basic5',
    5: 'Basic6',
    6: 'Basic7',
    7: 'Basic8',
    16: 'Advanced1',
    17: 'Advanced2',
    18: 'Advanced3',
    19: 'Advanced4',
    24: 'Elite1',
    25: 'Elite2',
    28: 'Transcendent1',
  },
  active1: {
    0: 'Basic1',
    1: 'Basic2',
    2: 'Basic3',
    3: 'Basic4',
    4: 'Basic5',
    5: 'Basic6',
    6: 'Basic7',
    7: 'Basic8',
    16: 'Advanced1',
    17: 'Advanced2',
    18: 'Advanced3',
    19: 'Advanced4',
    24: 'Elite1',
    25: 'Elite2',
    28: 'Transcendent1',
  },
  active2: {
    0: 'Basic1',
    1: 'Basic2',
    2: 'Basic3',
    3: 'Basic4',
    4: 'Basic5',
    5: 'Basic6',
    6: 'Basic7',
    7: 'Basic8',
    16: 'Advanced1',
    17: 'Advanced2',
    18: 'Advanced3',
    19: 'Advanced4',
    24: 'Elite1',
    25: 'Elite2',
    28: 'Transcendent1',
  },
  statBoost1: {
    0: 'STR',
    2: 'AGI',
    4: 'INT',
    6: 'WIS',
    8: 'LCK',
    10: 'VIT',
    12: 'END',
    14: 'DEX',
  },
  statBoost2: {
    0: 'STR',
    2: 'AGI',
    4: 'INT',
    6: 'WIS',
    8: 'LCK',
    10: 'VIT',
    12: 'END',
    14: 'DEX',
  },
  element: {
    0: 'fire',
    2: 'water',
    4: 'earth',
    6: 'wind',
    8: 'lightning',
    10: 'ice',
    12: 'light',
    14: 'dark',
  },
  visualUnknown1: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  visualUnknown2: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  statsUnknown1: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
  statsUnknown2: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    24: 24,
    25: 25,
    28: 28,
  },
}
