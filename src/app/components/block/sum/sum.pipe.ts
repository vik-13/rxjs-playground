import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    return value + '-sum';
  }
}
