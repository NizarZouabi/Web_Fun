class Character {
    constructor(name, level, strength, stamina, health, isAlive, weapons, equiped){
        this.name = name
        this.strength = strength
        this.stamina = stamina
        this.health = 1500
        this.level = level
        this.isAlive = true
        this.weapons = []
        this.equiped = null
    }

    equip_weapon = (wp_idx) => {
        this.equiped = this.weapons[wp_idx]
        return this
    }

    pickup_weapon = (weapon) => {
        this.weapons.push(weapon)
        return this
    }

    attack = (target) => {
        target.health -= this.equiped.damage_multiplier * this.strength
    }
}

export default Character