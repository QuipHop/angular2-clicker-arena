import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { ShelterComponent }      from './shelter/shelter.component';
import { ArenaComponent }      from './arena/arena.component';
import { ShopComponent }      from './shop/shop.component';
import { TrainingComponent }      from './training/training.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/shelter',
        pathMatch: 'full'
    },
    {
        path: 'shelter',
        component: ShelterComponent
    },
    {
        path: 'arena',
        component: ArenaComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'training',
        component: TrainingComponent
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
