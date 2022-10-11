import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[customDynamicColorOnEvent]'
})
export class CustomDynamicColorOnEventDirective {
  @Input('customDynamicColorOnEvent') dynamicColor!: string;
  @Input() defaultValue!: string;
  constructor(private elementRef: ElementRef) {
  }
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }
  private changeBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
