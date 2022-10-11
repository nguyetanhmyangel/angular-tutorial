import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
     selector: '[customDefaultTheme]'
})
export class CustomDefaultThemeDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef) {
    }
	ngAfterViewInit(): void {
       this.elementRef.nativeElement.style.color = 'blue';
	   this.elementRef.nativeElement.style.fontSize = '20px';
	}
}
