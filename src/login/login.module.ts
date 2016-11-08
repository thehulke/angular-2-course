import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@NgModule({
  declarations: [LoginComponent],
    imports: [BrowserModule],
    exports: [LoginComponent]

})
export class LoginModule {

}