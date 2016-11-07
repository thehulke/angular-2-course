import {Component} from "@angular/core";
import {Todolist} from "./providers/todolist";

@Component({
    selector: "todolist",
    template: `
    <todolist-header></todolist-header>
    <todolist-list></todolist-list>
    <todolist-footer></todolist-footer>
    `
})
export class TodoListComponent {
    constructor(todolist: Todolist) {
        console.log(todolist);
    }
}
