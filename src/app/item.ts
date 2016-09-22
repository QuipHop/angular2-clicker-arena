export interface Item {
    id: number,
    name: string;
    cost: number;
    target: string,
    bonus: {
        val: number,
        stat: string,
    },
    disposable: boolean;
}
