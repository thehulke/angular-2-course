import {Component, ViewEncapsulation}from "@angular/core";

@Component({
    // The ViewEncapsulation.Native allows us to attach the element to a shadow-DOM, which means there will be a default
    // style to the element which is LOCKED AND UN-Writable. Boom.
    encapsulation: ViewEncapsulation.Native,
    selector: "todolist-header",
    styles: [`
        h1 {
            color: DarkCyan;
        }
    `],
    template: `
        <h1 danger>Todos</h1>
        <h2 *csIf="varToSend" >Lior</h2>
    `
})

export class TodoListHeaderComponent {

    varToSend: boolean = false;

    /**
     * Checking that the bind actually happened.
     */
    constructor() {
        setTimeout(()=> this.varToSend = true, 3000)
    }
}
;
