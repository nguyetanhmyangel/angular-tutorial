import { Pipe } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Pipe({
  name: 'myuppercaseone'
})
export class MyUppercaseOnePipe extends UpperCasePipe {
  override transform(value: any, ...args: any[]): any {
    if (typeof value === 'string') {
      // if the value we have to transform is a simple string
      let result = super.transform(value);
      result = result.split(' ').join('-');
      return result;
    }
    return null;
  }
}
