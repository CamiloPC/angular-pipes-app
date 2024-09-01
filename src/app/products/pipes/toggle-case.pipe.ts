import { Pipe, PipeTransform } from "@angular/core";

// camilo | toggleCase = 'CAMILO'
// CAMILO | toggleCase = 'camilo'

@Pipe({
  name:'toggleCase',
  standalone: true
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, isUpper: boolean): string {
    return (isUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
