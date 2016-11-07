import { Component, Input }from "@angular/core";
import {Item} from "./providers/item";

@Component({
  selector: "todolist-list-items",
  template: `
        <ul>
            <todolist-list-item *ngFor='let item of items' [item]="item"></todolist-list-item>
        </ul>
    `
})

export class TodoListListItemsComponent {

  @Input()
  public items: Item[]
};
