import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        let amount = 0
        for (const item of this._items) {
            amount += item.price
        }
        return amount
    }

    totalPriceWithDisc(discount: number): number {
        let amount = 0
        for (const item of this._items) {
            amount += item.price
        }

        amount = amount * (1 - discount / 100)

        return amount
    }

    delete(id: number): void {
        this._items = this._items.filter(item => item.id != id)
    }
}