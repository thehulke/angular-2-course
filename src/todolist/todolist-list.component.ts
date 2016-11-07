import {Component}from "@angular/core";
import {Todolist} from "./providers/todolist";



@Component({
    selector: "todolist-list",
    template: `
        <todolist-list-input></todolist-list-input>
        <todolist-list-items></todolist-list-items>
    `
})

export class TodoListListComponent {

    constructor(todolist: Todolist) {

    }
}
