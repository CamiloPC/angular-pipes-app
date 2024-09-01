import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

// false | canFly = 'no vuela'
// true | canFly = 'vuela'

@Pipe({
  name:'canFly',
  standalone: true
})
export class CanFlyPipe implements PipeTransform {

  transform(canFly: boolean): 'vuela' | 'no vuela' {
    return (canFly) ? 'vuela' : 'no vuela';
  }

}
