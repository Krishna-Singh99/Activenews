import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SciPageRoutingModule } from './sci-routing.module';

import { SciPage } from './sci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciPageRoutingModule
  ],
  declarations: [SciPage]
})
export class SciPageModule {}
