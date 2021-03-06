import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineLatest, Observable, ReplaySubject, Subject, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-the-perfect-component',
  templateUrl: './the-perfect-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThePerfectComponentComponent implements OnChanges {
  @Input()
  set id(value: string) {
    this.id$.next(value);
  }
  id$: ReplaySubject<string> = new ReplaySubject<string>(1);

  @Input() token!: string;

  title = '';
  _datepickerService = {
    value$: new Subject<string>()
  };

  data: unknown;
  data$: Observable<unknown>;
  date!: string;

  testTimer$: Observable<string>;

  constructor(private _http: HttpClient, private _changeDetectorRef: ChangeDetectorRef) {
    const b$: Subject<number> = new Subject<number>();
    const c$: Subject<number> = new Subject<number>();

    const a$ = combineLatest([b$, c$]).pipe(
      map(([b, c]: [number, number]) => b + c)
    );


    this.data$ = this.id$.pipe(
      switchMap((id: string) => {
        return this._http.get(`${id}`);
      })
    );

    this._datepickerService.value$.subscribe((value: string) => {
      this.date = value;
    });

    this.testTimer$ = timer(3000).pipe(map(() => 'test1'));

    timer(2000).subscribe(() => {
      this.token = 'test2';
      this._changeDetectorRef.markForCheck();
    });

    // setTimeout(() => {
    //   this.token = 'test';
    //   // this._changeDetectorRef.markForCheck();
    // }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.token) {
      console.log('token');
      this._http.get(`${this.token}`).subscribe((result: unknown) => {
        this.data = result;
      });
    }
  }

  dateChange(date: string): void {

  }

  submit(form: NgForm): void {
    if (form.valid) {
      console.log(form.value);
      /*
      * {
      *   title: '',
      *   date: ''
      * }
      * */
    }
  }
}
