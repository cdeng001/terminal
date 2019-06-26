import { RaceEnum, ClassEnum } from '../utils'

// First 7 heros are available as starting team
export const STARTER_HERO_INDEX = 6

export const HeroConfig = {
  'Urma Mudaba': {
    name: 'Urma Mudaba',
    race: RaceEnum.HUMAN,
    class: ClassEnum.FIGHTER,
    anatomy: 'Male',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: "I'm in, if the price is right."
    },
    skills: {
      startingSkills: [],
      skillTree: {}
    },
    feats: ['Thrifty', 'Heavy Hussler']
  },
  'Eys Van Hoss': {
    name: 'Eys Van Hoss',
    race: RaceEnum.HUMAN,
    class: ClassEnum.BARBARIAN,
    anatomy: 'Male',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: "I've got two arms, give me another weapon!"
    }
  },
  'Ellis Van Hoss': {
    name: 'Ellis Van Hoss',
    race: RaceEnum.HUMAN,
    class: ClassEnum.ROUGE,
    anatomy: 'Female',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: "Everyone's got a blind spot."
    }
  },
  "Kunk' Dhor": {
    name: "Kunk' Dhor",
    race: RaceEnum.ORC,
    class: ClassEnum.BARBARIAN,
    anatomy: 'Male',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: 'I go now, big fight!'
    }
  },
  Sheev: {
    name: 'Sheev',
    race: RaceEnum.GOBLIN,
    class: ClassEnum.ROUGE,
    anatomy: 'Male',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: "Watch where your goin' bub."
    }
  },
  'Hogard Mast': {
    name: 'Hogard Mast',
    race: RaceEnum.DWARF,
    class: ClassEnum.FIGHTER,
    anatomy: 'Male',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: 'Drinks on you, mate.'
    }
  },
  'Leneeve Listra': {
    name: 'Leneeve Listra',
    race: RaceEnum.WOODLANDELF,
    class: ClassEnum.WIZARD,
    anatomy: 'Female',
    baseAttributes: {
      strength: 0,
      vitality: 0,
      dexterity: 0,
      intelligence: 0,
      spirit: 0,
      charisma: 0,
      luck: 0,
      perception: 0,
      tolerance: 0
    },
    reputation: {},
    quotes: {
      display: 'Great magics at great costs.'
    }
  }
}

export const HeroConfigKeys = Object.keys(HeroConfig)
