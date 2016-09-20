import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
@Component({
    selector: 'app-shelter',
    templateUrl: './shelter.component.html',
    styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit, OnDestroy {

    player: Player;
    constructor(public playerService: PlayerService) {

    }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
    }

    ngOnDestroy(){
        this.playerService.savePlayer(this.player);
    }

    healPlayer(){
        this.player.heal(1);
    }
}
