import { Component } from '@angular/core';
import { filter, from, map, Observable, of, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs tutorial';
  data: any = [];

  observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.error(err),
    complete: () => console.log('Complete'),
  };

  //When you create an Observable with the constructor, you can just pass the type as a generic.
  obs = new Observable<number>((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  }).pipe(
    tap(data => console.log('tap: ' + data)),       //tap
    filter(data => data > 2),                      //filter
    tap(data => console.log('filter: ' + data)),    //tap
    map(val => { return val as number * 2 }),      //map
    tap(data => console.log('final: ' + data)),     //tap
  )

  srcArray = from([1, 2, 3, 4]);
  srcName$ = from(['John', 'Tom', 'Katy'])
  srcObject = from([
    { fName: 'Sachin', lName: "Tendulkar" },
    { fName: 'Rahul', lName: "Dravid" },
    { fName: 'Saurav', lName: "Ganguly" },
  ]);

  values = [
    {
      name: "John",
      age: 30
    },
    {
      name: "alex",
      age: 40
    }
  ];

  constructor() {
  }

  ngOnInit() {
    // ---map ---
    this.multiplyBy2();
    this.toUpperCase();
    this.MapToSingleProperty();
    this.multipleMaps();
    //---end ----

    //---filter ---
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter(val => {
          return val % 2 == 0;
        }),
      )
    //.subscribe(this.observer);

    from(this.values)
      .pipe(
        filter(val => {
          return val.age > 30;
        }),
      )
    //.subscribe(this.observer);
    // --- end ---

    //--- tab ----
    of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => {
          console.log("Before " + val);
        }),
        map(val => {
          if (val == 3) {
            throw Error;
          }
          return val + 5;
        }),
        tap(
          val => {
            console.log("After " + val);
          },
          err => {
            console.log("Tap Error");
            console.log(err);
          },
          () => {
            console.log("Tap Complete");
          }
        )
      )
      //.subscribe(val => console.log(val));
    //--- end ----

    //---  ----

    //--- end ----

    // this.obs.subscribe(
    //   val => {
    //     this.data.push(val)
    //     console.log('data: ', this.data)
    //   }
    // )



  }

  multiplyBy2() {
    this.srcArray
      .pipe(map(val => { return val * 2 }))
    //.subscribe(val => { console.log(val)})
    //.subscribe(this.observer)
  }


  multipleMaps() {
    this.srcArray
    .pipe(
      map(val => {
        return val + 10;
      }), // [1,2,3,4] => [11,12,13,14]
      map((val, i) => {
        return val*i* 2;
      })) // val*2 = [11,12,13,14] => [22,24,26,28] ; val*i*2 = [0,24,52,84]
    //.subscribe(val => { console.log(val) })
  }

  toUpperCase() {
    this.srcName$
      .pipe(map(data => {
        return data.toUpperCase();
      }))
    //.subscribe(this.observer)
  }

  MapToSingleProperty() {
    this.srcObject
      .pipe(map(data => { return (data.fName + ' ' + data.lName).toUpperCase() }))
    //.subscribe(this.observer)
  }
}


