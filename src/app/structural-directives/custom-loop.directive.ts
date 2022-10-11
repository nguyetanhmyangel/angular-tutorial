import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
     selector: '[customLoop]'
})
export class CustomLoopDecorator {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input('customLoop') set loop(num: number) {
		for(var i=0; i < num; i++) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}
}
