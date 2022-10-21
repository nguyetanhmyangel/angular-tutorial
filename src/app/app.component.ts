import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, from, fromEvent, Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `<button #btn>Button</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs tutorial';
  @ViewChild('btn', { static: true }) button!: ElementRef;

  buttonSubscription: any

  constructor(private elm: ElementRef) {
  }

  ngOnInit() {

    /*
      //Observable from Create Method
      const obsUsingCreate = Observable.create(function (observer: any) {
      observer.next('Observable from Create Method')
      observer.next('1')
      observer.next('2')
      observer.next('3')

      observer.complete()
      });

      obsUsingCreate.subscribe({
        next: (val: any) => { console.log(val) },
        error: () => { console.log('error') },
        complete: () => { console.log('complete') }
      })
    */

    /*
      //Observable Using Constructor
      const obsUsingConstructor = new Observable(observer => {
      observer.next('Observable Using Constructor')
      observer.next('1')
      observer.next('2')
      observer.next('3')

      observer.complete()
       })

       obsUsingConstructor.subscribe({
         next: (val: any) => { console.log(val) },
         error: () => { console.log('error') },
         complete: () => { console.log('complete') }
       })
    */

    //observable from an array
    // const array = [1, 2, 3, 4, 5, 6, 7]
    // const obsof1 = of(array);
    // obsof1.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    // const array1=[1,2,3,4,5,6,7]
    // const array2=['a','b','c','d','e','f','g']
    // const obsof2=of(array1,array2 );
    // obsof2.subscribe({
    //     next: (val: any) => { console.log(val) },
    //     error: () => { console.log('error') },
    //     complete: () => { console.log('complete') }
    //   })

    //observable from a sequence of numbers
    // const obsof3 = of(1, 2, 3);
    // obsof3.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //observable from string
    // const obsof4 = of('Hello', 'World');
    // obsof4.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //observable from a value, array & string
    // const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
    // obsof5.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //observable from an array
    // const array3 = [1, 2, 3, 4, 5, 6, 7]
    // const obsfrom1 = from(array3);
    // obsfrom1.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //Observable from string
    // const obsfrom2 = from('Hello World');
    // obsfrom2.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //Observable from collection
    // let myMap = new Map()
    // myMap.set(0, 'Hello')
    // myMap.set(1, 'World')
    // const obsFrom3 = from(myMap);
    // obsFrom3.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //Observable from iterable
    // const obsFrom4 = from(this.generateNos())
    // obsFrom4.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

    //Observable from promise
    // const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    // const obsFrom5 = from(promiseSource);
    // obsFrom5.subscribe({
    //   next: (val: any) => { console.log(val) },
    //   error: () => { console.log('error') },
    //   complete: () => { console.log('complete') }
    // })

  }

  // *generateNos() {
  //   var i = 0;
  //   while (i < 5) {
  //     i = i + 1;
  //     yield i;
  //   }
  // }

  ngAfterViewInit() {
    this.buttonClick();
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .pipe(debounceTime(300))
      .subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe()
  }

  //fromevent from scroll
  // scroll() {
  //   const source = fromEvent(window, 'scroll');
  //   source.subscribe(val => console.log(val));
  // }

  //fromevent from keyup


  // @ViewChild('name', { static: true }) name: ElementRef;

  // ngAfterViewInit() {
  //   fromEvent(this.name.nativeElement, 'keyup')
  //     .subscribe(res => console.log(res));
  // }


}
