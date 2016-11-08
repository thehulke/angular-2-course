import {Directive, ElementRef, Renderer} from "@angular/core";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@Directive({
    selector: '[danger]'
})
/**
 * Directive for setting the text color of an element to red.
 */
export class DangerDirective {

    private element: ElementRef; // instancing
    private renderer: Renderer; // instancing

    constructor(element: ElementRef, renderer: Renderer) {
        this.element = element;
        this.renderer = renderer;

        renderer.setElementStyle(element.nativeElement, 'color', 'red');
    }

}