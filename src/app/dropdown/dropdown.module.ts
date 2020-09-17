import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownLabelComponent } from './dropdown-label/dropdown-label.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';



@NgModule({
  declarations: [DropdownComponent, DropdownLabelComponent, DropdownMenuComponent, DropdownItemComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownComponent, DropdownLabelComponent, DropdownMenuComponent, DropdownItemComponent]
})
export class DropdownModule { }
