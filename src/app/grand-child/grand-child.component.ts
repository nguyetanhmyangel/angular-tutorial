import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-grand-child',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  @Input() customer!:Customer

  constructor() {
    console.log("    GrandChildComponent:Contructed");
  }

  ngOnChanges() {
    console.log("    GrandChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("    GrandChildComponent:ngOnInit");
  }


  ngDoCheck() {
    console.log("    GrandChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("    GrandChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("    GrandChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("    GrandChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("    GrandChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("    GrandChildComponent:ngOnDestroy");
  }


}
