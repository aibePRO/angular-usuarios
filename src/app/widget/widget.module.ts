import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class WidgetModule { }
