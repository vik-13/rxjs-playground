import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { CommonModule } from '@angular/common';
import { BlockModule } from '../../components/block';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    BlockModule
  ],
  exports: [
    ExampleComponent
  ]
})
export class ExampleModule {}
