/**
 * Created by lior.gerstein on 07/11/2016.
 */

import {Item} from './item';
import {Storage} from "./storage";
import {Injectable} from "@angular/core";

@Injectable()
export class Todolist {

    private _items: Item[];
    public items: Item[];
    private store: Storage;

    constructor(store: Storage) {
        this.items = [];
        this.store = store;
    }

    public addItem(title: string): void {
        this.items.push(new Item(title))
        this.store.setItem('ITEMS', this.items);
    }

    // get items(){
    //     return this._items;
    // }

    public removeItem(item: Item): void {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.store.setItem('ITEMS', this.items);
    }
}

