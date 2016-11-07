/**
 * Created by lior.gerstein on 07/11/2016.
 */

export class Item {
    public title: string;
    public done: boolean;

    constructor(title: string) {
        this,title = title;
        this.done = false;
    }

}