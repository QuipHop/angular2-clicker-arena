import { Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import { PlayerService } from '../player.service';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster';
import { Player } from '../player';
import { DisposablePipe } from '../disposable.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-arena',
    templateUrl: './arena.component.html',
    styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit, OnDestroy {
    player: Player;
    started: boolean = false;
    monster: Monster;
    resultMsg: string = '';
    roundLog: any[] = [];

    constructor(public playerService: PlayerService, public monsterService: MonsterService, private router: Router) {
        playerService.roundStarted$.subscribe(
            started => {
                // Do something
            });
    }

    ngOnInit() {
        this.player = this.playerService.getPlayer();
    }

    ngOnDestroy() {
        this.playerService.savePlayer(this.player);
    }

    toggleRound() {
        this.spawnMonster();
        this.roundLog = [];
        this.resultMsg = '';
        this.started = !this.started;
        this.playerService.startRound(this.started);
    }

    spawnMonster() {
        this.monster = this.monsterService.getMonster();
    }

    attack() {
        let playerTurn, monsterTurn;
        playerTurn = this.player.attack();
        monsterTurn = this.monster.attack();
        this.monster.health -= playerTurn;
        this.player.health -= monsterTurn;
        this.logRound(playerTurn, monsterTurn);
        this.checkResults();
    }

    checkResults() {
        if (this.player.health <= 0) {
            this.resultMsg = "You Are Dead :(";
            return false;
        }
        if (this.monster.health <= 0) {
            this.resultMsg = `Loot! ${this.monster.gold} gold! ${this.monster.maxHealth} exp!`;
        }
    }
    loot() {
        this.started = false;
        this.playerService.startRound(this.started);
        if (this.player.health <= 0) {
            this.player.health <= 0 ? this.router.navigate(['/shelter']) : null;

        } else {
            this.player.gold += this.monster.gold;
            this.player.exp += this.monster.maxHealth;
            this.player.inventory = this.player.inventory.concat(this.monster.inventory);
            this.player.updateBonus();
        }

    }

    logRound(t1, t2) {
        let date = new Date();
        let _date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        this.roundLog.unshift(`${_date} ; ${this.player.name} hit ${t1} damage! `, `${_date} ; ${this.monster.name} hit ${t2} damage!`);
    }

    useItem(item) {
        this.player.use(item, this[item.target]);
    }
}
