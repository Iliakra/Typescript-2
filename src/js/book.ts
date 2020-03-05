import Buyable from './interface';

export default class Book implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly author: string,
        readonly genre: string,
        readonly pages: number,
        readonly price: number,

    ) {}
}