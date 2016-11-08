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
import {CsIfDirective} from "./directives/csif.directive";
import {DangerDirective} from "./directives/danger.directive";

/**
 * Decorator for instancing each module, here we import all of our child components, pipes, directives, providers
 * etc..
 */
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
        FilterPipe,
        CsIfDirective,
        DangerDirective

    ],
    providers: [Storage, Todolist], // Business logic.
    imports: [BrowserModule], // Web browser sync module.
    exports: [TodoListComponent] // for external use (such as parent module), this is the module to render.
})

/**
 * TodoListModule will need to be imported for use in the module that imports it.
 */
export class TodoListModule {

}
