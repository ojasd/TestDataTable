import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'zipcode'})
export class ZipcodePipe implements PipeTransform {
  transform(value: any, ...args): any {
    if (value.length > 9) {
      return value.slice(0, 5);
    } else if (value.length === 5) {
      return value;
    } else {
      return value;
    }
  }
}
