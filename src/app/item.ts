export interface Item {
    name: string;
    cost: number;
    bonus: {
        val: number,
        stat: string
    },
    disposable: boolean;
}
