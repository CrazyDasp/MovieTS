export default interface Buyable {
    readonly id?: number,
    readonly name?: string,
    readonly price?: number,
    readonly enTitle?: string,
    readonly ruTitle?: string,
    readonly releaseYear?: number,
    readonly country?: string,
    readonly slogan?: string,
    readonly genres?: any[],
    readonly duration?: number
}