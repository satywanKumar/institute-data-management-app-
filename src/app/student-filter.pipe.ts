import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(students:any[], searchItem:string): any {
    console.log(students,searchItem);
    if(searchItem == undefined)
    {
      return students;
    }
    return students.filter(students=>students.name.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) !== -1);
  }

}
