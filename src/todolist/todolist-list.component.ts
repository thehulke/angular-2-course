import {Component}from "@angular/core";
import {Todolist} from "./providers/todolist";


@Component({
    selector: "todolist-list",
    template: `
        <todolist-list-input (itemAdded)="_list.addItem($event)"></todolist-list-input>
        <todolist-list-items [items]="_list.items"></todolist-list-items>
    `
})

export class TodoListListComponent {

    private _list: Todolist;

    constructor(list: Todolist) {
        this._list = list;
    }
}
