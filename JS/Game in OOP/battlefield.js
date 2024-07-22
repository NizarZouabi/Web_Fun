import Character from './character.js'
import Weapon from './weapons.js'

let John = new Character('John', 10, 220, 200)
let Jane = new Character('Jane', 10, 160, 200)

let flames = new Weapon('Flame Sword', 'Sword', 3, 10)
let sacred_light = new Weapon('Sacred Staff', 'Staff', 1.5, 6)

John.pickup_weapon(flames)
John.equip_weapon(0)
John.attack(Jane)
Jane.pickup_weapon(sacred_light)
Jane.equip_weapon(0)

console.log(John, Jane)
