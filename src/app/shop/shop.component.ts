import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Item } from '../item';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    itemList: Item[] = [
        {
            name: 'health potion(+5)',
            cost: 5,
            target: 'player',
            bonus: {
                val: 5,
                stat: 'health'
            },
            disposable: true,
        },
        {
            name: 'Wooden Sword (+2)',
            cost: 10,
            target: 'player',
            bonus: {
                val: 1,
                stat: 'power',
            },
            disposable: false,
        },
        {
            name: 'Leather Armon (+4)',
            cost: 20,
            target: 'player',
            bonus: {
                val: 4,
                stat: 'health',
            },
            disposable: false,
        }
    ];
    player: Player;
    constructor(private playerService: PlayerService) { }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
    }

    buy(item){
        if(this.player.gold >= item.cost){
            this.player.inventory.push(item);
        }
        return false;
    }
    sell(item){
        this.player.gold += item.cost;
        this.player.inventory.splice(this.player.inventory.indexOf(item), 1);
        return false;
    }
}
