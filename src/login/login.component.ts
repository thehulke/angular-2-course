/**
 * Created by lior.gerstein on 08/11/2016.
 */
import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * Form Example with NgForms.
 */
@Component({
    selector: 'login',
    template: `
        <form [formGroup]="login" (ngSubmit)="send()">
            <input name="username" formControlName="username"  type="text" placeholder="User Name"/>
            <input name="password" formControlName="password"  type="password"  placeholder="Password"/>
            <button>Login</button>
        </form>
    `
})
export class LoginComponent {

    private login: FormGroup;
    private  username: FormControl;
    private password: FormControl;

    constructor() {

        this.username = new FormControl('', Validators.required);
        this.password = new FormControl();

        this.login = new FormGroup({
            username: this.username, // attaching username variable to the formControlName attribute
            password: this.password // attaching password variable to the formControlName attribute
        })
    }

    send(){
        console.log(this.login.value)
        console.log(this.login.valid)
    }
}



