import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@Pipe({
    name: 'filterArr'
})
export class FilterPipe implements PipeTransform {

    transform(arr: any[], key:string, value:any): any[]{
        return arr.filter( item => item[key] === value);
    }
}