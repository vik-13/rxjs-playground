import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subscriber, timer } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent {
  example$: Observable<number> = timer(1000, 1000);

  example2$: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
    let i = 0;
    console.log('example2$ is initialized!');
    setInterval(() => {
      subscriber.next(i++);
    }, 1000);
  });

  example3$: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
    let i = 0;
    console.log('example3$ is initialized!');
    setInterval(() => {
      subscriber.next(i++);
    }, 1000);
  });

  example4$: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
    let i = 0;
    console.log('example4$ is initialized!');
    setInterval(() => {
      subscriber.next(i++);
    }, 1000);
  });
}
