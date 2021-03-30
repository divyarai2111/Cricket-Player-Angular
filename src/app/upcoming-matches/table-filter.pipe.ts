import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
  

    console.log(list)
    console.log(value)
    console.log(value ? list.filter(item => item.date === value) : list)

    return value ? list.filter(item => item.date === value) : list;
  }

}