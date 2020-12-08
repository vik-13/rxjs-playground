import { NgModule } from '@angular/core';
import { InputsComponent } from './inputs.component';
import { ExampleModule } from './example';

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    ExampleModule
  ],
  exports: [
    InputsComponent
  ]
})
export class InputsModule {}
