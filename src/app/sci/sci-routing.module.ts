import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciPage } from './sci.page';

const routes: Routes = [
  {
    path: '',
    component: SciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciPageRoutingModule {}
