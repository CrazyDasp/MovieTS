export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly ruTitle?: string,
    readonly price: number,
    readonly releaseYear?: number,
    readonly country?: string,
    readonly slogan?: string,
    readonly genres?: any[],
    readonly duration?: number
}