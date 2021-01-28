import { ApplicationRef, ChangeDetectionStrategy, Component, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent {
  @Input()
  get title(): string { return this._title; }
  set title(value: string) {
    console.log('Title:', value);
    this._title = value;
  }

  private _title = '';

  list: string[] = [
    'a',
    'b',
    'c',
    'd'
  ];

  constructor(private _applicationRef: ApplicationRef) {
    // _applicationRef.tick();
    console.log('test');
  }

  getItemCount(): number {
    // this.title += 'Updated!';
    console.log('getItemCount');
    return this.list.length;
  }
}
