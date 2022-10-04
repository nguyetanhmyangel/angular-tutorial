import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private $progress!: number;

  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
      if (value < 0) {
        this.$progress = 0;
      } else {
        this.$progress = value;
      }
  }

  constructor() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if ('progress' in changes) {
  //     if (typeof changes['progress'].currentValue !== 'number') {
  //       const progress = Number(changes['progress'].currentValue);
  //       if (Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  // }


  ngOnInit(): void {
  }

}
