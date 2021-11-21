import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]=="Male") return "Welcome Mr. "+value;
    else return "Welcome Miss "+value
  }

}
