import { Component, Directive, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  defaultProgress: number = 2;
  serializedPanes: string = '';
  show:boolean = true;

  // assign with template variable
  //@ViewChild('child') childComponent!: ChildComponent;
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ViewChild('cardHeader', { static: false }) headerText!: ElementRef;
  @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>;

  increment(): void {
    this.childComponent.incrementByOne();
  }

  decrement(): void {
    this.childComponent.decrementByOne();
  }


  ngOnInit() {
    //console.log('onInit', this.childComponent);
  }

  ngAfterViewInit() {
    //console.log(this.childComponent);
    this.headerText.nativeElement.innerHTML = "ViewChild Example";
    //this.headerText.nativeElement.style.color="red";
    this.headerText.nativeElement.setAttribute('style', 'color: red; font-weight: bold;');
    //console.log('onAfterViewInit', this.childComponent.progress);
    this.childComponents.changes.subscribe(console.log);
  }

}





