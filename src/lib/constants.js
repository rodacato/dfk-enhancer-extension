export const DFK_ENHANCER_SERVICE_URL =
  'https://dfk-enhancer-service.vercel.app'

export const HERO_CARD_ACTIVE_CLASS = 'dfk-ext-active'

export const STAT_ABBR_MAP = {
  strength: 'STR',
  dexterity: 'DEX',
  agility: 'AGI',
  vitality: 'VIT',
  endurance: 'END',
  intelligence: 'INT',
  wisdom: 'WIS',
  luck: 'LCK',
}

export const STATS_NAMES_MAP = {
  STR: 'strength',
  DEX: 'dexterity',
  AGI: 'agility',
  VIT: 'vitality',
  END: 'endurance',
  INT: 'intelligence',
  WIS: 'wisdom',
  LCK: 'luck',
}

// Extracted from https://docs.google.com/spreadsheets/d/1jfG6E6otW1V6ZLQycF5DumoBr_LrpQaz7cTmDPpwV2s/edit#gid=1814662006
const warrior = {
  strength: { primary: 75, secondary: 18.75 },
  dexterity: { primary: 70, secondary: 17.5 },
  agility: { primary: 50, secondary: 12.5 },
  vitality: { primary: 65, secondary: 16.25 },
  endurance: { primary: 65, secondary: 16.25 },
  intelligence: { primary: 20, secondary: 5 },
  wisdom: { primary: 20, secondary: 5 },
  luck: { primary: 35, secondary: 8.75 },
}

const knight = {
  strength: { primary: 70, secondary: 17.5 },
  dexterity: { primary: 55, secondary: 13.75 },
  agility: { primary: 45, secondary: 11.25 },
  vitality: { primary: 75, secondary: 18.75 },
  endurance: { primary: 75, secondary: 18.75 },
  intelligence: { primary: 20, secondary: 5 },
  wisdom: { primary: 25, secondary: 6.25 },
  luck: { primary: 35, secondary: 8.75 },
}

const thief = {
  strength: { primary: 55, secondary: 13.75 },
  dexterity: { primary: 55, secondary: 13.75 },
  agility: { primary: 70, secondary: 17.5 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 45, secondary: 11.25 },
  intelligence: { primary: 25, secondary: 6.25 },
  wisdom: { primary: 35, secondary: 8.75 },
  luck: { primary: 65, secondary: 16.25 },
}

const archer = {
  strength: { primary: 55, secondary: 13.75 },
  dexterity: { primary: 80, secondary: 20 },
  agility: { primary: 50, secondary: 12.5 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 60, secondary: 15 },
  intelligence: { primary: 40, secondary: 10 },
  wisdom: { primary: 25, secondary: 6.25 },
  luck: { primary: 40, secondary: 10 },
}

const priest = {
  strength: { primary: 30, secondary: 7.5 },
  dexterity: { primary: 30, secondary: 7.5 },
  agility: { primary: 40, secondary: 10 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 60, secondary: 15 },
  intelligence: { primary: 70, secondary: 17.5 },
  wisdom: { primary: 80, secondary: 20 },
  luck: { primary: 40, secondary: 10 },
}

const wizard = {
  strength: { primary: 30, secondary: 7.5 },
  dexterity: { primary: 30, secondary: 7.5 },
  agility: { primary: 40, secondary: 10 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 50, secondary: 12.5 },
  intelligence: { primary: 80, secondary: 20 },
  wisdom: { primary: 80, secondary: 20 },
  luck: { primary: 40, secondary: 10 },
}

const pirate = {
  strength: { primary: 70, secondary: 17.5 },
  dexterity: { primary: 70, secondary: 17.5 },
  agility: { primary: 50, secondary: 12.5 },
  vitality: { primary: 60, secondary: 15 },
  endurance: { primary: 55, secondary: 13.75 },
  intelligence: { primary: 20, secondary: 5 },
  wisdom: { primary: 20, secondary: 5 },
  luck: { primary: 55, secondary: 13.75 },
}

