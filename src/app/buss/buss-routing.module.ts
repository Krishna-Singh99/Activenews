import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussPage } from './buss.page';

const routes: Routes = [
  {
    path: '',
    component: BussPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussPageRoutingModule {}
