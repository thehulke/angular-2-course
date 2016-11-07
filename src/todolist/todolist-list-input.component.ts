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

    @Output()
    private itemAdded: EventEmitter<string>;

    constructor() {
        this.itemAdded = new EventEmitter();
    }

}