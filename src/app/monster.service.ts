import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { ItemService } from './item.service';

@Injectable()
export class MonsterService {
    monster: Monster;
    names = ['Ghul', 'Goblin', 'Rat', 'Orc', 'Gremlin', 'Bear', 'one-eyed Hobbit', 'Homeless Knight'];
    wave: number = 1;
    constructor(private itemService : ItemService) { }

    getMonster(): Monster {
        this.monster = new Monster(
            this.names[Math.floor(Math.random() * this.names.length)], //name
            Math.floor(Math.random()  * 1.5 + this.wave), //damage
            Math.floor(Math.random() * 5) + (this.wave * 2), //maxhealth
            Math.floor(Math.random() * 10 * this.wave) //gold
        );
        //TODO: inventory fill with another items
        if(this.wave >= 3) this.monster.inventory.push(this.itemService.findById(12));
        this.wave++;
        return this.monster;
    }

    saveMonster(monster: Monster): Monster {
        this.monster = monster;
        return this.monster;
    }
}
