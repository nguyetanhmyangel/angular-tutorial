import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[customColor]'
})
export class CustomColorDirective implements AfterViewInit {
  /* Angular custom directive can also accept input from the user. To accept input within directive we need to declare a property decorated with @Input(). We must use property name same as selector name. If we want to use different property name from selector name then use alias with @Input(). Now alias name will be same as selector name.
We will create a custom directive that will accept input from the user. Here for the example we will accept color as a user input. */
  @Input() customColor!: string;
  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = this.customColor;
  }
}
