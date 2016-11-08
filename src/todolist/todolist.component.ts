import {Component} from "@angular/core";
import {Todolist} from "./providers/todolist";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "todolist",
    template: `
    <todolist-header></todolist-header>
    <todolist-list></todolist-list>
    <todolist-footer></todolist-footer>
    `
})
export class TodoListComponent {

    constructor(todolist: Todolist, router: ActivatedRoute) {
        console.log(todolist);

        // Subscribing to the router query params for later use.
        router.queryParams.subscribe( (params) => console.log(params) )
    }
}
