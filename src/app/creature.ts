import { Item } from './item';
export abstract class Creature {
    name: string;
    health: number;
    maxHealth: number;
    damage: number;
    inventory: Item[];
    power: number;
    constructor(name, damage, maxHealth) {
        this.name = name;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.damage = damage;
        this.inventory = [];
        this.power = 0;
    }
    attack(bonus) {
        // this.inventory.forEach(item => {
        //     if (!item.disposable && item.bonus.stat == 'power') bonus += item.bonus.val;
        // });
        // console.log("BONUS POINTS: " + bonus);
        return this.damage + this.power;
    };
    heal(hp: number) {
        console.log(`${this.name} heals himself!`);
        if (this.health + hp < this.maxHealth) {
            this.health += hp;
        } else {
            console.log("Fully Restrored!")
            this.health = this.maxHealth;
        }
    };
    use(item, target) {
        target[item.bonus.stat] += item.bonus.val;
        item.disposable ? target.inventory.splice(target.inventory.indexOf(item), 1) : null;
        target.inventory = target.inventory.slice();
    }

    updateBonus(){
        this.inventory.forEach(item => {
            if (!item.disposable) this[item.bonus.stat] += item.bonus.val;
        });
    }
}
