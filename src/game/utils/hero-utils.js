import {
  STARTER_HERO_INDEX,
  HeroConfig,
  HeroConfigKeys
} from './configs/hero-config'
import { getRandomInt } from './utils'

export const getStartChoices = () => {
  const starters = []
  while (starters.length < 3) {
    const i = getRandomInt(0, STARTER_HERO_INDEX)
    if (starters.indexOf(i) === -1) starters.push(i)
  }

  return starters.map(index => HeroConfig[HeroConfigKeys[index]])
}

export const getHeroData = name => {
  return HeroConfig[name]
}
