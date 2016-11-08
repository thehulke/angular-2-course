import {NgModule} from "@angular/core";
import {TodoListModule} from "../todolist/todolist.module";
import {TodoListComponent} from "../todolist/todolist.component";
import {LoginComponent} from "../login/login.component";
import {LoginModule} from "../login/login.module";

/**
 * Main module, here we connecting the module to the DOM.
 */
@NgModule({
  declarations: [],
  imports     : [TodoListModule, LoginModule],
  // the component for the DOM to bootstrap it, the <todolist> is needed in the index.html
  bootstrap   : [TodoListComponent, LoginComponent]
})

export class AppModule {}
