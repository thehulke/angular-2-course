import {LoginComponent} from "../login/login.component";
import {TodoListComponent} from "../todolist/todolist.component";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

export const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'todolist', component: TodoListComponent }
];