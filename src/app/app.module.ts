import {NgModule} from "@angular/core";
import {TodoListModule} from "../todolist/todolist.module";
import {TodoListComponent} from "../todolist/todolist.component";
import {LoginComponent} from "../login/login.component";
import {LoginModule} from "../login/login.module";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

/**
 * Main module, here we connecting the module to the DOM.
 */
@NgModule({
    declarations: [AppComponent],
    imports: [TodoListModule, LoginModule, RouterModule.forRoot(routes)],
    // the component for the DOM to bootstrap it, the <todolist> is needed in the index.html
    bootstrap: [AppComponent]
})

export class AppModule {
}
