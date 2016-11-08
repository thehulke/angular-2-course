import {Component, EventEmitter, Output} from "@angular/core";


@Component({
    selector: `todolist-list-input`,
    template: `
        <input 
        #itemBox 
        (keydown.enter)="itemAdded.emit(itemBox.value)" 
        type="text" placeholder="add item..."
        />
    `
})

export class TodoListListInput {

    /**
     * Output decorator is used for 2 way data binding, the side which accept this should have @Input() decorator
     */
    @Output()
    private itemAdded: EventEmitter<string>;

    constructor() {
        this.itemAdded = new EventEmitter();
    }

}