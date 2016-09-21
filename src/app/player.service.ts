import { Injectable } from '@angular/core';
import { Player } from './player';
import { Item } from './item'
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PlayerService {
    player: Player;
    private roundStartedSource = new Subject<boolean>();
    roundStarted$ = this.roundStartedSource.asObservable();

    constructor() {
        this.player = new Player(prompt('Name:') || 'Pidor', 1, 10, 0, 0);
        this.player.inventory.push({
            name: 'Heal Potion (+5)',
            cost: 5,
            disposable: true,
            bonus: {
                val: 5,
                stat: 'health',
            },
            target: 'player'
        });
    }

    getPlayer(): Player {
        return this.player;
    }

    savePlayer(player: Player): Player {
        this.player = player;
        return this.player;
    }

    startRound(started: boolean) {
        this.roundStartedSource.next(started);
    }
}
