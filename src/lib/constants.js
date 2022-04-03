export const DFK_ENHANCER_SERVICE_URL =
  'https://dfk-enhancer-service.global.ssl.fastly.net'

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

export const AdvanceClasses = ['summoner', 'ninja', 'paladin', 'darkknight']

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

export const KingdomWatchRarityMultiplierPct = {
  common: 0,
  uncommon: 25 / 5,
  rare: 50 / 5,
  legendary: 87.5 / 5,
  mythic: 125 / 5,
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
  paladin,
  darkknight,
  summoner,
  ninja,
  dragoon,
  sage,
  dreadknight,
}
