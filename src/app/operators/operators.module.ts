import { NgModule } from '@angular/core';
import { OperatorsComponent } from './operators.component';
import { CommonModule } from '@angular/common';
import { BlockModule } from '../components/block';

@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    BlockModule
  ],
  exports: [
    OperatorsComponent
  ]
})
export class OperatorsModule {}
