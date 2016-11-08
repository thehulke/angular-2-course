import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";
/**
 * Created by lior.gerstein on 08/11/2016.
 */

@Directive({
    selector: '[csIf]'
})
/**
 * An example for a custom directive
 */
export class CsIfDirective {

    private container;
    private template;

    constructor(container: ViewContainerRef, template: TemplateRef<any>) {
        this.container = container; // instancing the ViewContainerRef
        this.template = template; // instancing the TemplateRef
    }

    /**
     * Decorator for binding the class variable that is being sent to the setter,
     * if the `flag` var is set to true, then we render the template to the DOM
     * @param flag
     */
    @Input() set csIf(flag) {
        if (flag) {
            this.container.createEmbeddedView(this.template) // TemplateRef method for rendering the template.
        } else {
            this.container.clear(); // TemplateRef method for clearing the template.
        }

    }

}