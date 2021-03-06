import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './operators';
import { AsyncComponent } from './async';
import { InputsComponent } from './inputs';
import { RouterParamsComponent } from './router-params';
import { ThePerfectComponentComponent } from './the-perfect-component';


const routes: Routes = [
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'router-params/:id',
    component: RouterParamsComponent
  },
  {
    path: 'the-perfect-component',
    component: ThePerfectComponentComponent
  },
  {
    path: '**',
    redirectTo: 'operators'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
