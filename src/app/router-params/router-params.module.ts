import { NgModule } from '@angular/core';
import { RouterParamsComponent } from './router-params.component';
import { RouterParamsService } from './router-params.service';
import { BlockModule } from '../components/block';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RouterParamsComponent
  ],
  exports: [
    RouterParamsComponent
  ],
  imports: [
    BlockModule,
    ReactiveComponentModule,
    CommonModule
  ],
  providers: [
    RouterParamsService
  ]
})
export class RouterParamsModule {}
