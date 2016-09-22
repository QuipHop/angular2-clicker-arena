import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {

    constructor() { }

    getItems(): Item[] {
        return ITEMS;
    }

    findById(id: number) {
        return ITEMS.find((value:Item):any => {
            console.log("VAL", value, id);
            return value.id == id;
        });
    }
}
