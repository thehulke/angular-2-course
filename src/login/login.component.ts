/**
 * Created by lior.gerstein on 08/11/2016.
 */
import {Component} from "@angular/core";


@Component({
    selector: 'login',
    template: `
        <form>
            <input type="text" placeholder="User Name">
            <input type="password" placeholder="Password">
            <button>Login</button>
        </form>
    `
})
export class LoginComponent {

}



