export interface Item {
    name: string;
    cost: number;
    target: string,
    bonus: {
        val: number,
        stat: string,
    },
    disposable: boolean;
}
