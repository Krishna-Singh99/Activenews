import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussPageRoutingModule } from './buss-routing.module';

import { BussPage } from './buss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussPageRoutingModule
  ],
  declarations: [BussPage]
})
export class BussPageModule {}
