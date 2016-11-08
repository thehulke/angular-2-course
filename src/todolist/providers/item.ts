/**
 * Created by lior.gerstein on 07/11/2016.
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