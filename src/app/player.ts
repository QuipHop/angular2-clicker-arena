import {Creature} from './creature';
export class Player extends Creature {
    gold: number;
    exp: number;
    constructor(name, damage, maxHealth, gold, exp) {
        super(name, damage, maxHealth);
        this.gold = gold;
        this.exp = exp;
    }
    attack(bonus = 0): number {
        return this.damage;
    };
    heal(hp) {
        super.heal(hp);
    };

    use(item, target){
        super.use(item, target);
    }
}
