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
    abstract attack();
    heal(hp: number) {
        console.log(`${this.name} heals himself!`);
        if (this.health + hp < this.maxHealth) {
            this.health += hp;
        } else {
            console.log("Fully Restrored!")
            this.health = this.maxHealth;
        }
    };
    use(item, target){
        item.bonus.val >= 0 ? target[item.bonus.stat] += item.bonus.val : target[item.bonus.stat] -= item.bonus.stat;
        item.disposable ? target.inventory.splice(target.inventory.indexOf(item), 1) : null;
        target.inventory = target.inventory.slice();
    }
}
