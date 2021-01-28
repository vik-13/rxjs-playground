import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { timer } from 'rxjs';
import { skip, tap } from 'rxjs/operators';

@Pipe({
  name: 'test',
  pure: false
})
export class TestPipe implements PipeTransform {
  transformIndex = 0;
  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    timer(0, 1000).pipe(
      skip(1),
      tap((value: number) => {
        this.transformIndex = value;
        console.log(this.transformIndex);
        // this._changeDetectorRef.markForCheck();
      })
    ).subscribe();
  }

  transform(value: string): string {
    console.log('transform called');
    return `${value}-transformed-${this.transformIndex}`;
  }
}
