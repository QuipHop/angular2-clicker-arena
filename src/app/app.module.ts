import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routing';

import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { ShelterComponent } from './shelter/shelter.component';
import { PlayerService } from './player.service';
import { MonsterService } from './monster.service';
import { ItemService } from './item.service';
import { ShopComponent } from './shop/shop.component';
import { TrainingComponent } from './training/training.component';
import { DisposablePipe } from './disposable.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ArenaComponent,
        ShelterComponent,
        ShopComponent,
        TrainingComponent,
        DisposablePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [PlayerService, MonsterService, ItemService],
    bootstrap: [AppComponent]
})
export class AppModule { }
