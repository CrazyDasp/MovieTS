import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly enTitle: string,
        readonly ruTitle: string,
        readonly releaseYear: number,
        readonly country: string,
        readonly slogan: string,
        readonly genres: any[],
        readonly duration: number
    ) { }
}