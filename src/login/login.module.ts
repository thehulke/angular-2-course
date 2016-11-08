import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@NgModule({
  declarations: [LoginComponent],
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    exports: [LoginComponent]

})
export class LoginModule {

}