import {NgModule} from "@angular/core";
import {TodoListModule} from "../todolist/todolist.module";
import {TodoListComponent} from "../todolist/todolist.component";

/**
 * Main module, here we connecting the module to the DOM.
 */
@NgModule({
  declarations: [],
  imports     : [TodoListModule],
  // the component for the DOM to bootstrap it, the <todolist> is needed in the index.html
  bootstrap   : [TodoListComponent]
})

export class AppModule {}
