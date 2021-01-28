import { NgModule } from '@angular/core';
import { BlockComponent } from './block.component';
import { CommonModule } from '@angular/common';
import { SumPipe } from './sum/sum.pipe';

@NgModule({
  declarations: [
    BlockComponent,
    SumPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockComponent,
    SumPipe
  ]
})
export class BlockModule {}
