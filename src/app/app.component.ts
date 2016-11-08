import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <a href="login">Login</a>
        <a href="todolist">TodoList</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {

}