const monk = {
  strength: { primary: 60, secondary: 15 },
  dexterity: { primary: 60, secondary: 15 },
  agility: { primary: 60, secondary: 15 },
  vitality: { primary: 60, secondary: 15 },
  endurance: { primary: 55, secondary: 13.75 },
  intelligence: { primary: 25, secondary: 6.25 },
  wisdom: { primary: 50, secondary: 12.5 },
  luck: { primary: 30, secondary: 7.5 },
}

const berserker = {
  strength: { primary: 80, secondary: 20 },
  dexterity: { primary: 60, secondary: 15 },
  agility: { primary: 55, secondary: 13.75 },
  vitality: { primary: 65, secondary: 16.25 },
  endurance: { primary: 60, secondary: 15 },
  intelligence: { primary: 20, secondary: 5 },
  wisdom: { primary: 20, secondary: 5 },
  luck: { primary: 40, secondary: 10 },
}

const seer = {
  strength: { primary: 30, secondary: 7.5 },
  dexterity: { primary: 30, secondary: 7.5 },
  agility: { primary: 55, secondary: 13.75 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 50, secondary: 12.5 },
  intelligence: { primary: 70, secondary: 17.5 },
  wisdom: { primary: 80, secondary: 20 },
  luck: { primary: 35, secondary: 8.75 },
}

const paladin = {
  strength: { primary: 80, secondary: 20 },
  dexterity: { primary: 40, secondary: 10 },
  agility: { primary: 35, secondary: 8.75 },
  vitality: { primary: 80, secondary: 20 },
  endurance: { primary: 80, secondary: 20 },
  intelligence: { primary: 30, secondary: 7.5 },
  wisdom: { primary: 65, secondary: 16.25 },
  luck: { primary: 40, secondary: 10 },
}

const darkknight = {
  strength: { primary: 85, secondary: 21.25 },
  dexterity: { primary: 55, secondary: 13.75 },
  agility: { primary: 35, secondary: 8.75 },
  vitality: { primary: 75, secondary: 18.75 },
  endurance: { primary: 60, secondary: 15 },
  intelligence: { primary: 70, secondary: 17.5 },
  wisdom: { primary: 35, secondary: 8.75 },
  luck: { primary: 35, secondary: 8.75 },
}

const ninja = {
  strength: { primary: 50, secondary: 12.5 },
  dexterity: { primary: 75, secondary: 18.75 },
  agility: { primary: 85, secondary: 21.25 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 40, secondary: 10 },
  intelligence: { primary: 50, secondary: 12.5 },
  wisdom: { primary: 40, secondary: 10 },
  luck: { primary: 60, secondary: 15 },
}

const summoner = {
  strength: { primary: 45, secondary: 11.25 },
  dexterity: { primary: 45, secondary: 11.25 },
  agility: { primary: 50, secondary: 12.5 },
  vitality: { primary: 50, secondary: 12.5 },
  endurance: { primary: 50, secondary: 12.5 },
  intelligence: { primary: 85, secondary: 21.25 },
  wisdom: { primary: 85, secondary: 21.25 },
  luck: { primary: 40, secondary: 10 },
}

const shapeshifter = {
  strength: { primary: 65, secondary: 16.25 },
  dexterity: { primary: 70, secondary: 17.5 },
  agility: { primary: 80, secondary: 20 },
  vitality: { primary: 65, secondary: 16.25 },
  endurance: { primary: 55, secondary: 13.75 },
  intelligence: { primary: 25, secondary: 6.25 },
  wisdom: { primary: 45, secondary: 11.25 },
  luck: { primary: 45, secondary: 11.25 },
}

const dragoon = {
  strength: { primary: 80, secondary: 20 },
  dexterity: { primary: 65, secondary: 16.25 },
  agility: { primary: 65, secondary: 16.25 },
  vitality: { primary: 60, secondary: 15 },
  endurance: { primary: 70, secondary: 17.5 },
  intelligence: { primary: 50, secondary: 12.5 },
  wisdom: { primary: 60, secondary: 15 },
  luck: { primary: 50, secondary: 12.5 },
}

