import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule, ButtonModule],
  exports: [CommonModule, MatButtonModule, MatIconModule, ButtonModule],
})
export class SharedModule {}
