import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";


import 'rxjs/add/operator/do';
import { Observable, tap } from "rxjs";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req);
  }

  intercept1(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //const token = 'sdsd sd sdsdsd';

    //req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)
    //                });


    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });

    console.log(req.headers.get('Accept'));

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') })

    console.log(req.headers.get('Accept'));

    req = req.clone({
      headers: req.headers.delete('Content-Type', 'application/json')
    });
    req = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });

    console.log(req);
    return next.handle(req);
  }



  intercept2(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //req = req.clone({ headers: req.headers.set('Content-Type', 'application/json')
    //                });

    req = req.clone({
      headers: req.headers.append('Content-Type', 'application/json')
    });

    console.log(req);
    const started = Date.now();

    // old version
    // return next.handle(req)
    // .do((event: any) => {
    //     if (event instanceof HttpResponse) {
    //       const elapsed = Date.now() - started;
    //       console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
    //     };
    // });

    return next.handle(req).pipe(
      tap(
        (event: any) => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
          };
        }
      )
    );
  }

  //logging
  intercept3(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
    const started = Date.now();
    return next.handle(req).pipe(
      tap(
        event => {
          console.log(event);
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
          if (event instanceof HttpResponse) {
            console.log(`Response Received`);
          };
        }
      )
    );
  }

  //Modify Respons

}
