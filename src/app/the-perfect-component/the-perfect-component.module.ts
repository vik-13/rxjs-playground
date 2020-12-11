import { NgModule } from '@angular/core';
import { ThePerfectComponentComponent } from './the-perfect-component.component';
import { DatepickerModule } from '../components/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ThePerfectComponentComponent
  ],
  imports: [
    DatepickerModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ThePerfectComponentComponent
  ]
})
export class ThePerfectComponentModule {}
