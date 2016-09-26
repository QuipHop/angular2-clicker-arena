import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ItemService } from '../item.service';
import { Player } from '../player';
import { Item } from '../item';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    itemList: Item[] = [];
    player: Player;
    constructor(private playerService: PlayerService, private itemService: ItemService) { }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
        this.itemList = this.itemService.getItems();
    }

    ngOnDestroy() {
        this.playerService.savePlayer(this.player);
    }
    buy(item) {
        if (this.player.gold >= item.cost) {
            this.player.inventory.push(item);
            this.player.gold -= item.cost;
            this.player.updateBonus(item);
        }
        return false;
    }
    sell(item) {
        this.player.gold += item.cost;
        this.player.updateBonus(item, true);
        this.player.inventory.splice(this.player.inventory.indexOf(item), 1);
        return false;
    }

}
