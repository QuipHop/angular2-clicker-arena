import { Injectable } from '@angular/core';
import { Player } from './player';
import { Item } from './item'
import { Subject }    from 'rxjs/Subject';
import { ItemService } from './item.service';

@Injectable()
export class PlayerService {
    player: Player;
    private roundStartedSource = new Subject<boolean>();
    roundStarted$ = this.roundStartedSource.asObservable();

    constructor(private itemService: ItemService) {
        this.player = new Player('Ken', 1, 10, 5, 0);
        let item = this.itemService.findById(11);
        this.player.inventory.push(item);
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
