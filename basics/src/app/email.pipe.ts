import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    
    const first = value[0];
    const doamine = value.split('@')[1];


    return first+'**********@'+doamine;
  }

}
