import {Component, Input}from "@angular/core";
import {Item} from "./providers/item";

@Component({
    selector: "todolist-list-item",
    template: `
    <li>
        <input type="checkbox" [checked]="item.done"/>
        {{item.title}}
        {{item.created}}
        <span>X</span>
    </li>
    `
})

export class TodoListListItemComponent {

    @Input() item: Item
}
