import { Component, Input} from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Clicker Demo';
    roundStarted: any;
    links = [
        {
            href: '/arena',
            name: 'Arena'
        },
        {
            href: '/shelter',
            name: 'Shelter'
        },
        {
            href: '/shop',
            name: 'Shop'
        },
        {
            href: '/training',
            name: 'Training Yard'
        }
    ];
    subscription: Subscription;
    player: Player;
    constructor(public playerService: PlayerService) {
        this.subscription = playerService.roundStarted$.subscribe(
            roundStarted => {
                this.roundStarted = roundStarted;
            });
    }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
    }

    ngOnDestroy() {
      // prevent memsory leak when component destroyed
      this.subscription.unsubscribe();
    }
}
