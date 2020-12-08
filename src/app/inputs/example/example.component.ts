import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  @Input()
  get id(): number { return this._id; }
  set id(value: number) {
    this._id = coerceNumberProperty(value);

    // TODO: Call any methods when value is changed;
  }
  private _id!: number;

  @Input()
  get selected(): boolean { return this._selected; }
  set selected(value: boolean) {
    this._selected = coerceBooleanProperty(value);

    // TODO: Call any methods when value is changed;
  }
  private _selected!: boolean;

  @Input()
  set token(value: string) { this.token$.next(value); }
  token$: ReplaySubject<string> = new ReplaySubject<string>(1);

  @Input()
  set token2(value: string) { this.token2$.next(value); }
  token2$: ReplaySubject<string> = new ReplaySubject<string>(1);

  tokens$: Observable<string>;

  constructor() {
    this.tokens$ = combineLatest([
      this.token$.pipe(
        filter((token: string) => !!token)
      ),
      this.token2$.pipe(
        filter((token: string) => !!token)
      )
    ]).pipe(
      map(([token, token2]: [string, string]) => `${token} - ${token2}`)
    );
  }
}
