import { NgModule } from '@angular/core';
import { AsyncComponent } from './async.component';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { BlockModule } from '../components/block';

@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    BlockModule
  ],
  exports: [
    AsyncComponent
  ]
})
export class AsyncModule {}
