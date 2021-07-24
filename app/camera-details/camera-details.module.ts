import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraDetailsRoutingModule } from './camera-details-routing.module';
import {MatTableModule} from '@angular/material/table';
import { matTabsAnimations } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CameraDetailsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CameraDetailsModule { }
