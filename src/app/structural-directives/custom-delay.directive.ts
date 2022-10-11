import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[customDelay]'
})
export class CustomDelayDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  @Input() set customDelay(delay: number) {
    this.viewContainer.clear();
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }
}
