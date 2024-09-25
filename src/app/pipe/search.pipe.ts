import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  
})
export class SearchPipe implements PipeTransform {

  transform(product:any[],term:string):any [] {
    return product.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
