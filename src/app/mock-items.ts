import { Item } from './item';

export const ITEMS: Item[] = [
    {
        id: 11,
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
        id: 12,
        name: 'Wooden Sword (+2)',
        cost: 10,
        target: 'player',
        bonus: {
            val: 2,
            stat: 'power',
        },
        disposable: false,
    },
    {
        id: 13,
        name: 'Leather Armon (+4)',
        cost: 20,
        target: 'player',
        bonus: {
            val: 4,
            stat: 'maxHealth',
        },
        disposable: false,
    }
]
