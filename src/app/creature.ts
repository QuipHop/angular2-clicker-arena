import { Item } from './item';
export abstract class Creature {
    name: string;
    health: number;
    maxHealth: number;
    damage: number;
    inventory: Item[];
    constructor(name,damage, maxHealth) {
        this.name = name;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.damage = damage;
        this.inventory = [];
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
}
