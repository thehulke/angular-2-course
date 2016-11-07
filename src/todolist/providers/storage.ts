import {Injectable} from "@angular/core";
/**
 * Created by lior.gerstein on 07/11/2016.
 */

@Injectable()
export class Storage {

    public setItem(key: string, value: any): void {
        console.log(`saving ${key} and ${value}`);
    }

    public getItem(key: string): any {

    }
}