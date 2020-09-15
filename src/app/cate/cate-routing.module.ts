import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatePage } from './cate.page';

const routes: Routes = [
  {
    path: '',
    component: CatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatePageRoutingModule {}
