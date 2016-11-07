import {NgModule} from "@angular/core";
import {TodoListModule} from "../todolist/todolist.module";
import {TodoListComponent} from "../todolist/todolist.component";

@NgModule({
  declarations: [],
  imports     : [TodoListModule],
  bootstrap   : [TodoListComponent]
})

export class AppModule {}
