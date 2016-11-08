/**
 * Created by lior.gerstein on 07/11/2016.
 */


/**
 * Simple class that builds a new Item instances.
 * See that we don't have any imports in this file.
 */
export class Item {

    public title: string;
    public done: boolean;
    public created: Date;

    constructor(title: string, done?: boolean) {

        this.title = title;
        this.done = false;
        this.created = new Date();
    }

}