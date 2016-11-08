import {TodoListComponent} from "./todolist.component";
import {TodoListHeaderComponent} from "./todolist-header.component";
import {TodoListFooterComponent} from "./todolist-footer.component";
import {TodoListListComponent} from "./todolist-list.component";
import {TodoListListItemComponent} from "./todolist-list-item.component";
import {TodoListListItemsComponent} from "./todolist-list-items.component";
import {TodoListListInput} from "./todolist-list-input.component";
import {TodoListFooterClearButtons} from "./todolist-footer-clear-buttons.component";
import {Todolist} from './providers/todolist';

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Storage} from "./providers/storage";
import {toUpperCasePipe} from "./pipes/toUpperCase.pipe";
import {FilterPipe} from "./pipes/filter.pipe";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListHeaderComponent,
        TodoListFooterComponent,
        TodoListFooterClearButtons,
        TodoListListComponent,
        TodoListListInput,
        TodoListListItemComponent,
        TodoListListItemsComponent,
        toUpperCasePipe,
        FilterPipe

    ],
    providers: [Storage, Todolist],
    imports: [BrowserModule],
    exports: [TodoListComponent]
})
export class TodoListModule {

}