const sage = {
  strength: { primary: 40, secondary: 10 },
  dexterity: { primary: 40, secondary: 10 },
  agility: { primary: 75, secondary: 18.75 },
  vitality: { primary: 60, secondary: 15 },
  endurance: { primary: 50, secondary: 12.5 },
  intelligence: { primary: 90, secondary: 22.5 },
  wisdom: { primary: 90, secondary: 22.5 },
  luck: { primary: 55, secondary: 13.75 },
}

const dreadknight = {
  strength: { primary: 85, secondary: 21.25 },
  dexterity: { primary: 75, secondary: 18.75 },
  agility: { primary: 60, secondary: 15 },
  vitality: { primary: 65, secondary: 16.25 },
  endurance: { primary: 75, secondary: 18.75 },
  intelligence: { primary: 65, secondary: 16.25 },
  wisdom: { primary: 65, secondary: 16.25 },
  luck: { primary: 60, secondary: 15 },
}

// The two stats each profession has affinity
export const HeroProfessionStats = {
  mining: ['strength', 'endurance'],
  foraging: ['dexterity', 'intelligence'],
  gardening: ['wisdom', 'vitality'],
  fishing: ['luck', 'agility'],
}

// Sum of the two profession stats in the max and min case for each class/subclass
export const HeroProfessionChances = {
  mining: {
    // Wizard/Wizard
    mainClass: { max: 162, min: 80 },
    subClass: { max: 40.5, min: 20 },
  },
  foraging: {
    // Paladin/Paladin
    mainClass: { max: 140, min: 70 },
    subClass: { max: 35, min: 17.5 },
  },
  gardening: {
    // Archer/Archer
    mainClass: { max: 150, min: 75 },
    subClass: { max: 37.5, min: 18.75 },
  },
  fishing: {
    // Darkknight / Darkknight
    mainClass: { max: 145, min: 70 },
    subClass: { max: 36.25, min: 17.5 },
  },
}

export const HeroRarityProfessionMultiplier = {
  mining: {
    common: 0.5927795911,
    uncommon: 0.6058207421,
    rare: 0.6188618931,
    legendary: 0.6386607314,
    mythic: 0.6583410138,
  },
  foraging: {
    common: 0.5005181761,
    uncommon: 0.511529576,
    rare: 0.5225409759,
    legendary: 0.5392582829,
    mythic: 0.5558754864,
  },
  gardening: {
    common: 0.6447778008,
    uncommon: 0.6589629124,
    rare: 0.673148024,
    legendary: 0.6946836026,
    mythic: 0.7160902256,
  },
  fishing: {
    common: 0.068604358,
    uncommon: 0.7011365388,
    rare: 0.7162294976,
    legendary: 0.7391433531,
    mythic: 0.76192,
  },
}

export const HeroStatsGrowth = {
  warrior,
  knight,
  thief,
  archer,
  priest,
  wizard,
  monk,
  pirate,
  berserker,
  seer,
  paladin,
  darkknight,
  summoner,
  ninja,
  shapeshifter,
  dragoon,
  sage,
  dreadknight,
}

export const MainClass = {
  0: 'Warrior',
  1: 'Knight',
  2: 'Thief',
  3: 'Archer',
  4: 'Priest',
  5: 'Wizard',
  6: 'Monk',
  7: 'Pirate',
  8: 'Berserker',
  9: 'Seer',
  10: 'Paladin',
  11: 'DarkKnight',
  12: 'Summoner',
  13: 'Ninja',
  16: 'Paladin',
  17: 'DarkKnight',
  18: 'Summoner',
  19: 'Ninja',
  20: 'ShapeShifter',
  '1c': 'DreadKnight',
  24: 'Dragoon',
  25: 'Sage',
  28: 'DreadKnight',
}

export const StatsGenesMap = {
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

export const VisualGenesMap = {
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

export const Rarity = ['common', 'uncommon', 'rare', 'legendary', 'mythic']

export const GenesMapping = {
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
    8: 'Berserker',
    9: 'Seer',
    16: 'Paladin',
    17: 'DarkKnight',
    18: 'Summoner',
    19: 'Ninja',
    20: 'ShapeShifter',
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
