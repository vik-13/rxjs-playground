import { NgModule } from '@angular/core';
import { BlockComponent } from './block.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {}
