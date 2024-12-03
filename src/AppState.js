import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'
import { AutoUpgrade } from './models/AutoUpgrade.js'
import { Mine } from './models/Mine.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {Upgrade[]} */
upgrades: [
  new Upgrade({
    name: 'Axe',
    quantity: 0,
    price: 10,
    damage: 1,
    type: 'click',
    emoji: '🪓'
  }),
  new Upgrade({
    name: 'Chainsaw',
    quantity: 0,
    price: 100,
    damage: 10,
    type: 'click',
    emoji: '🪚'
  })
],

  /**@type {AutoUpgrade[]} */
  autoUpgrades: [
new AutoUpgrade({
  name: 'Lumberjack',
  quantity: 0,
  price: 1000,
  damage: 100,
  type: 'auto',
  emoji: '👨‍🚒'
}),
new AutoUpgrade({
  name: 'Wood Chipper',
  quantity: 0,
  price: 10000,
  damage: 1000,
  type: 'auto',
  emoji: '🔥'
})
],

/**@type {Mine} */
mine: 
  new Mine({
    clickCount: 1,
    autoCount: 0,
    woodCount: 0
  }),

  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})

