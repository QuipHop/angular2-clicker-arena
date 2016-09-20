import { Injectable } from '@angular/core';
import { Monster } from './monster'

@Injectable()
export class MonsterService {
    monster: Monster;
    names = ['Ghul', 'Goblin', 'Poogachova', 'Orc', 'Gremlin', 'Giga Niga'];

    constructor(){

    }
    getMonster(): Monster {
        this.monster = new Monster(
            this.names[Math.floor(Math.random() * this.names.length)], //name
            Math.floor(Math.random() * 5) + 1, //damage
            Math.floor(Math.random() * 20) + 5, //maxhealth
            Math.floor(Math.random() * 20) + 1 //gold
        );
        return this.monster;
    }
    
    saveMonster(monster: Monster): Monster {
        this.monster = monster;
        return this.monster;
    }
}
