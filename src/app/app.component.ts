import { ApplicationRef, ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'rxjs-playground';

  constructor(private _applicationRef: ApplicationRef) {
    // timer(1000, 1000).subscribe(() => {
    //   _applicationRef.tick();
    // });
  }
}
