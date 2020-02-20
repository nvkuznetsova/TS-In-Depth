import { ShelfItem } from '../interfaces';

export default class<T extends ShelfItem> {
 private _items: Array<T> = [];

 add(item: T): void {
     this._items.push(item);
 }

 find(title: string): T {
     return this._items.find(item => item.title);
 }

 printTitle(): void {
     this._items.forEach(item => console.log(item.title));
 }
}