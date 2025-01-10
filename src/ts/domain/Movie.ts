import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly ruTitle: string,
        readonly price: number,
        readonly releaseYear: number,
        readonly country: string,
        readonly slogan: string,
        readonly genres: any[],
        readonly duration: number
    ) { }
}