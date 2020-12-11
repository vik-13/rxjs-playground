import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnChanges {

  @Input() date?: string;

  @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    setTimeout(() => {
      this.date = 'updated';
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date) {
      console.log(changes.date.currentValue);
    }
  }

}
