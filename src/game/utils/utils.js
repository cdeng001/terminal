export const RaceEnum = {
  HUMAN: 'Human',
  MERFOLK: 'Merfolk',
  AVIAN: 'Avian',
  LIZARDMEN: 'Lizardmen',
  KOBOLD: 'Kobold',
  DRAGONKIN: 'Dragonkin',
  DWARF: 'Dwarf',
  WOODLANDELF: 'Woodland Elf',
  SEAELF: 'Sea Elf',
  ORC: 'Orc',
  GOBLIN: 'Goblin',
  MINOTUAR: 'Minotuar',
  CENTUAR: 'Centuar',
  FEY: 'Fey'
}

export const RaceConfig = {
  [RaceEnum.HUMAN]: {
    tribes: []
  },
  [RaceEnum.MERFOLK]: {
    tribes: []
  },
  [RaceEnum.AVIAN]: {
    tribes: []
  },
  [RaceEnum.LIZARDMEN]: {
    tribes: []
  },
  [RaceEnum.KOBOLD]: {
    tribes: []
  },
  [RaceEnum.DRAGONKIN]: {
    tribes: []
  },
  [RaceEnum.DWARF]: {
    tribes: []
  },
  [RaceEnum.WOODLANDELF]: {
    tribes: []
  },
  [RaceEnum.SEAELF]: {
    tribes: []
  },
  [RaceEnum.ORC]: {
    tribes: []
  },
  [RaceEnum.GOBLIN]: {
    tribes: []
  },
  [RaceEnum.MINOTUAR]: {
    tribes: []
  },
  [RaceEnum.CENTUAR]: {
    tribes: []
  },
  [RaceEnum.FEY]: {
    tribes: []
  }
}

export const ClassEnum = {
  BARBARIAN: 'Barbarian', // aggressive, wild street fighter, high output
  BARD: 'Bard', // use of artistic talent to enduce magics
  CLERIC: 'Cleric', // use of spirit to use divine and curative magic, supportive
  DRUID: 'Druid', // connection with nature
  FIGHTER: 'Fighter', // classically trained in combat, great strength
  MONK: 'Monk', // dextrous and agile fighter. quick reflexes
  PALADIN: 'Paladin', // crusader and divine spell caster, combat
  RANGER: 'Ranger', // espionage, hunter, hermit. largely ranged
  ROUGE: 'Rouge', // sneaky combat and nimble tricks
  SORCERER: 'Sorcerer', // cast magics from born gift, innate magic
  WARLOCK: 'Warlock', // casts magics from a pact with magic entity
  WIZARD: 'Wizard' // casts magics from a magic conduit (staff, orb). studied magics
}

export const ClassConfig = {
  [ClassEnum.BARBARIAN]: {},
  [ClassEnum.BARD]: {},
  [ClassEnum.CLERIC]: {},
  [ClassEnum.DRUID]: {},
  [ClassEnum.FIGHTER]: {},
  [ClassEnum.MONK]: {},
  [ClassEnum.PALADIN]: {},
  [ClassEnum.RANGER]: {},
  [ClassEnum.ROUGE]: {},
  [ClassEnum.SORCERER]: {},
  [ClassEnum.WARLOCK]: {},
  [ClassEnum.WIZARD]: {}
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
