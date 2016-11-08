import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['login']">Login</a>
        <a [routerLink]="['todolist']">TodoList</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {

}
