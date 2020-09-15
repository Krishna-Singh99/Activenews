import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatePageRoutingModule } from './cate-routing.module';

import { CatePage } from './cate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatePageRoutingModule
  ],
  declarations: [CatePage]
})
export class CatePageModule {}
