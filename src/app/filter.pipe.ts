import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
     if (value.length === 0 || filterString === '' || filterString === 'Please Select a Option') {
       return value;
     }
     var updatedList = value;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(filterString.toLowerCase()) !== -1;
      });
     return updatedList;
  }
}
