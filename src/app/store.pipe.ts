import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'store'
})
export class StorePipe implements PipeTransform {

  transform(allItems:any, input?:string, itemType?:string): any {

    if((!input && !itemType) || (!input && itemType==="all")){
      return allItems;
    }
    else if(input && !itemType){
      return allItems.filter(allItems=>allItems.name.includes(input));
    }
    else if(!input && itemType){
      return allItems.filter(allItems=>allItems.category.includes(itemType));
    }
    else if(input && itemType){
      return allItems.filter(allItems=>allItems.category.includes(itemType) && allItems.name.includes(input));
    }
  }
}
