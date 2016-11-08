import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@Pipe({
    name: 'toUpper'
})
export class toUpperCasePipe implements PipeTransform{

    transform(value: string): string{
        return value.toUpperCase();
    }

}