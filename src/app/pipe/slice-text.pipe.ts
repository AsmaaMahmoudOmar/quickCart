import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(text:string): string {
    text=text.split(' ').slice(0,2).join(' ')
    return `${text}`;
  }

}
