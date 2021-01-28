import { NgModule } from '@angular/core';
import { ThePerfectComponentComponent } from './the-perfect-component.component';
import { DatepickerModule } from '../components/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test-pipe';

@NgModule({
  declarations: [
    ThePerfectComponentComponent,
    TestPipe
  ],
  imports: [
    DatepickerModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ThePerfectComponentComponent
  ]
})
export class ThePerfectComponentModule {}
