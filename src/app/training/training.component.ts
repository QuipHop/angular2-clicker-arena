import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

    player: Player;
    constructor(private playerService: PlayerService) { }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
    }

    updateStat(stat:string){
        if(this.player.exp > 0)this.player.updateStat(stat);
    }
}
