import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable, of, throwError, timer } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsComponent {
  filter$: Observable<number> = timer(0, 1000).pipe(
    filter((value: number) => !!(value % 2))
  );

  map$: Observable<number> = timer(0, 1000).pipe(
    map((value: number) => value * 2)
  );

  merge$ = merge(
    timer(1000, 1000).pipe(map((value: number) => `first_${value}`)),
    timer(500, 1000).pipe(map((value: number) => `second_${value}`))
  );

  combineLatest$: Observable<string> = combineLatest([
    timer(1000, 1000).pipe(map((value: number) => `first_${value}`)),
    timer(500, 1000).pipe(map((value: number) => `second_${value}`))
  ]).pipe(
    map(([a, b]: [string, string]) => (`[${a}, ${b}]`))
  );

  // TODO: debounceTime

  // TODO: distinctUntilChanged

  // TODO: switchMap

  // TODO: exhaustMap

  constructor() {
    of(10).pipe(
      // filter(() => {}),
      tap((n: number) => {
        if (n > 5) {
          console.log(n);
        }
      })
    ).subscribe();

    // catchError example
    of(1).pipe(
      switchMap(() => throwError('test')),
      // Keep in mind that in case if catchError returns of(error) only success will be triggered as there is no error in the stream anymore
      catchError((error) => throwError('bla'))
    ).subscribe((data) => {
      console.log('success', data);
    }, (data) => {
      console.log('error', data);
    });
  }
}
